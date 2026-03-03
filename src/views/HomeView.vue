<template>
    <div>
        <section
            class="relative flex flex-col min-h-screen items-center gap-8 justify-center px-6 text-center"
        >
            <div
                class="max-w-4xl h-40 md:h-48 flex items-center justify-center"
            >
                <h1
                    class="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
                >
                    <transition name="fade-slide" mode="out-in">
                        <span :key="phraseIndex" class="inline-block">
                            <span
                                v-html="formatPhrase(phrases[phraseIndex])"
                            ></span>
                        </span>
                    </transition>
                </h1>
            </div>

            <div>
                <a
                    href="https://chromewebstore.google.com/detail/ddfeinomekibmkeoekajdeconmeielfh?utm_source=item-share-cb"
                    target="_blank"
                    class="inline-block px-8 py-4 text-white font-bold border-2 border-white/10 rounded-[40px] transition-all transform hover:shadow-[0_0_40px_rgba(255,255,255,0.10)]"
                >
                    Add to Browser
                </a>
            </div>
        </section>

        <section
            class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-24 bg-[#0a0a0a] relative z-10"
        >
            <div
                v-for="feature in features"
                :key="feature.title"
                class="p-8 border-2 border-white/10 rounded-[40px] transition-all transform hover:shadow-[0_0_40px_rgba(255,255,255,0.10)] group"
            >
                <span class="material-symbols-outlined-large text-white mb-4">{{
                    feature.icon
                }}</span>
                <h3 class="text-white/40 font-bold mb-3 text-2xl">
                    {{ feature.title }}
                </h3>
                <p
                    class="text-white text-base leading-relaxed"
                    v-html="formatPhrase(feature.desc)"
                ></p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const phrases = [
    "Password manager that stays true to security.",
    "Share a password link to your friends and family.",
];

const features = [
    {
        title: "Zero-Knowledge",
        desc: "Encryption happens locally. We never see your password data.",
        icon: "lock",
    },
    {
        title: "Instant Links",
        desc: "Share password access via secure, expiring links.",
        icon: "link",
    },
    {
        title: "Auto-Fill",
        desc: "Seamless integration with your daily browsing.",
        icon: "bolt",
    },
];

const phraseIndex = ref(0);

const formatPhrase = (text) => {
    return text.replace(/password/gi, (match) => {
        return `<span class="masked-word">
                  <span class="stars">⁕⁕⁕⁕⁕⁕⁕⁕</span>
                  <span class="real-word">${match}</span>
                </span>`;
    });
};

onMounted(() => {
    setInterval(() => {
        phraseIndex.value = (phraseIndex.value + 1) % phrases.length;
    }, 4000);
});
</script>

<style>
/* Masked Word Container using Grid */
.masked-word {
    display: inline-grid;
    align-items: center;
    justify-items: center;
    cursor: help;
    vertical-align: baseline;
}

.masked-word .stars,
.masked-word .real-word {
    grid-area: 1 / 1;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.masked-word .stars {
    opacity: 0.4;
    font-family: monospace;
    filter: blur(0);
    transform: translateY(0);
    color: white;
}

.masked-word .real-word {
    opacity: 0;
    color: white;
    font-family: inherit;
    filter: blur(10px);
    transform: translateY(15px);
}

.masked-word:hover .stars {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(-15px);
}

.masked-word:hover .real-word {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
}

/* HQ Fade Slide Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
    opacity: 0;
    scale: 0.8;
    filter: blur(10px);
    transform: translateY(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    scale: 0.8;
    filter: blur(10px);
    transform: translateY(-20px);
}
</style>
