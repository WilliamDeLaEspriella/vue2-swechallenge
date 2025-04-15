<template>
  <span
    v-if="targetTo > targetFrom"
    class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 mr-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </svg>
    {{ Math.abs(Math.round(((targetTo - targetFrom) / targetFrom) * 100)) }}%
  </span>
  <span
    v-else-if="targetTo < targetFrom"
    class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 mr-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
      />
    </svg>
    {{ Math.abs(Math.round(((targetTo - targetFrom) / targetFrom) * 100)) }}%
  </span>
  <span v-else class="font-semibold text-light-inverse text-md/normal"> - </span>
</template>

<script setup>
defineProps({
  targetFrom: Number,
  targetTo: Number,
})
</script>
