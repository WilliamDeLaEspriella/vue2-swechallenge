<template>
  <div class="bg-white rounded-lg shadow-xl pb-8 relative">
    <div class="absolute right-12 mt-4 rounded">
      <button
        @click="openSettings = !openSettings"
        class="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
        title="Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M12 5v.01M12 12v.01M12 19v.01"
          />
        </svg>
      </button>
      <div
        v-if="openSettings"
        class="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
      >
        <div class="py-2 border-b">
          <p class="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
          <button class="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316"
              />
            </svg>
            <span class="text-sm text-gray-700">Share Profile</span>
          </button>
        </div>
      </div>
    </div>

    <div class="w-full h-[250px]">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
        class="w-full h-full rounded-tl-lg rounded-tr-lg"
      />
    </div>

    <div class="flex flex-col items-center -mt-20">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
        class="w-40 border-4 border-white rounded-full"
      />
      <div class="flex items-center space-x-2 mt-2">
        <p class="text-2xl">Amanda Ross</p>
        <span class="bg-blue-500 rounded-full p-1" title="Verified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-100 h-2.5 w-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </div>
      <p class="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
      <p class="text-sm text-gray-500">New York, USA</p>
    </div>

    <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
      <div class="flex items-center space-x-4 mt-2">
        <button
          class="flex items-center bg-primary-light hover:bg-primary-dark text-primary-dark px-4 py-2 rounded text-sm space-x-2 transition duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
            />
          </svg>
          <span>Connect</span>
        </button>
        <button
          class="flex items-center bg-primary-light hover:bg-primary-dark hover:bg-blue-700 text-primary-dark px-4 py-2 rounded text-sm space-x-2 transition duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Message</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const openSettings = ref(false)
</script>
