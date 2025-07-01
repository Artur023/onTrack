<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_PRIMARY } from '@/constants.js';

export const TYPE_CLASSES = {
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
};
</script>

<script setup>
import { isButtonTypeValid } from '@/validators.js';
import { BUTTON_TYPE_PRIMARY } from '@/constants.js';

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_PRIMARY,
    validator: isButtonTypeValid,
  },
});
const classes = `cursor-pointer rounded p-3   
    disabled:opacity-50 
    disabled:cursor-not-allowed`;
</script>
<template>
  <button :class="`${TYPE_CLASSES[type]} ${classes}`">
    <slot></slot>
  </button>
</template>
