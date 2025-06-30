<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheNav from '@/components/TheNav.vue';
import TheTimeline from '@/pages/TheTimeline.vue';
import TheActivities from '@/pages/TheActivities.vue';
import TheProgress from '@/pages/TheProgress.vue';
import { ACTIVITIES, PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js';
import { ref } from 'vue';
import {
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizePageHash,
} from '@/functions.js';

const timelineItems = generateTimelineItems();
const currentPage = ref(normalizePageHash());

function goTo(page) {
  currentPage.value = page;
}

const activitySelectOptions = generateActivitySelectOptions(ACTIVITIES);
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :activity-select-options="activitySelectOptions"
      :timeline-items="timelineItems"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
