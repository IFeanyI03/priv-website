<template>
    <div
        class="min-h-screen bg-[#050505] text-white font-titillium selection:bg-white/20 selection:text-white"
    >
        <main class="max-w-3xl mx-auto px-6 py-25 md:py-40 pb-24">

            <!-- Hero -->
            <section class="text-center mb-16">
                <div class="w-16 h-16 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-6 text-white/50">
                    <span class="material-symbols-outlined text-3xl">delete_forever</span>
                </div>
                <h1 class="display-title text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                    Delete Your Account
                </h1>
                <p class="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Account deletion is permanent and irreversible. Please read
                    carefully before proceeding.
                </p>
            </section>

            <!-- Warning card (Preserved Red for Danger Alert) -->
            <section
                class="border border-red-500/30 bg-red-500/10 backdrop-blur-xl rounded-[32px] p-7 md:p-8 mb-12 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]"
            >
                <div class="flex items-start gap-4">
                    <span class="material-symbols-outlined text-red-400 flex-shrink-0 text-3xl mt-0.5"
                        >warning</span
                    >
                    <div>
                        <h2 class="text-xl font-bold text-red-300 mb-3 tracking-tight">
                            What gets permanently deleted
                        </h2>
                        <ul class="space-y-2.5 text-white/70 text-sm md:text-base">
                            <li class="flex items-start gap-2.5">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                <span>Your Privé account and login credentials</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                <span>All saved passwords stored in your encrypted vault</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                <span>All active shared links you have created</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                <span>Any shared credentials others granted you access to</span>
                            </li>
                        </ul>
                        <p class="mt-5 text-sm text-red-400/90 font-medium">
                            This action <strong>cannot</strong> be undone. There is no recovery option.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Steps -->
            <section class="mb-14">
                <h2 class="text-2xl font-bold mb-3 text-white tracking-tight">
                    How to delete your account
                </h2>
                <p class="text-white/50 mb-6 text-sm md:text-base">
                    Account deletion is done securely through the Privé browser
                    extension — it requires your Master PIN to confirm your identity.
                </p>

                <div class="space-y-4">
                    <div
                        v-for="(step, i) in steps"
                        :key="i"
                        class="apple-glass-card flex items-start gap-5 p-6 rounded-[28px]"
                    >
                        <div
                            class="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-bold text-sm flex-shrink-0 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                        >
                            {{ i + 1 }}
                        </div>
                        <div class="flex-1">
                            <div class="font-semibold text-white mb-1 tracking-tight">
                                {{ step.title }}
                            </div>
                            <div class="text-white/50 text-sm leading-relaxed">
                                {{ step.desc }}
                            </div>
                        </div>
                        <span
                            class="material-symbols-outlined text-white/20 flex-shrink-0 ml-auto hidden md:block text-2xl"
                            >{{ step.icon }}</span
                        >
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section class="mb-14">
                <h2 class="text-2xl font-bold mb-6 text-white tracking-tight">
                    Frequently Asked Questions
                </h2>
                <div class="space-y-4">
                    <div
                        v-for="faq in faqs"
                        :key="faq.q"
                        class="apple-glass-card p-6 rounded-[28px]"
                    >
                        <h3 class="font-semibold text-white mb-2 text-base tracking-tight">{{ faq.q }}</h3>
                        <p class="text-white/50 text-sm leading-relaxed">{{ faq.a }}</p>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section class="text-center pt-4">
                <p class="text-white/40 text-sm mb-4">
                    Changed your mind? Your data is safe — no action needed.
                </p>
                <router-link
                    to="/"
                    class="apple-button inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-base rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_32px_-8px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                >
                    <span class="material-symbols-outlined text-sm">arrow_back</span>
                    <span>Back to Home</span>
                </router-link>
            </section>
        </main>
    </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
    title: "Delete Account",
    meta: [
        {
            name: "description",
            content: "Learn how to permanently delete your Privé account and vault data securely.",
        },
    ],
});

const steps = [
    {
        title: "Open the Privé extension",
        desc: "Click the Privé icon in your browser toolbar. If your vault is locked, enter your 4-digit Master PIN to unlock it.",
        icon: "extension",
    },
    {
        title: "Go to Settings",
        desc: "Click the gear (⚙) icon in the top-right corner of the extension popup.",
        icon: "settings",
    },
    {
        title: "Open Account settings",
        desc: "Tap the Account row to open your account details page.",
        icon: "manage_accounts",
    },
    {
        title: "Scroll to Danger Zone and tap Delete Account",
        desc: "At the bottom of the Account page you will see a red Danger Zone section. Tap \"Delete Account\".",
        icon: "delete_forever",
    },
    {
        title: "Confirm with your Master PIN",
        desc: "A confirmation dialog will appear asking for your 4-digit Master PIN. This is the final step — once confirmed, deletion is permanent.",
        icon: "lock",
    },
];

const faqs = [
    {
        q: "Can I recover my account after deletion?",
        a: "No. Deletion is immediate and permanent. Because Privé uses zero-knowledge encryption, we have no access to your data and cannot restore it.",
    },
    {
        q: "What happens to people I shared passwords with?",
        a: "Any active shared links you created will be revoked. Recipients who already saved the credential to their own vault will retain access to their local copy.",
    },
    {
        q: "What if I forget my Master PIN before deleting?",
        a: "The Master PIN is non-recoverable by design. Without it you cannot confirm account deletion. In that case, you can log out of the extension — your data will remain inaccessible without the PIN.",
    },
    {
        q: "Why is deletion done through the extension and not this website?",
        a: "Deletion requires PIN verification, which is only possible inside the extension where your vault session lives. The website has no access to your encrypted vault.",
    },
];
</script>

<style scoped>
.font-titillium {
    font-family: "Titillium Web", sans-serif;
}
</style>
