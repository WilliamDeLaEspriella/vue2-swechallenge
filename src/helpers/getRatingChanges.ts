import type { RatingChangeQuery } from '@/types/ratingChangeQuery'
import axios from 'axios'

const API_URL = 'https://eip7ndt4i8.execute-api.us-east-1.amazonaws.com'

export const getRatingChanges = async (params: RatingChangeQuery = {}) => {
  const response = await axios.get(API_URL + '/rating_changes', { params })

  return response.data.data
}

export const findRatingChanges = async (ticker: string) => {
  const response = await axios.get(API_URL + '/rating_changes/' + ticker)

  return response.data.data.results
}

export const ratingChangeRecommendation = async () => {
  const response = await axios.get(API_URL + '/rating_changes/recommendation')
  console.log({ response })
  return response.data.data.results
}
