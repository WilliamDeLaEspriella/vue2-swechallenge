import type { RatingChangeQuery } from '@/types/ratingChangeQuery'
import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const getRatingChanges = async (params: RatingChangeQuery = {}) => {
  const response = await axios.get(API_URL + '/rating_changes', { params })

  return response.data.data
}

export const findRatingChanges = async (ticker: string) => {
  const response = await axios.get(API_URL + '/rating_changes/' + ticker)

  return response.data.data.results
}
