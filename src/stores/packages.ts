import { ref } from 'vue'
import { defineStore } from 'pinia'
import { packagesService } from '@/api/packagesApi'
import type { Package, packageVersionInfo } from '@/types'
import type { AxiosResponse } from 'axios'

export const packagesStore = defineStore('packages', () => {
  const packageName = ref<string>('')
  const packageItem = ref<Package | null>(null)
  const loading = ref<boolean>(false)
  const packageVersionInfo = ref<packageVersionInfo | null>(null)

  async function getPackage(value: string): Promise<void> {
    try {
      loading.value = true
      const response: AxiosResponse = await packagesService.getPackage(value)
      packageItem.value = response.data
    } catch (error) {
      packageItem.value = null
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  async function getPackageVersionInfo(value: string, version: string): Promise<void> {
    try {
      loading.value = true
      const response: AxiosResponse = await packagesService.getPackageVersionInfo(value, version)
      packageVersionInfo.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    packageName,
    packageItem,
    packageVersionInfo,
    getPackage,
    getPackageVersionInfo,
    loading
  }
})
