import {
  useRatingChangeDetailsStore,
  useRatingChangeStore,
  useRatingChangeRecommendationStore,
} from '@/stores/ratingChangeStore'
import {
  getRatingChanges,
  findRatingChanges,
  ratingChangeRecommendation,
} from '@/helpers/getRatingChanges'
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

export const useRatingChangeRecommendation = async () => {
  const ratingChangeRecommendationStore = useRatingChangeRecommendationStore()
  ratingChangeRecommendationStore.loading = true
  try {
    const stock = await ratingChangeRecommendation()
    ratingChangeRecommendationStore.setRatingChangeRecommendation(stock)
  } catch (e: unknown) {
    if (e instanceof Error) {
      ratingChangeRecommendationStore.error = e.message
    }
  } finally {
    ratingChangeRecommendationStore.loading = false
  }
}
