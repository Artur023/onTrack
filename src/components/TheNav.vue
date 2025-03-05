<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/solid/index.js';
import NavItem from '@/components/NavItem.vue';
import { ref } from 'vue';

const navList = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
};
const currentPage = ref('activities');
console.log(currentPage)
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navList"
        :key="page"
        :class="{ 'bg-gray-200': page === currentPage }"
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
