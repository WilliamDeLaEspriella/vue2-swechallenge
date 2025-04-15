export interface RatingChangeQuery {
  search?: string
  page?: string
  limit?: string
  order?: string
  orderBy?: string
}

export interface RatingChange {
  id: number
  ticker: string
  company: string
  brokerage: string
  action: string
  rating_from?: string
  rating_to?: string
  target_from?: number
  target_to?: number
  created_at?: string
}

export interface RatingChangeDetails {
  active: boolean
  address: Address
  branding: Branding
  cik: string
  composite_figi: string
  currency_name: string
  delisted_utc: string
  description: string
  homepage_url: string
  last_updated_utc: string
  list_date: string
  locale: string
  market: string
  market_cap: number
  name: string
  phone_number: string
  primary_exchange: string
  share_class_figi: string
  share_class_shares_outstanding: number
  sic_code: string
  sic_description: string
  ticker: string
  ticker_root: string
  total_employees: number
  type: string
  weighted_shares_outstanding: number
}

export interface Address {
  address1: string
  address2: string
  city: string
  postal_code: string
  state: string
}

export interface Branding {
  logo_url: string
  icon_url: string
}
