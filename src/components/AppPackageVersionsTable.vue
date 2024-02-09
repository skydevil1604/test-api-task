<script setup lang="ts">

const props = withDefaults(defineProps<{
  headers?: [{}],
  items?: any[],
  loading?: boolean
}>(), {
  items: () => [],
  loading: false
})

const emit = defineEmits<{ 'onItemClick': [item: any, row: any] }>()

function handleClick (item: any, row: any): void {
  emit('onItemClick', item, row)
}
</script>

<template>
  <div v-if="items.length === 0 && loading === false">
    <h1>NO ITEMS</h1>
  </div>
  <v-data-table
    v-else
    class="table bg-background-light"
    :headers="headers"
    :items="items"
    :loading="loading"
    hover
    theme="dark"
    @click:row="handleClick"
  />
</template>

<style lang="scss" scoped>
  .table.v-table {
    max-width: 60%;
    align-self: center;
    flex: 1;

    @media screen and (max-width: 767px) {
      max-width: 95%;
    }

    & :deep(.v-data-table-header__content) {
      color: white;
    }
    & :deep(.v-data-table__td) {
      border-color: black;
    }
    & :deep(.v-data-table__tr) {
      & .v-data-table__td {
        border-color: black;
      }
    }
    & :deep(.v-table__wrapper) {
      thead tr th {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
      }
    }
  }
</style>
