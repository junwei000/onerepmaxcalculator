<template>
  <header class="flex-none border-b-2 border-black px-6 py-4 flex items-center justify-between bg-white z-20 sticky top-0">
    <router-link to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img src="/android-chrome-70x70.webp" alt="1RM Logo" class="w-10 h-10 object-contain" />
        <div class="flex flex-col">
            <h1 class="text-2xl font-black uppercase tracking-tighter leading-none">One Rep Max</h1>
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">Estimate your strength limit safely</span>
        </div>
    </router-link>
    <div>
        <span class="font-mono text-sm border border-black px-2 py-1 rounded-sm">V1.0</span>
    </div>
  </header>
</template>
