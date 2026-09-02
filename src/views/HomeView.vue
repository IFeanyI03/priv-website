<template>
    <div
        class="min-h-screen relative bg-[#050505] text-white font-titillium selection:bg-indigo-500/30 overflow-y-auto overflow-x-hidden"
    >
        <main class="pt-30">
            <BackgroundGridBeam
                className="flex flex-col items-center gap-10 justify-center min-h-[70vh] px-6 text-center w-full"
            >
                <div class="relative z-20 flex flex-col gap-8">
                    <div
                        class="max-w-4xl mx-auto h-fit md:h-48 flex items-center justify-center"
                    >
                        <h1
                            class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
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

                    <div class="relative z-20">
                        <a
                            href="https://chromewebstore.google.com/detail/ddfeinomekibmkeoekajdeconmeielfh"
                            target="_blank"
                            class="inline-block px-8 py-4 text-white font-bold border-2 border-white/10 rounded-[40px] transition-all transform hover:shadow-[0_0_40px_rgba(255,255,255,0.10)] bg-[#050505]"
                        >
                            Add to Browser
                        </a>
                    </div>
                </div>
            </BackgroundGridBeam>

            <!-- FEATURES SECTION -->
            <section
                class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-24 bg-[#0a0a0a]/50 relative z-10"
            >
                <div
                    v-for="feature in features"
                    :key="feature.title"
                    class="p-8 border-2 border-white/10 rounded-[40px] transition-all transform hover:shadow-[0_0_40px_rgba(255,255,255,0.10)] group bg-white/[0.01] backdrop-blur-md"
                >
                    <span
                        class="material-symbols-outlined-large text-white mb-4"
                        >{{ feature.icon }}</span
                    >
                    <h3 class="text-white/40 font-bold mb-3 text-2xl">
                        {{ feature.title }}
                    </h3>
                    <p
                        class="text-white text-base leading-relaxed"
                        v-html="formatPhrase(feature.desc)"
                    ></p>
                </div>
            </section>

            <!-- SECURITY & ABOUT SECTION -->
            <section class="max-w-6xl mx-auto px-8 py-20 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- About Card -->
                    <div
                        class="p-10 border-2 border-white/10 rounded-[40px] bg-white/[0.02] backdrop-blur-xl transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                    >
                        <div
                            class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6"
                        >
                            <span class="material-symbols-outlined text-2xl"
                                >info</span
                            >
                        </div>
                        <h2 class="text-3xl font-bold mb-6 text-white">
                            About Privé Extension
                        </h2>
                        <p class="text-zinc-400 leading-relaxed text-lg mb-8">
                            Privé is a local-first password vault designed to
                            give you absolute control over your digital keys. By
                            combining military-grade encryption with the
                            convenience of a browser extension, we enable you
                            to:
                        </p>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3 text-zinc-300">
                                <span class="material-symbols-outlined"
                                    >check</span
                                >
                                <span>Encrypted local-only storage</span>
                            </li>
                            <li class="flex items-center gap-3 text-zinc-300">
                                <span class="material-symbols-outlined"
                                    >check</span
                                >
                                <span>Intelligent form auto-fill</span>
                            </li>
                            <li class="flex items-center gap-3 text-zinc-300">
                                <span   class="material-symbols-outlined"
                                    >check</span
                                >
                                <span>Zero-knowledge link sharing</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Google Data Card -->
                    <div
                        class="p-10 border-2 border-white/10 rounded-[40px] bg-white/[0.02] backdrop-blur-xl transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                    >
                        <div
                            class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6"
                        >
                            <span class="material-symbols-outlined text-2xl"
                                >cloud_sync</span
                            >
                        </div>
                        <h2 class="text-3xl font-bold mb-6 text-white">
                            Google Data Transparency
                        </h2>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 mt-1">
                                    <span
                                        class="material-symbols-outlined text-white/40"
                                        >fingerprint</span
                                    >
                                </div>
                                <div>
                                    <h4 class="font-bold text-white mb-1">
                                        Identity Verification
                                    </h4>
                                    <p class="text-zinc-500 text-sm">
                                        We use Google OAuth solely to identify
                                        your account and anchor your encrypted
                                        vault.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 mt-1">
                                    <span
                                        class="material-symbols-outlined text-white/40"
                                        >shield_lock</span
                                    >
                                </div>
                                <div>
                                    <h4 class="font-bold text-white mb-1">
                                        Zero-Knowledge Sync
                                    </h4>
                                    <p class="text-zinc-500 text-sm">
                                        Data is encrypted with your Master PIN
                                        locally. We never see your raw
                                        passwords.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 mt-1">
                                    <span
                                        class="material-symbols-outlined text-white/40"
                                        >no_accounts</span
                                    >
                                </div>
                                <div>
                                    <h4 class="font-bold text-white mb-1">
                                        Privacy First
                                    </h4>
                                    <p class="text-zinc-500 text-sm">
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

/* Material Symbols */
.material-symbols-outlined {
    font-size: 16px;
}
.material-symbols-outlined-large {
    font-size: 48px;
}
</style>
