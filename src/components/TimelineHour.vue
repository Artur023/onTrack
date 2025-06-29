<script setup>
import { isHourValid } from '@/validators.js';

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid,
  },
});
const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
  props.hour === new Date().getHours() ? 'bg-purple-900 text-white' : 'text-gray-500 bg-gray-100',
];
const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`;
</script>

<template>
  <a :class="classes" href="#">{{ formattedHour }}</a>
</template>
