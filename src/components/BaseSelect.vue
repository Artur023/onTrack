<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js';
import BaseButton from '@/components/BaseButton.vue';
import { isOptionsValid } from '@/validators.js';

defineProps({
  selected: {
    type: Number,
  },
  placeholder: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: isOptionsValid,
  },
});
</script>

<template>
  <div class="flex gap-2">
    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>
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
