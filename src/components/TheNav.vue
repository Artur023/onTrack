<script setup>
import NavItem from '@/components/NavItem.vue';
import { NAV_ITEMS } from '@/constants.js';
import { isPageValid } from '@/validators.js';

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});
defineEmits(['navigate']);
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        :href="`#${page}`"
        @click="$emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<style scoped></style>
