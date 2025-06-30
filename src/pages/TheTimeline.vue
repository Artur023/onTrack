<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { isTimeLineItemsValid } from '@/validators.js';

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: isTimeLineItemsValid,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>

<style scoped></style>
