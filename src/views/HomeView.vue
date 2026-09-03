<template>
    <div
        class="min-h-screen relative bg-[#050505] text-white font-titillium selection:bg-white/20 selection:text-white overflow-y-auto overflow-x-hidden"
    >
        <main class="pt-28 md:pt-36">
            <BackgroundGridBeam
                className="flex flex-col items-center gap-10 justify-center min-h-[70vh] px-6 text-center w-full"
            >
                <div class="relative z-20 flex flex-col gap-8 max-w-4xl mx-auto">
                    <div
                        class="mx-auto h-fit md:h-44 flex items-center justify-center"
                    >
                        <h1
                            class="display-title text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white"
                        >
                            <transition name="fade-slide" mode="out-in">
                                <span :key="phraseIndex" class="inline-block">
                                    <span
                                        v-html="
                                            formatPhrase(phrases[phraseIndex])
                                        "
                                    ></span>
                                </span>
                            </transition>
                        </h1>
                    </div>

                    <div class="relative z-20 flex justify-center">
                        <a
                            href="https://chromewebstore.google.com/detail/ddfeinomekibmkeoekajdeconmeielfh"
                            target="_blank"
                            class="apple-button inline-flex items-center gap-2.5 px-8 py-3.5 text-white font-semibold text-base rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_32px_-8px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                        >
                            <span>Add to Browser</span>
                            <span class="material-symbols-outlined text-sm">north_east</span>
                        </a>
                    </div>
                </div>
            </BackgroundGridBeam>

            <!-- FEATURES SECTION -->
            <section
                class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-24 bg-[#0a0a0a]/40 relative z-10 border-t border-white/[0.06]"
            >
                <div
                    v-for="feature in features"
                    :key="feature.title"
                    class="p-8 rounded-[32px] apple-glass-card group text-left flex flex-col justify-between"
                >
                    <div>
                        <div class="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/[0.08] transition-colors">
                            <span class="material-symbols-outlined text-2xl">{{ feature.icon }}</span>
                        </div>
                        <h3 class="text-white font-bold mb-3 text-xl tracking-tight">
                            {{ feature.title }}
                        </h3>
                        <p
                            class="text-white/60 text-sm leading-relaxed"
                            v-html="formatPhrase(feature.desc)"
                        ></p>
                    </div>
                </div>
            </section>

            <!-- SECURITY & ABOUT SECTION -->
            <section class="max-w-6xl mx-auto px-6 md:px-12 py-24 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- About Card -->
                    <div
                        class="p-8 md:p-10 rounded-[36px] apple-glass-card text-left"
                    >
                        <div
                            class="w-12 h-12 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-white"
                        >
                            <span class="material-symbols-outlined text-2xl"
                                >info</span
                            >
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">
                            About Privé Extension
                        </h2>
                        <p class="text-white/60 leading-relaxed text-base mb-8">
                            Privé is a local-first password vault designed to
                            give you absolute control over your digital keys. By
                            combining military-grade encryption with the
                            convenience of a browser extension, we enable you
                            to:
                        </p>
                        <ul class="space-y-3.5">
                            <li class="flex items-center gap-3 text-white/80 text-sm">
                                <span class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white">✓</span>
                                <span>Encrypted local-only storage</span>
                            </li>
                            <li class="flex items-center gap-3 text-white/80 text-sm">
                                <span class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white">✓</span>
                                <span>Intelligent form auto-fill</span>
                            </li>
                            <li class="flex items-center gap-3 text-white/80 text-sm">
                                <span class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white">✓</span>
                                <span>Zero-knowledge link sharing</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Google Data Card -->
                    <div
                        class="p-8 md:p-10 rounded-[36px] apple-glass-card text-left"
                    >
                        <div
                            class="w-12 h-12 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-white"
                        >
                            <span class="material-symbols-outlined text-2xl"
                                >cloud_sync</span
                            >
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
                            Google Data Transparency
                        </h2>
                        <div class="space-y-6">
                            <div class="flex gap-4 items-start">
                                <div class="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-white/70">
                                    <span class="material-symbols-outlined text-lg">fingerprint</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-white mb-1 text-base">
                                        Identity Verification
                                    </h4>
                                    <p class="text-white/50 text-sm leading-relaxed">
                                        We use Google OAuth solely to identify
                                        your account and anchor your encrypted
                                        vault.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start">
                                <div class="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-white/70">
                                    <span class="material-symbols-outlined text-lg">shield_lock</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-white mb-1 text-base">
                                        Zero-Knowledge Sync
                                    </h4>
                                    <p class="text-white/50 text-sm leading-relaxed">
                                        Data is encrypted with your Master PIN
                                        locally. We never see your raw
                                        passwords.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start">
                                <div class="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-white/70">
                                    <span class="material-symbols-outlined text-lg">no_accounts</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-white mb-1 text-base">
                                        Privacy First
                                    </h4>
                                    <p class="text-white/50 text-sm leading-relaxed">
                                        We do not access your files, emails, or
                                        contacts. Your data is yours alone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "@unhead/vue";
// FIXED: Ensure this points to your new Grid Beam component file
import BackgroundGridBeam from "../components/BackgroundGridBeam.vue";

useHead({
  title: 'The Most Secure Password Manager Extension',
  meta: [
    { name: 'description', content: 'Privé is a free, secure password manager extension featuring local zero-knowledge AES encryption. Auto-fill passwords and share credentials securely with one click.' },
    { name: 'keywords', content: 'password manager, secure password manager, free password manager, chrome password extension, local encryption, zero-knowledge vault' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Privé Extension",
        "operatingSystem": "Chrome, Edge, Brave",
        "applicationCategory": "BrowserExtension, SecurityApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "A lightweight, privacy-first password manager. Encrypt your credentials locally with zero-knowledge architecture.",
        "featureList": [
          "Zero-knowledge local AES encryption",
          "Secure credential sharing links",
          "Form auto-fill"
        ]
      })
    }
  ]
});

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
/* Global Font */
.font-titillium {
    font-family: "Titillium Web", sans-serif;
}

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

/* Apple Fluid Fade Slide Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(12px) scale(0.97);
}

.fade-slide-leave-to {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(-12px) scale(0.97);
}

/* Material Symbols */
.material-symbols-outlined {
    font-size: 16px;
}
.material-symbols-outlined-large {
    font-size: 48px;
}
</style>
