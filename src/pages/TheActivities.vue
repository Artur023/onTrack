<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { isActivityValid, validateActivities } from '@/validators.js';
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
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
});
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
