<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-[100] bg-black/60 backdrop-blur-md" @click.self="close">
        <div class="bg-[#141416]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[24px] w-[88%] max-w-[320px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)] animate-modal-pop relative text-left">
            <h3 class="font-bold text-base mb-1.5 text-white tracking-tight">{{ title }}</h3>
            <p class="text-[13px] mb-5 text-white/60 leading-relaxed">{{ message }}</p>

            <div class="flex justify-center gap-2.5 mb-6">
                <div v-for="(digit, index) in pinLength" :key="index" class="relative w-[25%] aspect-square">
                    <input 
                        type="text" 
                        maxlength="1" 
                        inputmode="numeric"
                        autocomplete="off"
                        ref="pinInputs"
                        v-model="pinValues[index]"
                        @input="handleInput($event, index)"
                        @keydown="handleKeydown($event, index)"
                        :class="[
                            'absolute inset-0 w-full h-full text-transparent text-center rounded-[16px] border border-white/15 bg-white/[0.04] transition-all outline-none caret-transparent focus:border-white/60 focus:bg-white/[0.08] focus:shadow-[0_0_8px_rgba(255,255,255,0.2)]',
                            { '!border-[#ef4444] animate-shake focus:!shadow-none': isError },
                            { '!border-white focus:!shadow-none': isSuccess }
                        ]"
                    />
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white text-[32px] leading-none flex items-center justify-center pb-1">
                        {{ pinValues[index] ? '⁕' : '' }}
                    </div>
                </div>
            </div>

            <div class="flex">
                <button @click="close" class="apple-button w-full py-2.5 px-4 rounded-[16px] text-[13px] font-semibold transition-all bg-white/[0.04] text-white/80 border border-white/10 hover:bg-white/[0.08] hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    title: { type: String, default: 'Vault PIN Required' },
    message: { type: String, default: 'Enter your Vault PIN to continue:' }
});

const emit = defineEmits(['update:isOpen', 'confirm']);

const pinLength = 4;
const pinValues = ref(Array(pinLength).fill(''));
const pinInputs = ref([]);

const isError = ref(false);
const isSuccess = ref(false);

const resetPin = () => {
    pinValues.value = Array(pinLength).fill('');
    isError.value = false;
    isSuccess.value = false;
    nextTick(() => {
        if (pinInputs.value[0]) pinInputs.value[0].focus();
    });
};

watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        resetPin();
    }
});

const handleInput = (e, index) => {
    isError.value = false;
    const value = e.target.value;
    
    // Only allow numbers
    if (!/^\d*$/.test(value)) {
        pinValues.value[index] = '';
        return;
    }

    if (value && index < pinLength - 1) {
        pinInputs.value[index + 1].focus();
    } else if (value && index === pinLength - 1) {
        // Auto-submit on 4th digit — nextTick ensures v-model has committed
        nextTick(() => confirm());
    }
};

const handleKeydown = (e, index) => {
    if (e.key === 'Backspace' && !pinValues.value[index] && index > 0) {
        pinInputs.value[index - 1].focus();
    } else if (e.key === 'Enter') {
        confirm();
    }
};

const close = () => {
    emit('update:isOpen', false);
};

const confirm = () => {
    const pin = pinValues.value.join('');
    emit('confirm', pin);
};

defineExpose({
    showError: () => {
        isError.value = true;
        setTimeout(() => {
            resetPin();
        }, 500);
    },
    showSuccess: () => {
        isSuccess.value = true;
    }
});
</script>

<style scoped>
@keyframes modalPop {
    0% { opacity: 0; transform: scale(0.96) translateY(6px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal-pop {
    animation: modalPop 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-6px); }
    40%, 80% { transform: translateX(6px); }
}
.animate-shake {
    animation: shake 0.35s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
</style>
