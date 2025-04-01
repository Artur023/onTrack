<script setup>
const props = defineProps(['timelineItem']);

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 text-white'
    : 'text-gray-500 bg-gray-100',
];
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a :class="hourLinkClasses" href="#">{{ timelineItem.hour }}:00</a>
  </li>
</template>

<style scoped></style>
