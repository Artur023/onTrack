<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline/index.js';
import { isActivityValid } from '@/validators.js';
import { nextTick, ref } from 'vue';

const activity = ref('');
const emit = defineEmits({
  submit: isActivityValid,
});

async function submit() {
  emit('submit', activity.value);
  activity.value = '';
  await nextTick();

  window.scrollTo(0, document.body.scrollHeight);
}
</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="submit">
    <input
      v-model="activity"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      type="text"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
