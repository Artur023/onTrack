<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { validateActivities } from '@/validators.js';
import { ACTIVITIES } from '@/constants.js';

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem v-for="activity in ACTIVITIES" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
