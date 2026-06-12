<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { locale, locales } = useLocale()
const menuOpen = ref(false)

const siteTitle = computed(() => {
  if (locale.value === 'zh-CN') return '1RM 计算器'
  if (locale.value === 'ko') return '1RM 계산기'
  if (locale.value === 'ja') return '1RM 計算機'
  return 'One Rep Max Calculator'
})

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <header class="flex-none border-b-2 border-black px-6 py-4 flex items-center justify-between bg-white z-20 sticky top-0">
    <router-link to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <img src="/android-chrome-70x70.webp" alt="1RM Logo" class="w-10 h-10 object-contain" />
      <div class="flex flex-col">
        <span class="text-xl font-black uppercase tracking-tighter leading-none">{{ siteTitle }}</span>
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">Free 1RM Strength Tool</span>
      </div>
    </router-link>

    <!-- Language Switcher -->
    <div class="relative">
      <button
        @click="toggleMenu"
        class="flex items-center gap-2 font-bold text-sm border-2 border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors uppercase tracking-widest"
      >
        <span>{{ locales[locale].flag }}</span>
        <span>{{ locales[locale].name }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        v-if="menuOpen"
        class="absolute right-0 top-full mt-1 bg-white border-2 border-black z-50 min-w-[140px]"
      >
        <router-link
          v-for="(info, key) in locales"
          :key="key"
          :to="info.path"
          @click="closeMenu"
          class="flex items-center gap-3 px-4 py-3 hover:bg-black hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          :class="locale === key ? 'bg-black text-white' : ''"
        >
          <span>{{ info.flag }}</span>
          <span>{{ info.name }}</span>
        </router-link>
      </div>

      <!-- Backdrop to close menu -->
      <div v-if="menuOpen" class="fixed inset-0 z-40" @click="closeMenu" />
    </div>
  </header>
</template>
