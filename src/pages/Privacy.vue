<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black font-sans">
      <TheHeader />
      <main class="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 class="text-3xl font-black uppercase mb-8">Privacy Policy</h1>
         <div class="prose">
            <p class="mb-4">Your privacy is important to us. This Calculator operates entirely on your device (client-side).</p>
            <h2 class="text-xl font-bold uppercase mt-6 mb-2">Data Collection</h2>
            <p class="mb-4">We do not collect, store, or transmit any personal data you enter into the calculator. All calculations happen instantly in your browser.</p>
            <h2 class="text-xl font-bold uppercase mt-6 mb-2">Local Storage</h2>
            <p class="mb-4">We may use your browser's local storage to save your last calculation for convenience. This data never leaves your device.</p>
            <p class="text-sm text-gray-500 mt-8">Last updated: {{ new Date().toLocaleDateString() }}</p>
        </div>
      </main>
  </div>
</template>
