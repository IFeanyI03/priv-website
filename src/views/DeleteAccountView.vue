<template>
    <div
        class="min-h-screen bg-[#050505] text-white font-titillium selection:bg-indigo-500/30 "
    >
        <main class="max-w-3xl mx-auto px-6 py-25 md:py-40 pb-24">

            <!-- Hero -->
            <section class="text-center mb-16">
                <span
                    class="material-symbols-outlined-large text-white/30 mb-6 block"
                    >delete_forever</span
                >
                <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Delete Your Account
                </h1>
                <p class="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
                    Account deletion is permanent and irreversible. Please read
                    carefully before proceeding.
                </p>
            </section>

            <!-- Warning card -->
            <section
                class="border-2 border-red-500/30 bg-red-500/5 rounded-[40px] p-8 mb-10"
            >
                <div class="flex items-start gap-4">
                    <span class="material-symbols-outlined-large text-red-400 flex-shrink-0"
                        >warning</span
                    >
                    <div>
                        <h2 class="text-xl font-bold text-red-300 mb-3">
                            What gets permanently deleted
                        </h2>
                        <ul class="space-y-2 text-zinc-400 text-base">
                            <li class="flex items-start gap-2">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                Your Privé account and login credentials
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                All saved passwords stored in your encrypted vault
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                All active shared links you have created
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-red-400 font-bold mt-0.5">✕</span>
                                Any shared credentials others granted you access to
                            </li>
                        </ul>
                        <p class="mt-4 text-sm text-red-400/80">
                            This action <strong>cannot</strong> be undone. There is no recovery option.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Steps -->
            <section class="mb-10">
                <h2 class="text-2xl font-bold mb-6 text-white">
                    How to delete your account
                </h2>
                <p class="text-zinc-400 mb-6 text-base">
                    Account deletion is done securely through the Privé browser
                    extension — it requires your Master PIN to confirm your identity.
                </p>

                <div class="space-y-4">
                    <div
                        v-for="(step, i) in steps"
                        :key="i"
                        class="flex items-start gap-5 p-6 border-2 border-white/10 rounded-[40px] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    >
                        <div
                            class="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-sm flex-shrink-0 text-white/60"
                        >
                            {{ i + 1 }}
                        </div>
                        <div>
                            <div class="font-semibold text-white mb-1">
                                {{ step.title }}
                            </div>
                            <div class="text-zinc-400 text-sm leading-relaxed">
                                {{ step.desc }}
                            </div>
                        </div>
                        <span
                            class="material-symbols-outlined-large text-white/10 flex-shrink-0 ml-auto hidden md:block"
                            >{{ step.icon }}</span
                        >
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section class="mb-10">
                <h2 class="text-2xl font-bold mb-6 text-white">
                    Frequently Asked Questions
                </h2>
                <div class="space-y-4">
                    <div
                        v-for="faq in faqs"
                        :key="faq.q"
                        class="p-6 border-2 border-white/10 rounded-[40px]"
                    >
                        <h3 class="font-semibold text-white mb-2">{{ faq.q }}</h3>
                        <p class="text-zinc-400 text-sm leading-relaxed">{{ faq.a }}</p>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section class="text-center">
                <p class="text-zinc-500 text-sm mb-4">
                    Changed your mind? Your data is safe — no action needed.
                </p>
                <router-link
                    to="/"
                    class="inline-block px-8 py-4 text-white font-bold border-2 border-white/10 rounded-[40px] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.10)] bg-[#050505]"
                >
                    Back to Home
                </router-link>
            </section>
        </main>
    </div>
</template>

<script setup>
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
.material-symbols-outlined-large {
    font-size: 48px;
    font-family: "Material Symbols Outlined";
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    display: inline-block;
}
</style>
