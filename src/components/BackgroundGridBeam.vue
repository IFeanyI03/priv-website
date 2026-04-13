<template>
    <div :class="['relative w-full h-full bg-grid overflow-hidden', className]">
        <svg
            class="absolute inset-0 w-full h-full pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter
                    id="beam-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                >
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite
                        in="SourceGraphic"
                        in2="blur"
                        operator="over"
                    />
                </filter>

                <linearGradient
                    id="snake-gray"
                    x1="130%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <animate
                        attributeName="x1"
                        values="130%; -40%; -40%"
                        keyTimes="0; 0.75; 1"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="x2"
                        values="100%; -70%; -70%"
                        keyTimes="0; 0.75; 1"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                    <stop offset="0%" stop-color="#18181b" stop-opacity="0" />
                    <stop
                        offset="40%"
                        stop-color="#52525b"
                        stop-opacity="0.2"
                    />
                    <stop
                        offset="70%"
                        stop-color="#a1a1aa"
                        stop-opacity="0.6"
                    />
                    <stop offset="92%" stop-color="#ffffff" stop-opacity="1" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                </linearGradient>

                <linearGradient
                    id="snake-gray-reversed"
                    x1="-30%"
                    y1="0%"
                    x2="0%"
                    y2="0%"
                >
                    <animate
                        attributeName="x1"
                        values="-30%; 140%; 140%"
                        keyTimes="0; 0.8; 1"
                        dur="14s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="x2"
                        values="0%; 170%; 170%"
                        keyTimes="0; 0.8; 1"
                        dur="14s"
                        repeatCount="indefinite"
                    />
                    <stop offset="0%" stop-color="#e4e4e7" stop-opacity="0" />
                    <stop offset="8%" stop-color="#e4e4e7" stop-opacity="0.8" />
                    <stop
                        offset="30%"
                        stop-color="#71717a"
                        stop-opacity="0.4"
                    />
                    <stop
                        offset="60%"
                        stop-color="#3f3f46"
                        stop-opacity="0.1"
                    />
                    <stop offset="100%" stop-color="#18181b" stop-opacity="0" />
                </linearGradient>
            </defs>

            <path
                d="M 2400 320 L 1600 320 L 1600 120 L 1400 120 L 1400 280 L 1160 280 L 1160 80 L 880 80 L 880 400 L 640 400 L 640 200 L 480 200 L 480 40 L 240 40 L 240 240 L 120 240 L 120 120 L -80 120"
                fill="none"
                stroke="url(#snake-gray)"
                stroke-width="2"
                filter="url(#beam-glow)"
            />

            <path
                d="M -80 200 L 160 200 L 160 440 L 360 440 L 360 160 L 720 160 L 720 280 L 1000 280 L 1000 40 L 1280 40 L 1280 240 L 1520 240 L 1520 360 L 1800 360 L 1800 160 L 2400 160"
                fill="none"
                stroke="url(#snake-gray-reversed)"
                stroke-width="1.5"
                filter="url(#beam-glow)"
            />
        </svg>

        <div class="relative z-10 w-full h-full">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    className: {
        type: String,
        default: "",
    },
});
</script>

<style scoped>
.bg-grid {
    background-size: 40px 40px;
    background-image:
        linear-gradient(
            to right,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
        ),
        linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
        );
    mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
    -webkit-mask-image: radial-gradient(
        ellipse at center,
        black 40%,
        transparent 80%
    );
}
</style>
