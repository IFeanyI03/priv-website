<template>
    <BackgroundGridBeam
        class="min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div
            class="max-w-md mx-auto w-full text-center space-y-6 relative z-20"
        >
            <div
                v-if="!errorMessage && !successMessage"
                class="relative flex justify-center items-center"
            >
                <div
                    class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white opacity-20"
                ></div>
                <div class="absolute animate-pulse">
                    <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <h2 class="text-2xl font-bold text-white">
                    {{
                        successMessage
                            ? "Secure Connection Established"
                            : "Unlocking secure access..."
                    }}
                </h2>
                <p class="text-white/40">
                    {{
                        successMessage
                            ? successMessageText
                            : "Please wait while Privé securely routes your credential."
                    }}
                </p>
            </div>

            <div
                v-if="errorMessage"
                class="p-4 mt-6 bg-red-100 flex items-center gap-2 text-red-900 rounded-lg text-base border border-red-500/20"
            >
                <span class="material-symbols-outlined">info</span>
                {{ errorMessage }}
            </div>

            <div
                v-if="successMessage"
                class="p-4 mt-6 bg-green-100 text-green-900 rounded-lg text-base border border-green-500/20"
            >
                {{ successMessage }}
            </div>
        </div>
    </BackgroundGridBeam>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";

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
                successMessage.value =
                    "Credential successfully saved to your Vault.";
                successMessageText.value =
                    "The share access is now secure in your personal extension.";
            } else {
                successMessage.value = "Link decrypted.";
                successMessageText.value =
                    "Please confirm the save in your browser extension modal.";
            }
            errorMessage.value = "";
        } else {
            if (event.data.locked) {
                errorMessage.value =
                    "Vault locked. Please click the Privé extension icon and enter your PIN to continue.";
            } else {
                errorMessage.value =
                    event.data.error || "Failed to unlock the link.";
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
