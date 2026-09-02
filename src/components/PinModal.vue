<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm" @click.self="close">
        <div class="bg-[#1e1e1e] p-5 rounded-[17.2px] w-[85%] max-w-[300px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-modal-pop relative text-left">
            <h3 class="font-bold text-base mb-2 text-white">{{ title }}</h3>
            <p class="text-[14px] mb-5 text-[#b3b3b3] leading-[1.4]">{{ message }}</p>

            <div class="flex justify-center gap-2.5 mb-5">
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
                            'absolute inset-0 w-full h-full text-transparent text-center rounded-[17.2px] border border-[#333] bg-[#121212] transition-all outline-none caret-transparent focus:border-[#888] focus:shadow-[0_0_4px_rgba(255,255,255,0.4)]',
                            { '!border-[#ef4444] animate-shake focus:!shadow-none': isError },
                            { '!border-[#22c55e] focus:!shadow-none': isSuccess }
                        ]"
                    />
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white text-[40px] leading-none flex items-center justify-center pb-1">
                        {{ pinValues[index] ? '⁕' : '' }}
                    </div>
                </div>
            </div>

            <div class="flex">
                <button @click="close" class="w-full py-2.5 px-4 rounded-[17.2px] text-[13px] font-semibold cursor-pointer transition-all bg-[#1e1e1e] text-white border border-[#333] hover:bg-[#2a2a2a]">
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
        // Auto-submit on 4th digit
        confirm();
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
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
}
.animate-modal-pop {
    animation: modalPop 0.2s ease-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}
.animate-shake {
    animation: shake 0.4s;
}
</style>
