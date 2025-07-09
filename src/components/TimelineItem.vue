<script setup>
import BaseSelect from '@/components/BaseSelect.vue';
import { isTimeLineItemValid, validateSelectOptions } from '@/validators.js';
import { ref } from 'vue';
import TimelineHour from '@/components/TimelineHour.vue';

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
});


const selectedActivityId = ref(null);
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      :selected="selectedActivityId"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<style scoped></style>
