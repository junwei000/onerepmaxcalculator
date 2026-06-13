<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import { useLocale } from '../composables/useLocale'

const { t, locale } = useLocale()

useHead(computed(() => ({
  title: t.value.meta.title,
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t.value.meta.description },
    { name: 'keywords', content: t.value.meta.keywords },
  ],
  link: [
    { rel: 'alternate', hreflang: 'en', href: 'https://onerepmaxcalculator.pro/' },
    { rel: 'alternate', hreflang: 'zh-CN', href: 'https://onerepmaxcalculator.pro/zh-CN' },
    { rel: 'alternate', hreflang: 'ko', href: 'https://onerepmaxcalculator.pro/ko' },
    { rel: 'alternate', hreflang: 'ja', href: 'https://onerepmaxcalculator.pro/ja' },
    { rel: 'alternate', hreflang: 'de', href: 'https://onerepmaxcalculator.pro/de' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://onerepmaxcalculator.pro/fr' },
    { rel: 'alternate', hreflang: 'es', href: 'https://onerepmaxcalculator.pro/es' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://onerepmaxcalculator.pro/' },
  ],
})))

// Calculator state
const weight = ref<number | null>(null)
const reps = ref<number | null>(null)
const oneRepMax = ref<number | null>(null)
const liftType = ref('Lifts')
const unit = ref('KG')
const openFaqIndex = ref<number | null>(null)

const liftOptions = ['Lifts', 'Deadlift', 'Squat', 'Bench Press']
const unitOptions = ['KG', 'lb']
const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]

const calculate1RM = () => {
  if (weight.value && reps.value) {
    if (reps.value === 1) {
      oneRepMax.value = weight.value
    } else if (liftType.value === 'Deadlift') {
      oneRepMax.value = weight.value * Math.pow(reps.value, 0.10)
    } else if (liftType.value === 'Squat') {
      oneRepMax.value = weight.value * (1 + (0.0333 * reps.value))
    } else {
      oneRepMax.value = weight.value / (1.0278 - (0.0278 * reps.value))
    }
  }
}

const formulaName = computed(() => {
  if (liftType.value === 'Deadlift') return 'LOMBARDI'
  if (liftType.value === 'Squat') return 'EPLEY'
  return 'BRZYCKI'
})

const breakdown = computed(() => {
  if (!oneRepMax.value) return []
  return percentages.map(p => ({
    percentage: p,
    weight: Math.round((oneRepMax.value! * p) / 100),
    reps: estimateReps(p),
  }))
})

const estimateReps = (percentage: number) => {
  if (percentage >= 100) return 1
  if (percentage >= 95) return 2
  if (percentage >= 90) return 3
  if (percentage >= 85) return 5
  if (percentage >= 80) return 8
  if (percentage >= 75) return 10
  if (percentage >= 70) return 12
  if (percentage >= 65) return 15
  if (percentage >= 60) return 20
  return '20+'
}

