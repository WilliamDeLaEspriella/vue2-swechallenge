<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
  />

  <div
    class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5"
  >
    <div
      class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30"
    >
      <div class="flex-auto block py-8 pt-6 px-9">
        <div class="overflow-x-auto">
          <table class="w-full my-0 align-middle text-dark border-neutral-200">
            <thead class="align-bottom">
              <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                <ColumnNameTable
                  className="pb-3 text-start min-w-[175px]"
                  name="TICKER"
                  label="ticker"
                />
                <ColumnNameTable
                  className="pb-3 text-end min-w-[100px]"
                  name="COMPANY"
                  label="company"
                />
                <ColumnNameTable
                  className="pb-3 text-end min-w-[100px]"
                  name="BROKERAGE"
                  label="brokerage"
                />
                <ColumnNameTable
                  className="pb-3 pr-12 text-end min-w-[175px]"
                  name="ACTION"
                  label="action"
                />

                <th class="pb-3 pr-12 text-end min-w-[100px]"></th>
                <th class="pb-3 pr-12 text-end min-w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading" class="border-b border-dashed last:border-b-0">
                <td class="p-3 pl-0">
                  <Skeleton :rows="10" />
                </td>
                <td class="p-3 pr-0 text-end">
                  <Skeleton :rows="10" />
                </td>
                <td class="p-3 pr-0 text-end">
                  <Skeleton :rows="10" />
                </td>
                <td class="p-3 pr-12 text-end">
                  <Skeleton :rows="10" />
                </td>
                <td class="pr-0 text-start">
                  <Skeleton :rows="10" />
                </td>
                <td class="p-3 pr-0 text-end">
                  <Skeleton :rows="10" />
                </td>
              </tr>
              <tr
                v-else
                v-for="ratingChange in ratingChanges"
                class="border-b border-dashed last:border-b-0"
                :key="ratingChange.ticker"
              >
                <td class="p-3 pl-0">
                  <div class="flex items-center">
                    <div class="flex flex-col justify-start">
                      <a
                        href="javascript:void(0)"
                        class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                      >
                        {{ ratingChange.ticker }}
                      </a>
                    </div>
                  </div>
                </td>
                <td class="p-3 pr-0 text-end">
                  <span class="font-semibold text-light-inverse text-md/normal">
                    {{ ratingChange.company }}
                  </span>
                </td>
                <td class="p-3 pr-0 text-end">
                  <span class="font-semibold text-light-inverse text-md/normal">
                    {{ ratingChange.brokerage }}
                  </span>
                </td>
                <td class="p-3 pr-12 text-end">
                  <span
                    class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"
                  >
                    {{ ratingChange.action }}
                  </span>
                </td>
                <td class="pr-0 text-start">
                  <TargetLabelDiference
                    :targetTo="ratingChange.target_to"
                    :targetFrom="ratingChange.target_from"
                  />
                </td>
                <td class="p-3 pr-0 text-end">
                  <button
                    @click="setTickerSelect(ratingChange.ticker)"
                    class="ml-auto relative text-secondary-dark bg-light-light hover:bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
                  >
                    <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <ModalRatingChangeDetails :visible="showModal" @close="showModal = false" :ticker="tickerSelect">
    <template #default="{ ratingChangeDetails, loadingModal }">
      <div v-if="loadingModal">
        <h1 class="text-xl pt-2 font-bold"><Skeleton /></h1>
        <h2 class="text-lg pt-2 font-bold"><Skeleton /></h2>
        <p class="mt-2 text-sm pt-12 text-gray-600"><Skeleton :rows="6" /></p>
      </div>
      <div v-else>
        <h1 class="text-xl font-bold">{{ ratingChangeDetails.ticker }}</h1>
        <h2 class="text-lg font-bold">{{ ratingChangeDetails.name }}</h2>
        <p class="mt-2 text-sm text-gray-600">{{ ratingChangeDetails.description }}</p>
        <GraphMACD :ticker="ratingChangeDetails.ticker" />
      </div>
    </template>
  </ModalRatingChangeDetails>
</template>
<script setup>
import { ref } from 'vue'
import { Skeleton } from '@brayamvalero/vue3-skeleton'

import TargetLabelDiference from '@/components/TargetLabelDiference.vue'
import GraphMACD from '@/components/GraphMACD.vue'
import ModalRatingChangeDetails from '@/components/ModalRatingChangeDetails.vue'
import ColumnNameTable from './ColumnNameTable.vue'
const showModal = ref(false)
const tickerSelect = ref('')
defineProps({
  ratingChanges: Array,
  loading: Boolean,
})

const setTickerSelect = (ticker) => {
  tickerSelect.value = ticker
  showModal.value = true
}
</script>
