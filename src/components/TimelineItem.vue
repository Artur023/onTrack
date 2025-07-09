<script setup>
import BaseSelect from '@/components/BaseSelect.vue';
import {
  isActivityValid,
  isTimeLineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators.js';
import TimelineHour from '@/components/TimelineHour.vue';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
});
const emit = defineEmits({
  selectActivity: isActivityValid,
});

function selectActivity(id) {
  emit(
    'selectActivity',
    props.activities.find((activity) => {
      return activity.id === id;
    }),
  );
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      placeholder="Rest"
      @select="selectActivity"
    />
  </li>
</template>

<style scoped></style>
