<template>
    <BackgroundGridBeam class="min-h-screen flex flex-col items-center justify-center px-4">
        <div class="max-w-xl mx-auto w-full relative z-20 animate-fade-in">
            
            <!-- Header -->
            <div class="flex justify-between items-center mb-8">
                <router-link to="/" class="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200">
                    <span class="material-symbols-outlined">arrow_back</span>
                    <span class="font-medium">Back</span>
                </router-link>
                <h1 class="text-2xl font-bold text-white tracking-tight">Manage Access</h1>
                <div class="w-16"></div>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 gap-4">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white/30"></div>
                <p class="text-white/40 text-sm">Connecting to Privé extension…</p>
            </div>
            
            <!-- Error State -->
            <div v-else-if="errorMessage" class="bg-red-500/10 border border-red-500/20 backdrop-blur-xl rounded-2xl p-8 text-center">
                <span class="material-symbols-outlined text-red-400 block mb-3" style="font-size:40px;">error</span>
                <h3 class="text-white font-semibold text-lg mb-2">Something went wrong</h3>
                <p class="text-white/60 text-sm leading-relaxed whitespace-pre-line">{{ errorMessage }}</p>
                <button @click="retry" class="mt-6 px-6 py-2 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors">
                    Try Again
                </button>
            </div>

            <!-- Content -->
            <div v-else class="space-y-6">
                <!-- Credential Header Card -->
                <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl">
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg" :style="{ backgroundColor: shareDetails?.color || '#333' }">
                        <img v-if="shareDetails?.logo" :src="shareDetails.logo" class="w-10 h-10 object-contain drop-shadow-md" />
                        <span v-else class="text-white font-bold text-xl">{{ shareDetails?.site?.charAt(0)?.toUpperCase() || '?' }}</span>
                    </div>
                    <h2 class="text-xl font-bold text-white mb-1">{{ shareDetails?.site }}</h2>
                    <p class="text-white/50 text-sm">{{ shareDetails?.username }}</p>
                </div>

                <!-- Users List -->
                <div>
                    <h3 class="text-white/50 font-semibold text-xs uppercase tracking-widest mb-4 px-1">People with Access · {{ users.length }}</h3>
                    
                    <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        
                        <div v-if="users.length === 0" class="p-10 text-center">
                            <span class="material-symbols-outlined text-white/20 block mb-2" style="font-size:32px;">group</span>
                            <p class="text-white/40 text-sm">No one has accessed this credential yet.</p>
                        </div>

                        <TransitionGroup name="user-list" tag="div">
                            <div v-for="(user, index) in users" :key="user.id" 
                                 class="p-4 flex items-center justify-between group transition-colors duration-150 hover:bg-white/[0.03]"
                                 :class="{ 'border-t border-white/5': index > 0 }">
                                
                                <div class="flex items-center gap-4 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-white/70 overflow-hidden">
                                        <img v-if="user.avatar" :src="user.avatar" class="w-full h-full object-cover" />
                                        <span v-else class="text-base font-medium uppercase">{{ (user.first_name?.[0] || user.email?.[0] || 'U') }}</span>
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                        <span class="text-white font-medium text-sm truncate">{{ user.first_name ? `${user.first_name} ${user.last_name || ''}`.trim() : (user.email || 'Unknown User') }}</span>
                                        <span v-if="user.email" class="text-white/35 text-xs truncate">{{ user.email }}</span>
                                    </div>
                                </div>
                                
                                <button @click="removeUser(user.id)" 
                                        class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white/20 hover:bg-red-500/15 hover:text-red-400 transition-all duration-200 active:scale-90"
                                        title="Revoke Access">
                                    <span class="material-symbols-outlined" style="font-size:16px;">close</span>
                                </button>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
        
        <PinModal 
            v-model:isOpen="isPinModalOpen" 
            ref="pinModalRef"
            title="Confirm Revocation"
            description="Please enter your Master PIN to confirm removing this user."
            @confirm="handlePinConfirm"
        />
    </BackgroundGridBeam>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";
import PinModal from "../components/PinModal.vue";
import { toast } from 'vue-sonner';

const shareId = ref(new URLSearchParams(window.location.search).get("share_id"));

const isLoading = ref(true);
const errorMessage = ref("");
const shareDetails = ref(null);
const users = ref([]);

// Modal State
const isPinModalOpen = ref(false);
const pendingUserId = ref(null);
const pinModalRef = ref(null);

// Get the extension ID from the URL parameter (passed by popup.js)
const extensionId = ref(new URLSearchParams(window.location.search).get("ext_id"));

/**
 * Sends a message directly to the extension via chrome.runtime.sendMessage (externally_connectable)
 * Falls back to the window.postMessage content script bridge if chrome.runtime is unavailable.
 */
