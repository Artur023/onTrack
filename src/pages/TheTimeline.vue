<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import {
  isActivityValid,
  isTimeLineItemsValid,
  isTimeLineItemValid,
  validateActivities,
} from '@/validators.js';

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: isTimeLineItemsValid,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  setTimelineItemActivity({ timelineItem, activity }) {
    return [isTimeLineItemValid(timelineItem), isActivityValid(activity)].every(Boolean);
  },
});
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        :timeline-item="timelineItem"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>

<style scoped></style>
