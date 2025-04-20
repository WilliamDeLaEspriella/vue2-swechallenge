<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-secondary-dark bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
      <slot
        :ratingChangeDetails="ratingChangeDetailsStore.ratingChangesDetails"
        :loadingModal="ratingChangeDetailsStore.loading"
      />
      <div class="mt-4 text-right">
        <button
          class="px-4 py-2 bg-primary-light text-black rounded hover:bg-primary-dark"
          @click="close"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRatingChangeDetails } from '@/composables/useRatingChanges'
import { useRatingChangeDetailsStore } from '@/stores/ratingChangeStore'
import { watch } from 'vue'

const ratingChangeDetailsStore = useRatingChangeDetailsStore()

const props = defineProps<{
  visible: boolean
  ticker: string
}>()

watch(
  () => props.ticker,
  (newTicker) => {
    if (newTicker) {
      console.log({ newTicker })
      useRatingChangeDetails(newTicker)
    }
  },
  { immediate: true },
)
const emit = defineEmits(['close'])

const close = () => emit('close')
</script>
