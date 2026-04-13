<template>
    <div
        class="max-w-4xl mx-auto px-6 py-25 md:py-40 text-left font-titillium text-white"
    >
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Comprehensive Usage Guide
        </h1>
        <p class="text-white/40 mb-12 text-lg">
            A detailed, step-by-step walkthrough of the Privé ecosystem, from
            initial setup to secure credential sharing.
        </p>

        <div class="space-y-20">
            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    01
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Pin the Extension for Visibility
                </h2>
                <p class="text-zinc-400 leading-relaxed mb-4">
                    To ensure Privé is always accessible, click the
                    <b>Extensions icon</b> (resembling a puzzle piece) in the
                    top-right corner of your browser toolbar. Locate
                    <b>Privé</b> in the dropdown list and click the
                    <b>Pin icon</b> to fix it permanently next to your address
                    bar for one-click access.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    02
                </div>
                <h2 class="text-2xl font-bold mb-4">Launch the Interface</h2>
                <p class="text-zinc-400 leading-relaxed">
                    Click the <b>Privé logo</b> in your pinned extension tray.
                    This will open the primary popup window where you can manage
                    your vault, view shared links, and adjust security settings.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    03
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Authenticate via Google OAuth
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    Privé uses the <b>Chrome Identity API</b> to securely verify
                    your identity. Sign in with your Google account to sync your
                    specific, encrypted vault data across your devices via our
                    secure backend.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    04
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Decrypt with your Master PIN
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    Because we follow a <b>Zero-Knowledge</b> architecture, your
                    passwords are encrypted on your device. Enter your unique
                    <b>Master PIN</b> to unlock the vault; without this PIN,
                    your data remains an unreadable string of characters that
                    even our servers cannot access.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    05
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Explore the "My Vault" List
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    Once unlocked, ensure you are on the <b>Passwords</b> tab.
                    You will see a list of your stored accounts (e.g.,
                    `mega.nz`, `crunchyroll.com`) along with their associated
                    usernames or emails.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    06
                </div>
                <h2 class="text-2xl font-bold mb-4">Trigger Smart Auto-Fill</h2>
                <p class="text-zinc-400 leading-relaxed">
                    Navigate to the login page of any site in your vault. Open
                    the extension and click directly on the desired credential
                    card; Privé will use the <b>ActiveTab</b> permission to
                    detect the input fields on the current page and
                    automatically populate your username and password.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    07
                </div>
                <h2 class="text-2xl font-bold mb-4">Access the Options Menu</h2>
                <p class="text-zinc-400 leading-relaxed">
                    On the right side of each credential entry, locate the
                    <b>vertical three-dot (ellipsis) icon</b>. Clicking this
                    opens a contextual menu containing advanced actions like
                    sharing, editing, or deleting the entry.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    08
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Select the "Share" Action
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    From the options menu, select <b>Share</b>. This initiates
                    the process of creating a secure link that allows a
                    recipient to access the credential without ever seeing the
                    raw password text.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-white text-[#050505] rounded-full flex items-center justify-center font-bold text-xs"
                >
                    09
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Wait for "Generating..."
                </h2>
                <p class="text-zinc-400 leading-relaxed mb-4">
                    The extension UI will change to show a
                    <b>"Generating..."</b>
                    status with a loading spinner. During this brief period, the
                    extension is preparing a unique, expiring URL specifically
                    for that credential.
                </p>
            </section>

            <section class="relative pl-12 border-l border-white/10">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    10
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Link Copied to Clipboard
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    Once generation is complete, the link is
                    <b>automatically saved to your clipboard</b>. You can
                    immediately paste this link into a message, email, or chat
                    to share it with your trusted contacts.
                </p>
            </section>

            <section class="relative pl-12">
                <div
                    class="absolute -left-4 top-0 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center font-bold text-xs"
                >
                    11
                </div>
                <h2 class="text-2xl font-bold mb-4">
                    Manage Links and Lock Vault
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                    Switch to the <b>Shared Links</b> tab to view and revoke any
                    active links you have created. When your session is
                    finished, use the <b>Lock Vault</b> or
                    <b>Log Out</b> buttons at the bottom of the popup to
                    re-secure your local data.
                </p>
            </section>
        </div>
    </div>
</template>
