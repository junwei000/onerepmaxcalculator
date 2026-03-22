<template>
  <footer class="bg-black text-white py-12 px-6">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
              <div class="font-black text-2xl uppercase tracking-tighter mb-2">One Rep Max</div>
              <p class="text-gray-400 text-sm">Train smarter, not just harder.</p>
          </div>
          
          <nav class="flex flex-wrap gap-6 justify-center">
              <router-link to="/" class="hover:text-gray-300 transition-colors uppercase font-bold text-sm tracking-widest">Home</router-link>
              <router-link to="/about" class="hover:text-gray-300 transition-colors uppercase font-bold text-sm tracking-widest">About</router-link>
              <router-link to="/terms" class="hover:text-gray-300 transition-colors uppercase font-bold text-sm tracking-widest">Terms</router-link>
              <router-link to="/privacy" class="hover:text-gray-300 transition-colors uppercase font-bold text-sm tracking-widest">Privacy</router-link>
          </nav>
      </div>
      <div class="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-800 flex justify-center gap-4 text-sm text-gray-500">
          <span>Friends:</span>
          <a href="https://aniv.ai" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">Aniv AI</a>
      </div>
      <div class="max-w-4xl mx-auto mt-4 pt-4 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {{ new Date().getFullYear() }} One Rep Max Calculator. All rights reserved.
      </div>
  </footer>
</template>
