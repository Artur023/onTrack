<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '@/constants.js';

export const TYPE_CLASSES = {
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
};
</script>

<script setup>
import { isButtonTypeValid } from '@/validators.js';

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_NEUTRAL,
    validator: isButtonTypeValid,
  },
});
</script>
<template>
  <button
    :class="`${TYPE_CLASSES[type]} disabled: 0 cursor-pointer rounded p-3 opacity-500 disabled:cursor-not-allowed`"
  >
    <slot></slot>
  </button>
</template>
