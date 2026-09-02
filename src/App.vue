<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: (title) => title ? `${title} | Privé` : 'Privé | Security Made Simple',
  meta: [
    { name: 'description', content: 'A lightweight, privacy-first password manager. Encrypt your credentials locally with zero-knowledge architecture.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://prive-extension.com/' },
    { property: 'og:title', content: 'Privé: Security Made Simple' },
    { property: 'og:description', content: 'Securely store and share credentials without the bloat. Built with local AES encryption.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/dahlcyt3t/image/upload/q_auto/f_auto/v1776214452/web-screenshot_zkkl2g.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Privé | Privacy-First Password Management' },
    { name: 'twitter:description', content: 'Lightweight password management with one-click auto-fill and secure sharing.' },
    { name: 'twitter:image', content: 'https://res.cloudinary.com/dahlcyt3t/image/upload/q_auto/f_auto/v1776214452/web-screenshot_zkkl2g.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://prive-extension.com' }
  ]
})
</script>

<template>
    <div
        class="min-h-screen bg-[#050505] text-white font-titillium selection:bg-indigo-500/30 flex flex-col"
    >
        <Toaster 
            position="bottom-right" 
            theme="dark" 
            :toastOptions="{
                style: {
                    background: '#1e1e1e',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid #333',
                    fontFamily: '&quot;Titillium Web&quot;, sans-serif',
                    padding: '12px 16px',
                    fontSize: '14px',
                    minHeight: 'auto'
                },
                classNames: {
                    toast: 'group',
                    title: 'text-[14px] font-semibold',
                    description: 'text-[12px] text-white/70',
                    error: '!border-[#ef4444]',
                    success: '!border-[#22c55e]',
                    info: '!border-[#3b82f6]'
                }
            }"
        />
        <header
            class="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur-sm"
        >
            <router-link to="/">
                <img
                    src="/prive.svg"
                    alt="Privé Logo"
                    class="h-10 md:h-20 transition-transform hover:scale-105"
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

        <main class="z-20">
            <router-view v-slot="{ Component }">
                <transition name="page-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <footer class="py-12 z-20 mt-auto text-center border-t border-zinc-900">
            <div class="flex flex-col  items-center gap-2">
                <p class="text-zinc-600 text-base tracking-widest uppercase">
                    &copy; 2026 PRIVÉ EXTENSION. SECURE BY DESIGN.
                </p>
                <div class="flex flex-col md:flex-row gap-2">
                <router-link
                    to="/how-to-use"
                    class="text-white/40 hover:text-white text-base uppercase tracking-tighter transition-colors underline underline-offset-4 decoration-zinc-800"
                >
                    How to Use
                </router-link>
                <router-link
                    to="/privacy"
                    class="text-white/40 hover:text-white text-base uppercase tracking-tighter transition-colors underline underline-offset-4 decoration-zinc-800"
                >
                    Privacy Policy
                </router-link>
                <router-link
                    to="/delete-account"
                    class="text-white/40 hover:text-white text-base uppercase tracking-tighter transition-colors underline underline-offset-4 decoration-zinc-800"
                >
                    Delete Account
                </router-link>
                </div>
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
