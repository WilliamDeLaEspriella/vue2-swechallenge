import { useRatingChangeDetailsStore, useRatingChangeStore } from '@/stores/ratingChangeStore'
import { getRatingChanges, findRatingChanges } from '@/helpers/getRatingChanges'
import type { RatingChangeQuery } from '@/types/ratingChangeQuery'

export const useRatingChange = async (params: RatingChangeQuery = {}) => {
  const ratingChangeStore = useRatingChangeStore()
  ratingChangeStore.setLoading(true)
  try {
    const stock = await getRatingChanges(params)
    ratingChangeStore.setRatingChanges(stock)
  } catch (e: unknown) {
    if (e instanceof Error) {
      ratingChangeStore.setError(e.message)
    }
  } finally {
    ratingChangeStore.setLoading(false)
  }
}

export const useRatingChangeDetails = async (ticker: string) => {
  const ratingChangeStore = useRatingChangeDetailsStore()
  ratingChangeStore.loading = true
  try {
    const stock = await findRatingChanges(ticker)
    ratingChangeStore.ratingChangesDetails = stock
  } catch (e: unknown) {
    if (e instanceof Error) {
      ratingChangeStore.error = e.message
    }
  } finally {
    ratingChangeStore.loading = false
  }
}
