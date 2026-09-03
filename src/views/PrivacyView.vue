<template>
    <div class="max-w-3xl mx-auto px-6 py-25 md:py-40 text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
        </h1>
        <p class="text-white/40 mb-12 text-lg">Effective Date: April 2026</p>

        <div class="space-y-12">
            <section>
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">1.</span> Data
                    Collection & Use
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    Privé collects the minimum data necessary to provide its
                    core functionality. We store your encrypted passwords and
                    vault data. This data is synced to our secure backend but is
                    strictly encrypted on your device using your Master PIN
                    before transmission. We cannot see, read, or access your
                    passwords or decryption keys.
                </p>
            </section>

            <section>
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">2.</span> Data Sharing
                    & Third Parties
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    <strong>No Sale of Data:</strong> We do not sell, rent, or
                    trade your personal data to any third parties.<br /><br />
                    <strong>Third-Party Services:</strong> We share data only
                    with <strong>Google</strong> (via the Chrome Identity API)
                    solely for the purpose of authenticating your identity
                    (OAuth) and synchronizing your encrypted vault across your
                    devices.
                </p>
            </section>

            <section>
                <h2
                    class="text-2xl font-bold text-white mb-6 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">3.</span> Chrome
                    Permissions & Browser Alerts
                </h2>
                <p class="text-white/40 leading-relaxed text-lg mb-6">
                    To provide seamless password management and zero-knowledge encryption, 
                    Privé requires specific Chrome permissions. When installing or updating 
                    the extension from the Chrome Web Store, Chrome displays an installation 
                    dialogue with permission alerts. We adhere strictly to the Chrome Web Store 
                    User Data Policy, including the Limited Use requirements.
                </p>

                <!-- Chrome Alert Notice Box -->
                <div
                    class="p-6 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-white/80 mt-0.5">info</span>
                        <div>
                            <h3 class="text-white font-semibold text-lg mb-1">
                                Understanding Chrome's Permission Alerts
                            </h3>
                            <p class="text-white/60 text-sm leading-relaxed">
                                Standard browser alerts can sometimes sound broader than they actually are. 
                                Below is a transparent breakdown of the exact permissions Privé requests, 
                                the corresponding browser alerts triggered, and why each is strictly required.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <!-- Privacy Permission Card -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <h3 class="text-white font-bold text-xl tracking-tight">
                                Privacy (chrome.privacy)
                            </h3>
                            <span class="px-3 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                Chrome Alert: "Change your privacy-related settings"
                            </span>
                        </div>
                        <p class="text-white/60 leading-relaxed text-sm">
                            <strong class="text-white/90">Why Chrome displays this alert:</strong> 
                            Chrome prompts this warning whenever an extension interacts with browser privacy settings.
                            <br /><br />
                            <strong class="text-white/90">How Privé uses it:</strong> 
                            Privé accesses this permission strictly to toggle <code>chrome.privacy.services.passwordSavingEnabled</code> 
                            to disabled. This turns off Chrome's default, unencrypted "Save password?" prompt, preventing 
                            conflicting duplicate dialogs and ensuring your credentials stay encrypted inside Privé rather than being stored in plaintext browser autofill. Privé <strong class="text-white/90">never</strong> modifies your search engine, tracking protection, browsing history, or any other browser privacy settings.
                        </p>
                    </div>

                    <!-- Alarms Permission Card -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <h3 class="text-white font-bold text-xl tracking-tight">
                                Alarms (chrome.alarms)
                            </h3>
                            <span class="px-3 py-0.5 text-xs font-medium rounded-full bg-white/10 text-white/90 border border-white/20">
                                Security Timer
                            </span>
                        </div>
                        <p class="text-white/60 leading-relaxed text-sm">
                            Privé uses background alarms exclusively to manage the vault auto-lock timer (<code>VAULT_LOCK_TIMER</code>). 
                            If your device remains inactive for 15 minutes, this timer automatically re-locks your vault and clears decrypted keys from memory, safeguarding your data if you step away from your computer.
                        </p>
                    </div>

                    <!-- Identity Card -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <h3 class="text-white font-bold text-xl mb-2 tracking-tight">
                            Identity (chrome.identity)
                        </h3>
                        <p class="text-white/60 leading-relaxed text-sm">
                            Used to authenticate you securely via Google OAuth. We
                            process your Google Email Address and Unique User ID
                            strictly to establish your account and sync your encrypted vault.
                        </p>
                    </div>

                    <!-- Storage Card -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <h3 class="text-white font-bold text-xl mb-2 tracking-tight">
                            Storage (chrome.storage.local)
                        </h3>
                        <p class="text-white/60 leading-relaxed text-sm">
                            We use Chrome's <code>storage.local</code> API to
                            cache your encrypted vault ciphertext and preferences for
                            offline access and rapid autofill. This ciphertext remains
                            securely encrypted on your device and cannot be read without your Master PIN.
                        </p>
                    </div>

                    <!-- Host Permissions & Content Scripts -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <h3 class="text-white font-bold text-xl tracking-tight">
                                Host Permissions & Content Scripts
                            </h3>
                            <span class="px-3 py-0.5 text-xs font-medium rounded-full bg-white/10 text-white/90 border border-white/20">
                                Chrome Alert: "Read and change all your data on the websites you visit"
                            </span>
                        </div>
                        <p class="text-white/60 leading-relaxed text-sm">
                            Enables Privé to inject the secure floating autofill icon next to login fields on web pages. 
                            This is strictly limited to detecting username/password fields and filling saved credentials when you prompt it to do so. Privé never monitors, logs, or tracks your general browsing activity, keystrokes, or page content.
                        </p>
                    </div>

                    <!-- ActiveTab Card -->
                    <div
                        class="apple-glass-card p-7 rounded-[32px]"
                    >
                        <h3 class="text-white font-bold text-xl mb-2 tracking-tight">
                            ActiveTab
                        </h3>
                        <p class="text-white/60 leading-relaxed text-sm">
                            Grants temporary access to the currently active tab
                            only when you explicitly click or interact with the Privé extension. 
                            This allows us to detect login fields on demand without requiring persistent background observation.
                        </p>
                    </div>
                </div>
            </section>

            <section class="pt-8 border-t border-zinc-900">
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">4.</span> Contact
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    If you have any questions or concerns regarding our privacy practices or Chrome permissions,
                    please reach out to us at: <br />
                    <a
                        href="mailto:ifeanyiaghasili@gmail.com"
                        class="text-white hover:text-white/10 transition-colors mt-2 inline-block font-medium"
                        >ifeanyiaghasili@gmail.com</a
                    >
                </p>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
    title: "Privacy Policy",
    meta: [
        {
            name: "description",
            content:
                "Privé Privacy Policy: Discover how our zero-knowledge password manager protects your data, uses local AES encryption, and handles Chrome extension permissions and alerts.",
        },
    ],
});
</script>