<script setup>
import { inject } from 'vue'

const theme = inject('theme')
</script>

<template>
  <h1>{{theme}}</h1>
  <li class="flex-1">
    <a class="flex flex-col items-center p-2 text-xs capitalize" v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>
