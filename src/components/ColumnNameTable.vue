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
  if (props.label !== ratingChangeQueryStore.orderBy) {
    return 'DESC'
  } else if (
    props.label === ratingChangeQueryStore.orderBy &&
    ratingChangeQueryStore.order === 'ASC'
  ) {
    return 'ASC'
  }

  return 'DESC'
}

const onClick = () => {
  ratingChangeQueryStore.setOrder(ratingChangeQueryStore.order === 'DESC' ? 'ASC' : 'DESC')
  ratingChangeQueryStore.order = props.label
  useRatingChange(ratingChangeQueryStore.parseQuery)
}
</script>
