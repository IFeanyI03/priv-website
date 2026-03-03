<template>
    <div class="max-w-3xl mx-auto px-6 py-12 md:py-40 text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
        </h1>
        <p class="text-white/40 mb-12 text-lg">Effective Date: March 2026</p>

        <div class="space-y-12">
            <section>
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">1.</span> Data
                    Collection
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    Privé stores your encrypted passwords and vault data. This
                    data is synced to our secure backend (Supabase) but is
                    encrypted on your device using your Master PIN before
                    transmission. We cannot see, read, or access your passwords.
                </p>
            </section>

            <section>
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">2.</span> Local Storage
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    We use Chrome's <code>storage.local</code> API to cache your
                    encrypted vault for offline access and performance. This
                    data remains on your device.
                </p>
            </section>

            <section>
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">3.</span> User Identity
                </h2>
                <p class="text-white/40 leading-relaxed text-lg">
                    We use Google OAuth (via Chrome Identity API) solely to
                    authenticate you and sync your specific vault data. We do
                    not sell or share your personal information.
                </p>
            </section>

            <section>
                <h2
                    class="text-2xl font-bold text-white mb-6 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">4.</span> Permissions
                </h2>
                <div class="space-y-6">
                    <div
                        class="bg-zinc-900/50 p-6 rounded-[40px] border border-zinc-800"
                    >
                        <h3 class="text-white/80 font-bold text-xl mb-2">
                            ActiveTab
                        </h3>
                        <p class="text-white/40">
                            Used to detect password fields on the current page
                            for auto-filling.
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
                            "Save Password" prompt to prevent conflicts with
                            Privé.
                        </p>
                    </div>
                </div>
            </section>

            <section class="pt-8 border-t border-zinc-900">
                <h2
                    class="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                >
                    <span class="text-white/10 text-3xl">5.</span> Contact
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
