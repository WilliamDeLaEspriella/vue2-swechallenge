<template>
  <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
    <h4 class="text-xl text-gray-900 font-bold">Stocks recommendation</h4>

    <div
      @click="showModal = true"
      class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 hover:cursor-pointer"
    >
      <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
        <div class="flex items-center justify-between">
          <span v-if="ratingChangeStore.loading" class="font-bold text-sm text-indigo-600">
            <Skeleton />
          </span>
          <span v-else class="font-bold text-xl text-indigo-600">
            {{ ratingChangeStore.ratingChangeRecommendation?.name }} ({{
              ratingChangeStore.ratingChangeRecommendation?.ticker
            }})
          </span>
          <span
            class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
            >{{ ratingChangeStore.ratingChangeRecommendation?.total_employees }} Employees</span
          >
        </div>
        <div class="flex items-center justify-end mt-6">
          <div class="flex flex-col">
            <div class="flex items-end">
              <span v-if="ratingChangeStore.loading" class="text-2xl 2xl:text-3xl font-bold">
                <Skeleton />
              </span>
              <span v-else class="text-2xl 2xl:text-3xl font-bold">
                {{ formatMarketCap(ratingChangeStore.ratingChangeRecommendation?.market_cap ?? 0) }}
                {{ ratingChangeStore.ratingChangeRecommendation?.currency_name }}
              </span>
              <div class="flex items-center ml-2 mb-1">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
                <span class="font-bold text-lg text-gray-500 ml-0.5">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalRatingChangeDetails
      :visible="showModal"
      @close="showModal = false"
      :ticker="ratingChangeStore.ratingChangeRecommendation?.ticker ?? ''"
    >
      <template #default="{ ratingChangeDetails, loadingModal }">
        <div v-if="loadingModal">
          <h1 class="text-xl pt-2 font-bold"><Skeleton /></h1>
          <h2 class="text-lg pt-2 font-bold"><Skeleton /></h2>
          <p class="mt-2 text-sm pt-12 text-gray-600"><Skeleton :rows="6" /></p>
        </div>
        <div v-else>
          <h1 class="text-xl font-bold">{{ ratingChangeDetails?.ticker }}</h1>
          <h2 class="text-lg font-bold">{{ ratingChangeDetails?.name }}</h2>
          <p class="mt-2 text-sm text-gray-600">{{ ratingChangeDetails?.description }}</p>
          <GraphMACD v-if="ratingChangeDetails?.ticker" :ticker="ratingChangeDetails?.ticker" />
        </div>
      </template>
    </ModalRatingChangeDetails>
  </div>
</template>
<script setup lang="ts">
import Skeleton from '@brayamvalero/vue3-skeleton'
import GraphMACD from '@/components/GraphMACD.vue'

import { useRatingChangeRecommendation } from '@/composables/useRatingChanges'
import { useRatingChangeRecommendationStore } from '@/stores/ratingChangeStore'
import { onMounted, ref } from 'vue'
import ModalRatingChangeDetails from './ModalRatingChangeDetails.vue'

const ratingChangeStore = useRatingChangeRecommendationStore()
const showModal = ref(false)
const tickerSelect = ref('')

onMounted(() => {
  useRatingChangeRecommendation()
})

function formatMarketCap(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`
  } else if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  } else {
    return `$${value.toLocaleString()}`
  }
}
</script>
