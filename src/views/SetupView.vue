<template>
    <div
        class="max-w-4xl mx-auto px-6 py-25 md:py-40 text-left font-titillium text-white"
    >
        <h1 class="display-title text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Authorization Guide
        </h1>
        <p class="text-white/50 mb-14 text-lg">
            Follow these steps to ensure Privé has the necessary permissions to
            secure your browser.
        </p>

        <div class="space-y-16">
            <!-- Step 1 -->
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 rounded-full border border-white/25 bg-white text-[#050505] flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                    1
                </div>
                <h2 class="text-2xl font-bold mb-3 tracking-tight text-white">Open Browser Settings</h2>
                <p class="text-white/60 mb-4 leading-relaxed text-sm">
                    Copy and paste the link below into your browser's URL bar to
                    open the site settings directly.
                </p>
                <div
                    class="apple-glass-card p-4 rounded-2xl flex items-center justify-between gap-3 overflow-x-auto"
                >
                    <span class="font-monospace text-xs md:text-sm text-white/80 select-all truncate">
                        {{ settingsUrl }}
                    </span>
                    <button
                        @click="copyUrl"
                        class="apple-button flex-shrink-0 px-3 py-1.5 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all flex items-center gap-1.5"
                    >
                        <span class="material-symbols-outlined text-xs">{{ copied ? 'done' : 'content_copy' }}</span>
                        <span>{{ copied ? 'Copied' : 'Copy' }}</span>
                    </button>
                </div>
            </section>

            <!-- Step 2 -->
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                >
                    2
                </div>
                <h2 class="text-2xl font-bold mb-3 tracking-tight text-white">Privacy and Security</h2>
                <p class="text-white/60 leading-relaxed text-sm">
                    Navigate to the <strong class="text-white">Privacy and security</strong> tab on
                    the left sidebar and select
                    <strong class="text-white">Site settings</strong> at the bottom of the list.
                </p>
            </section>

            <!-- Step 3 -->
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                >
                    3
                </div>
                <h2 class="text-2xl font-bold mb-3 tracking-tight text-white">Select Privé Domain</h2>
                <p class="text-white/60 leading-relaxed text-sm">
                    Under "Recent activity," click on
                    <strong class="text-white">prive-extension.com</strong> to enter the
                    specific permission settings for the vault.
                </p>
            </section>

            <!-- Step 4 -->
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                >
                    4
                </div>
                <h2 class="text-2xl font-bold mb-3 tracking-tight text-white">
                    Enable Local Network Access
                </h2>
                <p class="text-white/60 leading-relaxed mb-6 text-sm">
                    Scroll to the bottom of the permissions list. Find
                    <strong class="text-white">Local network access</strong> and set it to
                    <span class="text-white font-bold">Allow</span>.
                </p>
                <div
                    class="apple-glass-card p-6 rounded-[28px] flex items-center gap-4 text-left"
                >
                    <span class="material-symbols-outlined text-3xl text-white/80"
                        >verified_user</span
                    >
                    <p class="text-xs md:text-sm text-white/50 leading-relaxed">
                        This allows the extension to communicate securely with
                        your local encrypted vault on your device.
                    </p>
                </div>
            </section>

            <!-- Step 5 -->
            <section class="relative pl-12">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                >
                    5
                </div>
                <h2 class="text-2xl font-bold mb-3 tracking-tight text-white">Restart and Sync</h2>
                <p class="text-white/60 leading-relaxed text-sm">
                    Finally,
                    <span class="text-white font-bold"
                        >restart your browser</span
                    >
                    to apply the new security settings and begin using the
                    extension with full protection.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import { toast } from "vue-sonner";

useHead({
    title: "Authorization Guide",
    meta: [
        {
            name: "description",
            content: "Step-by-step authorization guide for configuring Privé password manager extension permissions.",
        },
    ],
});

const settingsUrl = ref("chrome://settings/content/siteDetails?site=https://prive-extension.com");
const copied = ref(false);

const copyUrl = async () => {
    try {
        await navigator.clipboard.writeText(settingsUrl.value);
        copied.value = true;
        toast.success("Settings URL copied to clipboard");
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch {
        toast.error("Failed to copy URL");
    }
};
</script>

<style scoped>
.font-monospace {
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
</style>
