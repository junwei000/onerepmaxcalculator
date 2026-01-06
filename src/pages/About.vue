<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black font-sans">
      <TheHeader />
      <main class="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 class="text-3xl font-black uppercase mb-8">About Us</h1>
        <div class="prose">
            <p class="mb-4">One Rep Max is a tool designed for strength athletes by strength athletes.</p>
            <p class="mb-4">Our mission is to provide simple, accurate, and accessible tools to help you train smarter.</p>
            <p class="mb-4">This project is open source and respects your privacy.</p>
        </div>
      </main>
      <TheFooter />
  </div>
</template>
