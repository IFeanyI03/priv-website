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
        class="min-h-screen bg-[#050505] text-white font-titillium selection:bg-white/20 selection:text-white flex flex-col"
    >
        <Toaster 
            position="bottom-right" 
            theme="dark" 
            :toastOptions="{
                style: {
                    background: 'rgba(20, 20, 22, 0.95)',
                    backdropFilter: 'blur(20px)',
                    color: 'white',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontFamily: '&quot;Titillium Web&quot;, sans-serif',
                    padding: '14px 18px',
                    fontSize: '14px',
                    minHeight: 'auto',
                    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)'
                },
                classNames: {
                    toast: 'group',
                    title: 'text-[14px] font-semibold text-white tracking-tight',
                    description: 'text-[12px] text-white/60',
                    error: '!border-[#ef4444]',
                    warning: '!border-[#f59e0b]',
                    success: '!border-white/80',
                    info: '!border-white/30'
                }
            }"
        />
        <header
            class="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-4 backdrop-blur-2xl bg-[#050505]/65 border-b border-white/[0.07] transition-all"
        >
            <router-link to="/" class="flex items-center group">
                <img
                    src="/prive.svg"
                    alt="Privé Logo"
                    class="h-9 md:h-12 transition-transform duration-200 ease-out group-hover:scale-105 active:scale-95"
                />
            </router-link>
            <a
                href="https://portfolio-ifeanyi03s.vercel.app/"
                target="_blank"
                class="apple-button px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-sm font-medium text-white/60 hover:text-white transition-all flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
                Meet the Dev
                <span class="material-symbols-outlined text-xs">north_east</span>
            </a>
        </header>

        <main class="z-20">
            <router-view v-slot="{ Component }">
                <transition name="page-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <footer class="py-12 z-20 mt-auto text-center border-t border-white/[0.06] bg-[#050505]/40 backdrop-blur-sm">
            <div class="flex flex-col items-center gap-3">
                <p class="text-white/30 text-xs tracking-widest uppercase font-semibold">
                    &copy; 2026 PRIVÉ EXTENSION. SECURE BY DESIGN.
                </p>
                <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                    <router-link
                        to="/how-to-use"
                        class="text-white/40 hover:text-white tracking-normal transition-colors underline-offset-4 hover:underline"
                    >
                        How to Use
                    </router-link>
                    <router-link
                        to="/privacy"
                        class="text-white/40 hover:text-white tracking-normal transition-colors underline-offset-4 hover:underline"
                    >
                        Privacy Policy
                    </router-link>
                    <router-link
                        to="/delete-account"
                        class="text-white/40 hover:text-white tracking-normal transition-colors underline-offset-4 hover:underline"
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

/* Page Transition: Apple fluid critically damped curve */
.page-fade-enter-active,
.page-fade-leave-active {
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-fade-enter-from {
    opacity: 0;
    transform: translateY(6px);
}
.page-fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

/* Material Symbols */
.material-symbols-outlined {
    font-size: 16px;
}
.material-symbols-outlined-large {
    font-size: 48px;
}
</style>
