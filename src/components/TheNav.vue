<script setup>
import NavItem from '@/components/NavItem.vue';
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js';
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/solid/index.js';

defineProps(['currentPage']);
defineEmits(['navigate']);

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
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
