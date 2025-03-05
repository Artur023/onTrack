<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/solid/index.js';
import NavItem from '@/components/NavItem.vue';
import { ref } from 'vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};

function normalizePageHash() {
  const hash = window.location.hash.slice(1);

  if (Object.keys(navItems).includes(hash)) {
    return hash;
  }
  window.location.hash = PAGE_TIMELINE;
  return PAGE_TIMELINE;
}

const currentPage = ref(normalizePageHash());
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        :href="`#${page}`"
        @click="currentPage = page"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<style scoped></style>
