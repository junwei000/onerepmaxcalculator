<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black font-sans">
      <TheHeader />
      <main class="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 class="text-3xl font-black uppercase mb-8">Terms of Service</h1>
        <div class="prose">
            <p class="mb-4">Welcome to One Rep Max Calculator. By using our website, you agree to these terms.</p>
            <h2 class="text-xl font-bold uppercase mt-6 mb-2">Usage</h2>
            <p class="mb-4">This tool is for educational and informational purposes only. Consult with a fitness professional before attempting maximal lifts.</p>
            <h2 class="text-xl font-bold uppercase mt-6 mb-2">Disclaimer</h2>
            <p class="mb-4">We are not responsible for any injuries sustained while training. Always lift safely.</p>
            <p class="text-sm text-gray-500 mt-8">Last updated: {{ new Date().toLocaleDateString() }}</p>
        </div>
      </main>
      <TheFooter />
  </div>
</template>
