<template>
  <main class="flex items-center justify-center">
    <div class="w-5/6">
      <div class="flex flex-wrap">
        <div class="w-full max-w-full mx-auto">
          <form @submit.prevent="handleSearch" class="flex w-full px-5">
            <div
              class="flex items-center flex-1 border border-gray-300 rounded-l-md bg-white px-4 py-2"
            >
              <svg
                class="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                type="text"
                v-model="search"
                placeholder="Search Mockups, Logos, Design Templates..."
                class="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              class="bg-primary-light hover:bg-primary-dark border px-5 rounded-r-md flex items-center"
            >
              <svg
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <span class="font-medium">Search</span>
            </button>
          </form>
          <RatingChangeTable
            :ratingChanges="ratingChangeStore.ratingChanges"
            :loading="ratingChangeStore.loading"
          />
          <div
            class="px-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Page {{ parseInt(ratingChangeQueryStore.page, 10) + 1 }}
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                @click="prevPage"
                class="text-sm text-indigo-50 transition duration-150 bg-primary-light hover:bg-primary-dark bg-indigo-600 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              &nbsp; &nbsp;
              <button
                @click="nextPage"
                class="text-sm text-indigo-50 transition duration-150 bg-primary-light hover:bg-primary-dark bg-indigo-600 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import RatingChangeTable from '@/components/RatingChangeTable.vue'
import { useRatingChange } from '@/composables/useRatingChanges'
import { useRatingChangeStore } from '@/stores/ratingChangeStore'
import { useRatingChangeQueryStore } from '@/stores/ratingChangeQueryStore'
import { onMounted, ref } from 'vue'

const ratingChangeStore = useRatingChangeStore()
const ratingChangeQueryStore = useRatingChangeQueryStore()
const search = ref(ratingChangeQueryStore.search)

onMounted(() => {
  useRatingChange()
})

const handleSearch = () => {
  ratingChangeQueryStore.setSearch(search.value)
  useRatingChange(ratingChangeQueryStore.parseQuery)
}
const nextPage = () => {
  const currentPage = parseInt(ratingChangeQueryStore.page, 10)
  ratingChangeQueryStore.page = currentPage + 1
  useRatingChange(ratingChangeQueryStore.parseQuery)
}
const prevPage = () => {
  const currentPage = parseInt(ratingChangeQueryStore.page, 10)
  if (currentPage == 0) return

  ratingChangeQueryStore.page = currentPage - 1
  useRatingChange(ratingChangeQueryStore.parseQuery)
}
</script>
