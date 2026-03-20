<template>
    <div
        class="max-w-4xl mx-auto px-6 py-25 md:py-40 text-left font-titillium text-white"
    >
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How to Use Privé
        </h1>
        <p class="text-white/40 mb-12 text-lg">
            Master your digital security with these simple steps to manage and
            fill your credentials.
        </p>

        <div class="space-y-16">
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-sm"
                >
                    01
                </div>
                <h2 class="text-2xl font-bold mb-4">Pin the Extension</h2>
                <p class="text-zinc-400 mb-4 leading-relaxed">
                    For quick access, click the
                    <strong>Puzzle Piece icon</strong> (Extensions) in your
                    browser's top-right corner. Find <strong>Privé</strong> in
                    the list and click the <strong>Pin icon</strong> to keep it
                    visible next to your address bar.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-sm"
                >
                    02
                </div>
                <h2 class="text-2xl font-bold mb-4">Open and Unlock</h2>
                <p class="text-zinc-400 leading-relaxed mb-4">
                    Click the <strong>Privé icon</strong> in your extension
                    tray. If it is your first time in the session, enter your
                    <strong>Master PIN</strong> to decrypt your vault locally on
                    your device.
                </p>
                <div
                    class="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 inline-flex items-center gap-3"
                >
                    <span class="material-symbols-outlined text-indigo-400"
                        >lock_open</span
                    >
                    <span class="text-sm text-zinc-300"
                        >Your data remains encrypted until you provide your
                        PIN.</span
                    >
                </div>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-white text-[#050505] rounded-full flex items-center justify-center font-bold text-sm"
                >
                    03
                </div>
                <h2 class="text-2xl font-bold mb-4">Auto-Fill Credentials</h2>
                <p class="text-zinc-400 leading-relaxed mb-6">
                    When you are on a login page, open the extension and click
                    on the relevant credential entry. Privé will automatically
                    detect the password fields and fill them for you.
                </p>
                <div
                    class="bg-zinc-900/30 p-6 rounded-[40px] border border-white/5"
                >
                    <h3 class="text-white/80 font-bold mb-2">
                        Pro Tip: ActiveTab Permission
                    </h3>
                    <p class="text-sm text-zinc-500">
                        Privé uses the <code>ActiveTab</code> permission to
                        securely see only the current page's fields when you
                        request an auto-fill.
                    </p>
                </div>
            </section>

            <section class="relative pl-12">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm"
                >
                    04
                </div>
                <h2 class="text-2xl font-bold mb-4">Generate Instant Links</h2>
                <p class="text-zinc-400 leading-relaxed">
                    To share access without revealing your raw password, click
                    the <strong>Link icon</strong> next to a credential to
                    generate a secure, expiring sharing link.
                </p>
            </section>
        </div>
    </div>
</template>