const buttonText = computed(() => oneRepMax.value ? t.value.calculator.recalculateBtn : t.value.calculator.calculateBtn)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black font-sans">
    <TheHeader />

    <main class="flex-1">

      <!-- ① HERO BLOCK -->
      <section class="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b-2 border-black">
        <!-- Grid background -->
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div class="relative max-w-3xl space-y-6">
          <span class="inline-block text-xs font-bold uppercase tracking-[0.2em] border-2 border-black px-4 py-1">
            {{ t.hero.badge }}
          </span>
          <h1 class="text-5xl md:text-7xl font-black uppercase leading-none tracking-wide">
            {{ t.hero.title }}
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {{ t.hero.subtitle }}
          </p>
          <div class="pt-2">
            <a
              href="#calculator"
              class="inline-block px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors border-2 border-black"
            >
              {{ t.hero.cta }}
            </a>
          </div>
        </div>
      </section>

      <!-- ② CALCULATOR BLOCK -->
      <section id="calculator" class="py-16 md:py-20 px-4 bg-gray-50 border-b-2 border-black">
        <div class="max-w-2xl mx-auto flex flex-col gap-8">

          <!-- Calculator card -->
          <div class="p-8 border-2 border-black bg-white shadow-none md:shadow-2xl">
            <div class="space-y-8">
              <div class="space-y-2 text-center">
                <h2 class="text-3xl font-black uppercase leading-tight">{{ t.calculator.title }}</h2>
                <p class="text-gray-500 font-medium">{{ t.calculator.subtitle }}</p>
              </div>

              <div class="max-w-md mx-auto space-y-6">
                <!-- Lift Type -->
                <div class="space-y-2">
                  <label for="liftType" class="block font-bold uppercase text-sm tracking-widest">{{ t.calculator.liftLabel }}</label>
                  <div class="relative">
                    <select
                      id="liftType"
                      v-model="liftType"
                      class="block w-full bg-white border-2 border-black p-4 text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all appearance-none"
                    >
                      <option v-for="option in liftOptions" :key="option" :value="option">{{ option }}</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Weight -->
                <div class="space-y-2">
                  <label for="weight" class="block font-bold uppercase text-sm tracking-widest">{{ t.calculator.weightLabel }}</label>
                  <div class="relative">
                    <input
                      type="number"
                      id="weight"
                      v-model.number="weight"
                      class="block w-full bg-white border-2 border-black p-4 pr-32 text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all placeholder:text-gray-300"
                      placeholder="0"
                      @keyup.enter="calculate1RM"
                    />
                    <div class="absolute right-2 top-1/2 -translate-y-1/2">
                      <select
                        v-model="unit"
                        aria-label="Weight Unit"
                        class="bg-gray-100 font-black text-gray-500 hover:text-black border-none rounded-sm py-1 pl-2 pr-1 text-sm uppercase focus:ring-0 cursor-pointer"
                      >
                        <option v-for="opt in unitOptions" :key="opt" :value="opt">{{ opt }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Reps -->
                <div class="space-y-2">
                  <label for="reps" class="block font-bold uppercase text-sm tracking-widest">{{ t.calculator.repsLabel }}</label>
                  <input
                    type="number"
                    id="reps"
                    v-model.number="reps"
                    class="block w-full bg-white border-2 border-black p-4 text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all placeholder:text-gray-300"
                    placeholder="0"
                    @keyup.enter="calculate1RM"
                  />
                </div>

                <button
                  @click="calculate1RM"
                  class="w-full py-5 bg-black text-white text-xl font-black uppercase tracking-widest hover:bg-gray-900 active:scale-[0.99] transition-all border-2 border-black"
                >
                  {{ buttonText }}
                </button>
              </div>
            </div>
          </div>

          <!-- Results card -->
          <div class="flex flex-col bg-white border-2 border-black shadow-none md:shadow-2xl relative min-h-[300px]">
            <div class="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="result-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#result-grid)" />
              </svg>
            </div>

            <div v-if="oneRepMax" class="flex-1 flex flex-col relative">
              <div class="flex-none p-10 border-b-2 border-black flex items-end justify-between bg-white">
                <div>
                  <h3 class="font-bold uppercase text-black tracking-widest mb-2">{{ t.calculator.results.title }}</h3>
                  <div class="text-8xl md:text-9xl font-black leading-none tracking-tighter text-black">
                    {{ Math.round(oneRepMax) }}<span class="text-4xl text-black align-top ml-2">{{ unit }}</span>
                  </div>
                </div>
                <div class="text-right hidden sm:block">
                  <div class="text-sm font-bold uppercase text-gray-400">{{ t.calculator.results.analysis }}</div>
                  <div class="font-mono text-xs text-gray-500 mt-1">{{ t.calculator.results.formulaLabel }} {{ formulaName }}</div>
                </div>
              </div>

              <div class="flex-1 overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead class="bg-black text-white">
                    <tr>
                      <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3">{{ t.calculator.results.percentageCol }}</th>
                      <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3">{{ t.calculator.results.weightCol }} ({{ unit }})</th>
                      <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3 text-right">{{ t.calculator.results.repsCol }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y-2 divide-gray-100">
                    <tr v-for="item in breakdown" :key="item.percentage" class="hover:bg-gray-50 group transition-colors">
                      <td class="p-5 font-black text-xl md:text-2xl group-hover:pl-8 transition-all">{{ item.percentage }}%</td>
                      <td class="p-5 font-medium text-xl md:text-2xl text-gray-600">{{ item.weight }}</td>
                      <td class="p-5 font-mono text-xl md:text-2xl text-right">{{ item.reps }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div v-else class="flex-1 flex items-center justify-center p-10 text-center relative">
              <div class="max-w-lg">
                <div class="text-9xl font-black text-gray-100 mb-6 select-none opacity-50">1RM</div>
                <h3 class="text-2xl font-bold uppercase mb-2">{{ t.calculator.results.emptyTitle }}</h3>
                <p class="text-gray-500">{{ t.calculator.results.emptyDesc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ③ WHAT IS BLOCK -->
      <section id="what-is" class="py-20 md:py-28 px-6 border-b-2 border-black">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="text-3xl md:text-4xl font-black uppercase leading-tight mb-8 border-l-4 border-black pl-5">
                {{ t.whatIs.title }}
              </h2>
            </div>
            <div class="space-y-5">
              <p v-for="(para, i) in t.whatIs.paragraphs" :key="i" class="text-gray-700 leading-relaxed">
                {{ para }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ④ HOW TO BLOCK -->
      <section id="how-to" class="py-20 md:py-28 px-6 bg-black text-white border-b-2 border-black">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black uppercase leading-tight mb-4">
              {{ t.howTo.title }}
            </h2>
            <p class="text-gray-400 text-lg">{{ t.howTo.subtitle }}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="step in t.howTo.steps" :key="step.number" class="border border-gray-700 p-8 hover:border-white transition-colors">
              <div class="text-5xl font-black text-gray-700 mb-6 leading-none">{{ step.number }}</div>
              <h3 class="text-xl font-black uppercase mb-3 tracking-tight">{{ step.title }}</h3>
              <p class="text-gray-400 leading-relaxed text-sm">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ⑤ WHO NEEDS BLOCK -->
      <section id="who-needs" class="py-20 md:py-28 px-6 border-b-2 border-black">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black uppercase leading-tight mb-4">
              {{ t.whoNeeds.title }}
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto">{{ t.whoNeeds.subtitle }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              v-for="item in t.whoNeeds.items"
              :key="item.title"
              class="group border-2 border-black p-6 hover:bg-black hover:text-white transition-all"
            >
              <h3 class="font-black uppercase text-lg mb-3 tracking-tight">{{ item.title }}</h3>
              <p class="text-sm leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ⑥ FAQ BLOCK -->
      <section id="faq" class="py-20 md:py-28 px-6 bg-gray-50 border-b-2 border-black">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black uppercase leading-tight mb-4">
              {{ t.faq.title }}
            </h2>
            <p class="text-gray-500">{{ t.faq.subtitle }}</p>
          </div>
          <div class="divide-y-2 divide-black border-t-2 border-b-2 border-black">
            <div v-for="(item, index) in t.faq.items" :key="index">
              <button
                class="w-full text-left py-6 flex items-start justify-between gap-4 group"
                @click="toggleFaq(index)"
              >
                <h3 class="font-bold text-base leading-snug pr-2">{{ item.question }}</h3>
                <span class="flex-none text-2xl font-black leading-none mt-0.5 transition-transform" :class="openFaqIndex === index ? 'rotate-45' : ''">+</span>
              </button>
              <div v-show="openFaqIndex === index" class="pb-6 text-gray-600 leading-relaxed text-sm">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ⑦ CTA BLOCK -->
      <section class="py-20 md:py-28 px-6">
        <div class="max-w-4xl mx-auto">
          <div class="border-2 border-dashed border-black px-8 py-16 text-center">
            <h2 class="text-3xl md:text-5xl font-black uppercase leading-tight mb-6 max-w-2xl mx-auto tracking-tighter">
              {{ t.cta.title }}
            </h2>
            <p class="text-gray-500 text-lg mb-10 max-w-xl mx-auto">{{ t.cta.subtitle }}</p>
            <a
              href="#calculator"
              class="inline-block px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors border-2 border-black"
            >
              {{ t.cta.button }}
            </a>
          </div>
        </div>
      </section>

      <!-- ⑧ FRIEND LINKS -->
      <section class="pb-12 px-6">
        <div class="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <a href="https://findly.tools/one-rep-max-calculator?utm_source=one-rep-max-calculator" target="_blank" rel="noopener noreferrer">
            <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="80" height="25" />
          </a>
        </div>
      </section>

    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: white; border-left: 1px solid #eee; }
::-webkit-scrollbar-thumb { background: black; }
::-webkit-scrollbar-thumb:hover { background: #333; }
</style>
