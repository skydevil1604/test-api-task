<script setup lang="ts">
import { packagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'

const props = defineProps <{
  version: string
}>();
const emit = defineEmits(['close'])

const packagesStoreFetch = packagesStore()
const {
  packageName,
  packageVersionInfo,
  loading
} = storeToRefs(packagesStoreFetch)
</script>

<template>
  <v-dialog
    class="modal"
  >
    <div class="modal__wrapper bg-background-light">
      <div class="d-flex justify-space-between">
        <h2>Version information: {{ packageName + '@' +  props.version }}</h2>

        <v-btn
          variant="text"
          bg-color="background-secondary"
          @click="emit('close')"
        > X
        </v-btn>
      </div>

      <div class="modal__body">
        <template v-if="loading">
          <div class="d-flex justify-center">
            <v-progress-circular
              indeterminate
              color="white"
            ></v-progress-circular>
          </div>
        </template>

        <template v-else>
          <div class="mb-2">
            <div class="modal__items mb-2">
              <span>Hits: </span>
              <span>{{ packageVersionInfo?.hits?.total }}</span>
            </div>

            <div class="dates">
              <div
                v-for="item, index in packageVersionInfo?.hits?.dates"
                :key="index"
                class="modal__date"
              >
                <span>{{ index }}: </span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <div>
            <div class="modal__items mb-2">
              <span>Bandwidth: </span>
              <span>{{ packageVersionInfo?.bandwidth?.total }}</span>
            </div>

            <div class="dates">
              <div
                v-for="item, index in packageVersionInfo?.bandwidth?.dates"
                :key="index"
                class="modal__date"
              >
                <span>{{ index }} </span>
                <span>{{ item }} </span>
              </div>
            </div>
          </div>

          <div>
            <div class="modal__items mb-2">
              <span>Links: </span>
            </div>

            <div class="links">
                <a :href="packageVersionInfo?.links?.files">
                  Files
                </a>
                <a :href="packageVersionInfo?.links?.self">
                  Direct Link
                </a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
.modal {
  width: 100%;
  max-width: 80%;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 16px;
    padding: 20px;
    max-height: 85vh;

    @media screen and (max-width: 767px) {
      max-height: 100vh;
    }
  }
  
  &__body {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px rgb(37, 22, 22);
  }

  .dates {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 1fr;
    font-size: 18px;
  }

  &__date {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
  }
  
  .links {
    display: flex;
    justify-content: space-between;
  }
}
</style>
