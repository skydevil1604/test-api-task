<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
}>(), { modelValue: '' })

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const value = computed<string>({
  get() {
    return props.modelValue
  },
  set(newValue: string) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <v-text-field
    clearable
    v-model.trim="value"
    label="Enter package name"
    density="comfortable"
    prepend-icon="$vuetify"
  ></v-text-field>
</template>
