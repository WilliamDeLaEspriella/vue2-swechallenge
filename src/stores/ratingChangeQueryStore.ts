import { defineStore } from 'pinia'

export const useRatingChangeQueryStore = defineStore('ratingChangeQuery', {
  state: () => ({
    search: '',
    page: '0',
    limit: '10',
    order: 'DESC',
    orderBy: 'created_at',
  }),
  getters: {
    parseQuery: (state) => {
      return {
        search: state.search,
        page: state.page,
        limit: state.limit,
        order: state.order,
        orderBy: state.orderBy,
      }
    },
  },
  actions: {
    reset() {
      this.search = ''
      this.page = '0'
      this.limit = '10'
      this.order = 'DESC'
      this.orderBy = 'created_at'
    },
    setSearch(search: string) {
      this.search = search
    },
    setPage(page: string) {
      this.page = page
    },
    setLimit(limit: string) {
      this.limit = limit
    },
    setOrder(order: string) {
      this.order = order
    },
    setOrderBy(orderBy: string) {
      this.orderBy = orderBy
    },
  },
})
