<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js';

const props = defineProps(['timelineItem']);

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 text-white'
    : 'text-gray-500 bg-gray-100',
];

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' },
];
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a :class="hourLinkClasses" href="#">{{ timelineItem.hour }}:00</a>
    <div class="flex gap-2">
      <button
        class="disabled: cursor-pointer rounded bg-gray-100 p-3 opacity-500 enabled:hover:bg-gray-200 disabled:cursor-not-allowed"
      >
        <XMarkIcon class="h-8" />
      </button>
      <select id="" class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl" name="">
        <option disabled selected value="">Rest</option>
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </li>
</template>

<style scoped></style>
