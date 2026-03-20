<template>
    <div
        class="max-w-4xl mx-auto px-6 py-12 md:py-40 text-left font-titillium text-white"
    >
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Authorization Guide
        </h1>
        <p class="text-white/40 mb-12 text-lg">
            Follow these steps to ensure Privé has the necessary permissions to
            secure your browser.
        </p>

        <div class="space-y-16">
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-white text-[#050505] rounded-full flex items-center justify-center font-bold"
                >
                    1
                </div>
                <h2 class="text-2xl font-bold mb-4">Open Browser Settings</h2>
                <p class="text-zinc-400 mb-4 leading-relaxed">
                    Copy and paste the link below into your browser's URL bar to
                    open the site settings directly.
                </p>
                <div
                    class="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 font-monospace text-sm overflow-x-auto"
                >
                    chrome://settings/content/siteDetails?site=https://prive-extension.vercel.app
                </div>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold"
                >
                    2
                </div>
                <h2 class="text-2xl font-bold mb-4">Privacy and Security</h2>
                <p class="text-zinc-400 leading-relaxed">
                    Navigate to the <strong>Privacy and security</strong> tab on
                    the left sidebar and select
                    <strong>Site settings</strong> at the bottom of the list.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold"
                >
                    3
                </div>
                <h2 class="text-2xl font-bold mb-4">Select Privé Domain</h2>
                <p class="text-zinc-400 leading-relaxed">
                    Under "Recent activity," click on
                    <strong>prive-extension.vercel.app</strong> to enter the
                    specific permission settings for the vault.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-white text-[#050505] rounded-full flex items-center justify-center font-bold"
                >
                    4
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Enable Local Network Access
                </h2>
                <p class="text-zinc-400 leading-relaxed mb-6">
                    Scroll to the bottom of the permissions list. Find
                    <strong>Local network access</strong> and set it to
                    <span class="text-white font-bold">Allow</span>.
                </p>
                <div
                    class="bg-zinc-900/30 p-6 rounded-3xl border border-white/5 flex items-center gap-4"
                >
                    <span class="material-symbols-outlined text-4xl"
                        >verified_user</span
                    >
                    <p class="text-sm text-zinc-500 italic">
                        This allows the extension to communicate securely with
                        your local encrypted vault.
                    </p>
                </div>
            </section>

            <section class="relative pl-12">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold"
                >
                    5
                </div>
                <h2 class="text-2xl font-bold mb-4">Restart and Sync</h2>
                <p class="text-zinc-400 leading-relaxed">
                    Finally,
                    <span class="text-white font-bold"
                        >restart your browser</span
                    >
                    to apply the new security settings and begin using the
                    extension.
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
.font-monospace {
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
</style>
