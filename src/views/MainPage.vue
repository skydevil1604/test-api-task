<script setup lang="ts">
import { ref, watch } from 'vue'
import { packagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'
import * as _ from "lodash";
import AppSearchField from '@/components/AppSearchField.vue'
import AppPackageDescription from '@/components/AppPackageDescription.vue'
import AppPackageVersionsTable from '@/components/AppPackageVersionsTable.vue'
import AppModal from '@/components/AppModal.vue'
import AppFooter from '@/components/AppFooter.vue'

const dialog = ref<boolean>(false)
const packageVersion = ref<string>('')

const packagesStoreFetch = packagesStore()
const { getPackage, getPackageVersionInfo } = packagesStoreFetch
const {
  packageName,
  packageItem,
  packageVersionInfo,
  loading
} = storeToRefs(packagesStoreFetch)

const tableHeaders: [{}] = [{
  title: 'Package version',
  sortable: false,
  key: 'version'
}]

const searchPackage = _.debounce(getPackage, 1000)

watch(packageName, newValue => {
  if (!loading.value) loading.value = true
  searchPackage(newValue)
})

function openAppModal(item: any, row: any): void {
  getPackageVersionInfo(packageName.value, row.item.version)
  packageVersion.value = row.item.version
  dialog.value = true
}

function closeAppModal(): void {
  dialog.value = false
  setTimeout(() => packageVersionInfo.value = null, 300)
}
</script>

<template>
  <div class="main-page bg-background-primary pa-8">
    <div class="search">
      <AppSearchField v-model="packageName" />
    </div>

    <AppPackageDescription />

    <AppPackageVersionsTable
      :headers="tableHeaders"
      :items="packageItem?.versions"
      :loading="loading"
      @on-item-click="openAppModal"
    />

    <AppModal v-model="dialog" :version="packageVersion" @close="closeAppModal"/>
  </div>

  <AppFooter />
</template>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);

  .search {
    align-self: center;
    width: 100%;
    max-width: 480px;
  }
}
</style>
