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

        <div class="space-y-12">
            <section
                id="step-1"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(1)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    01
                </div>

                <div
                    @click="toggleStep(1)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Pin the Extension for Visibility
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(1) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div
                    v-show="activeSteps.includes(1)"
                    class="pt-4 pb-8 origin-top transition-all"
                >
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        To ensure Privé is always accessible, click the
                        <b>Extensions icon</b> (resembling a puzzle piece) in
                        the top-right corner of your browser toolbar. Locate
                        <b>Privé</b> in the dropdown list and click the
                        <b>Pin icon</b> to fix it permanently next to your
                        address bar for one-click access.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-01a.png"
                            alt="Pin the Extension"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-01b.png"
                            alt="Pin the Extension"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-2"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(2)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    02
                </div>

                <div
                    @click="toggleStep(2)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Launch the Interface
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(2) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(2)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Click the <b>Privé logo</b> in your pinned extension
                        tray. This will open the primary popup window where you
                        can manage your vault, view shared links, and adjust
                        security settings.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-02.png"
                            alt="Launch the Interface"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-3"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(3)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    03
                </div>

                <div
                    @click="toggleStep(3)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Authenticate via Google OAuth
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(3) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(3)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Privé uses the <b>Chrome Identity API</b> to securely
                        verify your identity. Sign in with your Google account
                        to sync your specific, encrypted vault data across your
                        devices via our secure backend.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-03a.png"
                            alt="Authenticate via Google OAuth"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    <br />
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Select your Google account from the list of available
                        accounts. If you are not already signed in to Chrome,
                        you will be prompted to enter your Google credentials.
                        This process is handled entirely by Google's secure
                        authentication system, ensuring that your login
                        information is never exposed to our servers or stored
                        locally on your device.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-03b.png"
                            alt="Authenticate via Google OAuth"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-4"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(4)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    04
                </div>

                <div
                    @click="toggleStep(4)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Decrypt with your Master PIN
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(4) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(4)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Because we follow a <b>Zero-Knowledge</b> architecture,
                        your passwords are encrypted on your device. Enter your
                        unique <b>Master PIN</b> to unlock the vault; without
                        this PIN, your data remains an unreadable string of
                        characters that even our servers cannot access.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-04.png"
                            alt="Decrypt with your Master PIN"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-5"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(5)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    05
                </div>

                <div
                    @click="toggleStep(5)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Explore the "My Vault" List
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(5) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(5)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Once unlocked, ensure you are on the
                        <b>Passwords</b> tab. You will see a list of your stored
                        accounts (e.g., mega.nz, crunchyroll.com) along with
                        their associated usernames or emails.
                    </p>
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        For new Users: If this is your first time using Privé,
                        your vault will be empty. You can add credentials by
                        using
                        <a
                            href="#step-11"
                            @click.prevent="goToStep(11)"
                            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
                            >step 11</a
                        >.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-05a.png"
                            alt="Explore the My Vault List"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <br />
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        For existing Users: If you have previously used Privé,
                        your vault will already contain your saved credentials.
                        You can click on any entry to view details, trigger
                        auto-fill, or share the credential using the options
                        menu.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-05b.png"
                            alt="Explore the My Vault List"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-6"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(6)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    06
                </div>

                <div
                    @click="toggleStep(6)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Trigger Smart Auto-Fill
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(6) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(6)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Navigate to the login page of any site in your vault.
                        Open the extension and click directly on the desired
                        credential card; Privé will use the
                        <b>ActiveTab</b> permission to detect the input fields
                        on the current page and automatically populate your
                        username and password.
                    </p>
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Before using auto-fill
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-06a.png"
                            alt="Trigger Smart Auto-Fill"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <br />
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        After clicking the credential, you should see the
                        username and password fields on the webpage
                        automatically filled in with your stored information,
                        allowing for a seamless login experience without ever
                        exposing your raw password text.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-06b.png"
                            alt="Trigger Smart Auto-Fill"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-7"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(7)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    07
                </div>

                <div
                    @click="toggleStep(7)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Access the Options Menu
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(7) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(7)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        On the right side of each credential entry, locate the
                        <b>vertical three-dot (ellipsis) icon</b>. Clicking this
                        opens a contextual menu containing advanced actions like
                        sharing, editing, or deleting the entry.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-07.png"
                            alt="Access the Options Menu"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-8"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(8)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    08
                </div>

                <div
                    @click="toggleStep(8)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Select the "Share" Action
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(8) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(8)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        From the options menu, select <b>Share</b>. This
                        initiates the process of creating a secure link that
                        allows a recipient to access the credential without ever
                        seeing the raw password text.
                    </p>
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        After clicking "Share", the extension will display a
                        loading state as it communicates with our backend to
                        generate a unique, expiring URL for that specific
                        credential. This link can then be shared with trusted
                        contacts, allowing them to view the credential details
                        securely without exposing the underlying password.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-08a.png"
                            alt="Select the Share Action"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-9"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(9)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    09
                </div>

                <div
                    @click="toggleStep(9)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Link Copied to Clipboard
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(9) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(9)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Once generation is complete, the link is
                        <b>automatically saved to your clipboard</b>. You can
                        immediately paste this link into a message, email, or
                        chat to share it with your trusted contacts.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-08b.png"
                            alt="Link Copied to Clipboard"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section
                id="step-10"
                class="relative pl-12 border-l border-white/10"
            >
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(10)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    10
                </div>

                <div
                    @click="toggleStep(10)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        Manage Links and Lock Vault
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(10) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(10)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        Switch to the <b>Shared Links</b> tab to view and revoke
                        any active links you have created. Use the delete icon
                        to revoke access for specific links at any time. When
                        your session is finished, use the <b>Lock Vault</b> or
                        <b>Log Out</b> buttons at the bottom of the popup to
                        re-secure your local data.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-10.png"
                            alt="Manage Links and Lock Vault"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>

            <section id="step-11" class="relative pl-12">
                <div
                    :class="[
                        'absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300',
                        activeSteps.includes(11)
                            ? 'bg-white text-[#050505]'
                            : 'bg-zinc-800 text-white',
                    ]"
                >
                    11
                </div>

                <div
                    @click="toggleStep(11)"
                    class="cursor-pointer flex items-center justify-between mb-2 group select-none"
                >
                    <h2
                        class="text-2xl font-bold group-hover:text-zinc-300 transition-colors"
                    >
                        How to Add Credentials
                    </h2>
                    <svg
                        class="w-6 h-6 text-white/50 transform transition-transform duration-300"
                        :class="{ 'rotate-180': activeSteps.includes(11) }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div v-show="activeSteps.includes(11)" class="pt-4 pb-8">
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        To add credentials to your vault navigate to the login
                        page of the site you want to add (e.g. crunchyroll.com).
                        Make sure your vault is unlocked, fill in your
                        credentials (username and password), then click the
                        Privé icon
                        <img
                            src="/prive.svg"
                            alt="Prive Icon"
                            class="inline-block w-4 h-4 mx-1"
                        />
                        next to the password field. This will automatically add
                        the credentials to your vault.
                    </p>
                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-11a.png"
                            alt="How to Add Credentials"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    <br />
                    <p class="text-zinc-400 leading-relaxed mb-6">
                        After clicking the Privé icon, you should see a
                        confirmation message that the credentials have been
                        saved to your vault. You can then open the Privé
                        extension to the "Passwords" tab to view and manage your
                        newly added credentials.
                    </p>

                    <div
                        class="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
                    >
                        <img
                            src="/guide/step-11b.png"
                            alt="How to Add Credentials"
                            class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Store active steps in an array so multiple can be open at once
const activeSteps = ref([1]);

const toggleStep = (step) => {
    // Check if the clicked step is already in the array
    const index = activeSteps.value.indexOf(step);

    if (index > -1) {
        // If it's already open, remove it to close it
        activeSteps.value.splice(index, 1);
    } else {
        // If it's closed, push it to open it (without closing others)
        activeSteps.value.push(step);
    }
};

// Function to handle clicking on the "Step 11" link
const goToStep = (step) => {
    // Make sure the target step is open
    if (!activeSteps.value.includes(step)) {
        activeSteps.value.push(step);
    }

    // Give Vue a moment to render the expanded section before scrolling
    setTimeout(() => {
        const el = document.getElementById(`step-${step}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 50);
};
</script>
