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
                    Permissions
                </h2>
                <p class="text-white/40 leading-relaxed text-lg mb-6">
                    To provide its functionality, Privé requires specific Chrome
                    permissions. We adhere strictly to the Chrome Web Store User
                    Data Policy, including the Limited Use requirements.
                </p>
                <div class="space-y-6">
                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            Identity
                        </h3>
                        <p class="text-white/40">
                            Used to authenticate you via Google OAuth. We
                            process your Google Email Address and Unique User ID
                            strictly to create and sync your account.
                        </p>
                    </div>

                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            Storage
                        </h3>
                        <p class="text-white/40">
                            We use Chrome's <code>storage.local</code> API to
                            cache your encrypted vault and preferences for
                            offline access and performance. This data remains
                            securely on your device.
                        </p>
                    </div>

                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            Host Permissions
                        </h3>
                        <p class="text-white/40">
                            Allows Privé to securely inject the necessary
                            auto-fill scripts directly into the login pages you
                            visit. This is strictly limited to credential
                            management on the pages you interact with.
                        </p>
                    </div>

                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            Tabs
                        </h3>
                        <p class="text-white/40">
                            Used to read the URL of your currently open tabs.
                            This is necessary to identify the website you are
                            visiting so we can find and suggest the matching
                            encrypted credentials from your vault. We do not
                            track or store your browsing history.
                        </p>
                    </div>

                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            ActiveTab
                        </h3>
                        <p class="text-white/40">
                            Grants temporary access to the currently active tab
                            when you interact with the extension. This allows us
                            to detect password fields and execute auto-filling
                            safely without requiring persistent background
                            access.
                        </p>
                    </div>

                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            Privacy
                        </h3>
                        <p class="text-white/40">
                            Used to temporarily disable the browser's default
                            "Save Password" prompt to prevent confusing
                            conflicts with Privé's secure saving mechanics.
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
                    If you have any questions or concerns about this policy,
                    please contact us at: <br />
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
