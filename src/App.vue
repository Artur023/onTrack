<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheNav from '@/components/TheNav.vue';
import TheTimeline from '@/pages/TheTimeline.vue';
import TheActivities from '@/pages/TheActivities.vue';
import TheProgress from '@/pages/TheProgress.vue';
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js';
import { ref } from 'vue';
import { normalizePageHash } from '@/functions.js';

function goTo(page) {
  currentPage.value = page;
}

const currentPage = ref(normalizePageHash());
</script>

<template>
  <TheHeader @go-to-progress="goTo(PAGE_PROGRESS)" @go-to-timeline="goTo(PAGE_TIMELINE)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
