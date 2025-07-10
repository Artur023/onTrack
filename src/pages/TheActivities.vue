<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { isActivityValid, isNumber, validateActivities } from '@/validators.js';
import TheActivityForm from '@/components/TheActivityForm.vue';
import TheActivityEmptyState from '@/components/TheActivityEmptyState.vue';

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});
const emit = defineEmits({
  setActivitySecondsToComplete(activity, setSecondsToComplete) {
    return [isActivityValid(activity), isNumber(setSecondsToComplete)].every(Boolean);
  },
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
});

function setSecondsToComplete(activity, setSecondsToComplete) {
  emit('setActivitySecondsToComplete', activity, setSecondsToComplete);
}
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivityEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
