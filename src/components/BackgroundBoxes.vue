<template>
    <div
        :style="{
            transform:
                'translate(-30%, -40%) skewX(-48deg) skewY(14deg) scale(0.75) rotate(0deg) translateZ(0)',
        }"
        :class="[
            'absolute -left-[50%] -top-[50%] flex w-[200%] h-[200%] z-0',
            className,
        ]"
    >
        <div
            v-for="i in 150"
            :key="'row' + i"
            class="w-16 h-8 border-l border-zinc-800/50 relative"
        >
            <div
                v-for="j in 100"
                :key="'col' + j"
                class="box-cell w-16 h-8 border-r border-t border-zinc-800/50 relative transition-colors duration-500"
                :style="{ '--hover-color': getRandomColor() }"
            >
                <svg
                    v-if="j % 2 === 0 && i % 2 === 0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="absolute h-6 w-10 -top-[14px] -left-[22px] text-zinc-700 stroke-[1px] pointer-events-none"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    className: String,
});

// The dark grayscale palette we established earlier
const colors = [
    "#18181b", // Zinc-900
    "#27272a", // Zinc-800
    "#3f3f46", // Zinc-700
    "#171717", // Neutral-900
    "#262626", // Neutral-800
    "#404040", // Neutral-700
    "rgb(30 30 30)",
    "rgb(45 45 45)",
    "rgb(60 60 60)",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
</script>

<style scoped>
/* Pure CSS hover state using the random CSS variable.
  This prevents the SVG event bubbling bug and runs smoother.
*/
.box-cell:hover {
    background-color: var(--hover-color);
    transition-duration: 0s;
}
</style>
