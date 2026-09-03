<template>
    <BackgroundGridBeam
        class="min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div
            class="max-w-md mx-auto flex flex-col items-center gap-6 w-full text-center relative z-20"
        >
            <div class="flex flex-col gap-2">
                <h1 class="display-title text-8xl md:text-9xl font-black text-white select-none tracking-tight">404</h1>
                <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Page Not Found
                </h2>
                <p class="text-white/50 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
                    The link you followed may be broken or the page may have been removed.
                </p>
            </div>

            <router-link
                to="/"
                class="apple-button inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#050505] font-semibold text-base rounded-full hover:bg-white/90 shadow-[0_12px_28px_-8px_rgba(255,255,255,0.25)]"
            >
                <span class="material-symbols-outlined text-sm">arrow_back</span>
                <span>Return to Home</span>
            </router-link>
        </div>
    </BackgroundGridBeam>
</template>

<script setup>
import { useHead } from "@unhead/vue";
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";

useHead({
    title: "Page Not Found",
});
</script>
