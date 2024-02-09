<script setup lang="ts">
import { packagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'

const { packageItem } = storeToRefs(packagesStore())
</script>

<template>
    <div v-if="packageItem" class="d-flex justify-space-between">
      <div>
          <p>Name:</p>
        <p>{{ packageItem?.name }}</p>
      </div>
      <div>
          <p>Type:</p>
        <p>{{ packageItem?.type }}</p>
      </div>
      <div>
          <p>Latest:</p>
        <p>{{ packageItem?.tags?.latest }}</p>
      </div>
    </div>
    <div v-else class="d-flex justify-center">
      <p>No package</p>
    </div>
</template>
