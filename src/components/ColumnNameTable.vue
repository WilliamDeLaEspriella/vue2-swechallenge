<template>
  <th :class="className">
    {{ name }}
    <button @click="onClick">
      <svg
        v-if="sortDirection() === 'DESC'"
        class="w-6 h-6 inline-block ml-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M10 5l5 8H5l5-8z" clip-rule="evenodd" />
      </svg>
      <svg v-else class="w-6 h-6 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 15l-5-8h10l-5 8z" clip-rule="evenodd" />
      </svg>
    </button>
  </th>
</template>

<script setup lang="ts">
import { useRatingChangeQueryStore } from '@/stores/ratingChangeQueryStore'
import { useRatingChange } from '@/composables/useRatingChanges'

const ratingChangeQueryStore = useRatingChangeQueryStore()
const props = defineProps<{
  name: string
  label: string
  className: string
}>()

const sortDirection = () => {
  if (props.label !== ratingChangeQueryStore.order) {
    return 'DESC'
  } else if (
    props.label === ratingChangeQueryStore.order &&
    ratingChangeQueryStore.orderBy === 'ASC'
  ) {
    return 'ASC'
  }

  return 'DESC'
}

const onClick = () => {
  console.log(ratingChangeQueryStore.order, ratingChangeQueryStore.orderBy)
  ratingChangeQueryStore.setOrderBy(ratingChangeQueryStore.orderBy === 'DESC' ? 'ASC' : 'DESC')
  ratingChangeQueryStore.setOrder(props.label)

  useRatingChange(ratingChangeQueryStore.parseQuery)
}
</script>
