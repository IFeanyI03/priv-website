<template>
    <BackgroundGridBeam
        class="min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div
            class="max-w-md mx-auto w-full text-center relative z-20"
        >
            <div class="apple-glass-card rounded-[32px] p-8 md:p-10 space-y-6">
                <!-- Loading State -->
                <div
                    v-if="!errorMessage && !successMessage"
                    class="relative flex justify-center items-center py-4"
                >
                    <div
                        class="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-white/40"
                    ></div>
                    <div class="absolute">
                        <span class="material-symbols-outlined text-white text-2xl">lock</span>
                    </div>
                </div>

                <!-- Success State Icon -->
                <div v-else-if="successMessage" class="flex justify-center py-2">
                    <div class="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white shadow-[0_0_24px_rgba(255,255,255,0.2)]">
                        <span class="material-symbols-outlined text-3xl">check</span>
                    </div>
                </div>

                <!-- Error State Icon (Preserved Red for Alert) -->
                <div v-else-if="errorMessage" class="flex justify-center py-2">
                    <div class="w-14 h-14 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.2)]">
                        <span class="material-symbols-outlined text-3xl">gpp_maybe</span>
                    </div>
                </div>

                <div class="flex flex-col gap-2 text-center">
                    <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {{
                            successMessage
                                ? "Secure Connection Established"
                                : errorMessage
                                ? "Access Denied"
                                : "Unlocking secure access..."
                        }}
                    </h2>
                    <p class="text-white/50 text-sm leading-relaxed">
                        {{
                            successMessage
                                ? successMessageText
                                : errorMessage
                                ? errorMessage
                                : "Please wait while Privé securely routes your credential."
                        }}
                    </p>
                </div>

                <div v-if="errorMessage" class="pt-2">
                    <router-link
                        to="/"
                        class="apple-button inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-white/15 bg-white/10 text-white text-xs font-semibold hover:bg-white/20"
                    >
                        <span class="material-symbols-outlined text-xs">arrow_back</span>
                        <span>Back to Home</span>
                    </router-link>
                </div>
            </div>
        </div>
    </BackgroundGridBeam>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useHead } from "@unhead/vue";
import { toast } from "vue-sonner";
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";

useHead({
    title: "Secure Share Access",
    meta: [
        {
            name: "description",
            content: "Securely unlock and save credentials shared with you via Privé.",
        },
    ],
});

const errorMessage = ref("");
const successMessage = ref("");
const successMessageText = ref(
    "You can now safely view this in your Privé extension.",
);
let extensionTimeout = null;
let pollInterval = null;
let hasExtensionResponded = false;

const handleExtensionResponse = (event) => {
    if (event.data && event.data.source === "prive-extension") {
        hasExtensionResponded = true;

        if (pollInterval) clearInterval(pollInterval);
        if (extensionTimeout) clearTimeout(extensionTimeout);

        if (event.data.success) {
            if (event.data.type === "SAVE_COMPLETE") {
                successMessage.value = "Credential successfully saved to your Vault.";
                successMessageText.value = "The share access is now secure in your personal extension.";
                toast.success("Credential successfully saved to your Vault.");
                
                // Clear the hash from the URL so users don't see the IDs after it's saved
                window.history.replaceState(
                    null,
                    "",
                    window.location.pathname + window.location.search,
                );
            } else {
                successMessage.value = "Link decrypted.";
                successMessageText.value = "Please confirm the save in your browser extension modal.";
                toast.success("Link decrypted.");
            }
            errorMessage.value = "";
        } else {
            if (event.data.locked) {
                errorMessage.value = "Vault locked. Please click the Privé extension icon and enter your PIN to continue.";
                toast.error("Vault locked", { description: "Please enter your PIN in the extension." });
            } else {
                errorMessage.value = event.data.error || "Failed to unlock the link.";
                toast.error("Failed to unlock link", { description: errorMessage.value });
            }
            successMessage.value = "";
        }
    }
};

onMounted(() => {
    const hashString = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(hashString);
    const shareId = urlParams.get("share_id");
    const key = urlParams.get("key");

    if (!shareId || !key) {
        errorMessage.value =
            "Invalid secure link. Please make sure you copied the entire URL.";
        return;
    }

    window.addEventListener("message", handleExtensionResponse);

    pollInterval = setInterval(() => {
        window.postMessage(
            {
                source: "prive-web",
                type: "RESOLVE_SHARE",
                payload: { shareId, key },
            },
            "*",
        );
    }, 500);

    // Increased timeout for better detection
    extensionTimeout = setTimeout(() => {
        if (!hasExtensionResponded) {
            clearInterval(pollInterval);
            errorMessage.value =
                "The Privé extension was not detected. Please install and pin the extension to decrypt this link.";
        }
    }, 10000);
});

onUnmounted(() => {
    window.removeEventListener("message", handleExtensionResponse);
    if (extensionTimeout) clearTimeout(extensionTimeout);
    if (pollInterval) clearInterval(pollInterval);
});
</script>
