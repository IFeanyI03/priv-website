<template>
    <BackgroundGridBeam
        class="min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div
            class="max-w-md mx-auto flex flex-col gap-2 w-full text-center relative z-20"
        >
            <div class="flex flex-col gap-2">
                <h1 class="text-9xl font-black text-white select-none">404</h1>
                <h2 class="text-4xl font-bold text-white tracking-tight">
                    Page Not Found
                </h2>
                <p class="text-white/40 text-lg">
                    The path you are looking for does not exist or has been
                    moved.
                </p>
            </div>

            <router-link
                to="/"
                class="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
                Return to Home
            </router-link>
        </div>
    </BackgroundGridBeam>
</template>

<script setup>
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";
</script>

<style scoped>
/* Optional: Add a subtle pulse to the large 404 text */
h1 {
    animation: subtlePulse 4s ease-in-out infinite;
}

@keyframes subtlePulse {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}
</style>
