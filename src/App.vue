<template>
    <div
        class="min-h-screen bg-[#050505] text-white font-titillium selection:bg-indigo-500/30 flex flex-col"
    >
        <header
            class="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-[#050505]/80 backdrop-blur-md"
        >
            <router-link to="/">
                <img
                    src="/prive.svg"
                    alt="Privé Logo"
                    class="h-20 md:h-20 transition-transform hover:scale-105"
                />
            </router-link>
            <a
                href="https://portfolio-ifeanyi03s.vercel.app/"
                target="_blank"
                class="text-base font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
                Meet the Dev
                <span class="material-symbols-outlined">north_east</span>
            </a>
        </header>

        <main class="">
            <router-view v-slot="{ Component }">
                <transition name="page-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <footer
            class="py-12 mt-auto text-center border-t border-zinc-900 bg-[#050505]"
        >
            <div class="flex flex-col items-center gap-2">
                <p class="text-zinc-600 text-base tracking-widest uppercase">
                    &copy; 2026 PRIVÉ EXTENSION. SECURE BY DESIGN.
                </p>
                <router-link
                    to="/privacy"
                    class="text-white/40 hover:text-white text-base uppercase tracking-tighter transition-colors underline underline-offset-4 decoration-zinc-800"
                >
                    Privacy Policy
                </router-link>
            </div>
        </footer>
    </div>
</template>

<style>
/* Global Font */
.font-titillium {
    font-family: "Titillium Web", sans-serif;
}

/* Page Transition */
.page-fade-enter-active,
.page-fade-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

/* Material Symbols */
.material-symbols-outlined {
    font-size: 16px;
}
.material-symbols-outlined-large {
    font-size: 48px;
}
</style>