function sendToExtension(message) {
    return new Promise((resolve, reject) => {
        // Method 1: Direct chrome.runtime.sendMessage (externally_connectable)
        if (extensionId.value && typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
            try {
                chrome.runtime.sendMessage(extensionId.value, message, (response) => {
                    if (chrome.runtime.lastError) {
                        console.warn("[ManageAccess] Direct message failed:", chrome.runtime.lastError.message);
                        // Fall back to content script bridge
                        sendViaContentScript(message).then(resolve).catch(reject);
                    } else {
                        console.log("[ManageAccess] ✅ Direct response:", response);
                        resolve(response);
                    }
                });
                return;
            } catch (e) {
                console.warn("[ManageAccess] chrome.runtime.sendMessage threw:", e);
            }
        }
        
        // Method 2: Content script bridge (fallback)
        sendViaContentScript(message).then(resolve).catch(reject);
    });
}

function sendViaContentScript(message) {
    return new Promise((resolve, reject) => {
        const responseType = message.type === "REMOVE_SHARE_USER" 
            ? "REMOVE_SHARE_USER_RESPONSE" 
            : "GET_SHARE_USERS_RESPONSE";
        
        let resolved = false;
        const handler = (event) => {
            if (event.data && event.data.source === "prive-extension" && event.data.type === responseType) {
                resolved = true;
                window.removeEventListener("message", handler);
                resolve(event.data);
            }
        };
        window.addEventListener("message", handler);
        
        window.postMessage({
            source: "prive-web",
            type: message.type === "GET_SHARE_USERS" ? "GET_SHARE_USERS" : "REMOVE_SHARE_USER",
            payload: message.type === "GET_SHARE_USERS" 
                ? { shareId: message.id }
                : { shareId: message.shareId, userId: message.userId },
        }, "*");
        
        setTimeout(() => {
            if (!resolved) {
                window.removeEventListener("message", handler);
                reject(new Error("Content script bridge timeout"));
            }
        }, 8000);
    });
}

async function fetchShareUsers() {
    isLoading.value = true;
    errorMessage.value = "";
    
    try {
        const response = await sendToExtension({
            type: "GET_SHARE_USERS",
            id: shareId.value,
        });
        
        isLoading.value = false;
        
        if (response && response.success) {
            shareDetails.value = response.data.share;
            users.value = response.data.users || [];
        } else {
            errorMessage.value = response?.error || "Failed to load share details.";
        }
    } catch (err) {
        isLoading.value = false;
        errorMessage.value = `Could not connect to the Privé extension.\n\nMake sure:\n• The extension is installed and enabled\n• You reloaded the extension after the update\n• Open this page from the extension popup`;
        console.error("[ManageAccess] Error:", err);
    }
}

const removeUser = (userId) => {
    pendingUserId.value = userId;
    isPinModalOpen.value = true;
};

const handlePinConfirm = async (pin) => {
    if (pin.length < 4) {
        toast.error("Incomplete PIN", { description: "Please enter your 4-digit Master PIN." });
        pinModalRef.value?.showError();
        return;
    }

    try {
        // Step 1: Verify PIN
        const unlockRes = await sendToExtension({
            type: "UNLOCK_VAULT",
            password: pin,
        });

        if (!unlockRes || !unlockRes.success) {
            toast.error("Incorrect PIN");
            pinModalRef.value?.showError();
            return;
        }

        // Step 2: Remove User
        const response = await sendToExtension({
            type: "REMOVE_SHARE_USER",
            shareId: shareId.value,
            userId: pendingUserId.value,
        });
        
        if (response && response.success) {
            pinModalRef.value?.showSuccess();
            setTimeout(() => {
                isPinModalOpen.value = false;
                users.value = users.value.filter(u => u.id !== pendingUserId.value);
                toast.success("Access Revoked", { description: "The user has been successfully removed." });
                pendingUserId.value = null;
            }, 400);
        } else {
            toast.error("Failed to remove user", { description: response?.error || "Unknown error" });
            pinModalRef.value?.showError();
        }
    } catch (err) {
        toast.error("Connection Error", { description: "Extension is not responding." });
        pinModalRef.value?.showError();
    }
};

const retry = () => {
    fetchShareUsers();
};

onMounted(() => {
    if (!shareId.value) {
        isLoading.value = false;
        errorMessage.value = "No share ID found in the URL.";
        return;
    }

    console.log("[ManageAccess] 🚀 Mounted | share_id:", shareId.value, "| ext_id:", extensionId.value);
    fetchShareUsers();
});
</script>

<style scoped>
.animate-fade-in {
    animation: fadeInUp 0.5s ease-out both;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
}

.user-list-enter-active {
    transition: all 0.35s ease;
}
.user-list-leave-active {
    transition: all 0.25s ease;
}
.user-list-enter-from {
    opacity: 0;
    transform: translateX(-12px);
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(12px);
}
</style>
