<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js';
import BaseButton from '@/components/BaseButton.vue';

defineProps(['selected', 'placeholder', 'options']);
</script>

<template>
  <BaseButton>
    <XMarkIcon class="h-8" />
  </BaseButton>
  <div class="flex gap-2">
    <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
      <option disabled selected value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :selected="value === selected"
        :value="value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
