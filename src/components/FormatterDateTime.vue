<script setup lang="ts">
import { computed } from "vue";
import dateFormatter from '@/plugins/dateFormatter'

type FormatDatetimeOptions = {
    format: string; // https://date-fns.org/v2.16.1/docs/format
}

const props = defineProps < {
  value: number; // timestamp !!! miliseconds !!!
  options: FormatDatetimeOptions
}>();

const formattedDate = computed(() => dateFormatter(props.value, props.options));
</script>

<template>
  <span>{{ formattedDate }}</span>
</template>