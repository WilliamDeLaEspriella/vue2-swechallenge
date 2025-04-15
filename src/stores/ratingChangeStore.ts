import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RatingChange, RatingChangeDetails } from '@/types/ratingChangeQuery'

export const useRatingChangeStore = defineStore('ratingChanges', () => {
  const ratingChanges = ref<RatingChange[]>([])
  const error = ref<string | null>(null)
  const loading = ref(true)
  const setRatingChanges = (stocks: RatingChange[]) => {
    ratingChanges.value = stocks
  }
  const setError = (errMsg: string) => {
    error.value = errMsg
  }
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  return { ratingChanges, setRatingChanges, error, setError, loading, setLoading }
})

export const useRatingChangeDetailsStore = defineStore('ratingChangeDetails', () => {
  const ratingChangesDetails = ref<RatingChangeDetails | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)
  const setRatingChangesDetails = (stocks: RatingChangeDetails) => {
    ratingChangesDetails.value = stocks
  }
  const setError = (errMsg: string) => {
    error.value = errMsg
  }
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  return { ratingChangesDetails, setRatingChangesDetails, error, setError, loading, setLoading }
})
