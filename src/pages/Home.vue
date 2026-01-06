<script setup lang="ts">
import { ref, computed } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

const weight = ref<number | null>(null)
const reps = ref<number | null>(null)
const oneRepMax = ref<number | null>(null)
const liftType = ref('Lifts')
const unit = ref('KG')

const liftOptions = ['Lifts', 'Deadlift', 'Squat', 'Bench Press']
const unitOptions = ['KG', 'lb']

// Percentages to display
const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]

// Formula Logic
const calculate1RM = () => {
  if (weight.value && reps.value) {
    if (reps.value === 1) {
      oneRepMax.value = weight.value
    } else {
      // Choose formula based on lift type
      if (liftType.value === 'Deadlift') {
           // Lombardi Formula: Weight * Reps^0.10
           oneRepMax.value = weight.value * Math.pow(reps.value, 0.10)
      } else if (liftType.value === 'Squat') {
          // Epley Formula: Weight * (1 + (0.0333 * Reps))
          oneRepMax.value = weight.value * (1 + (0.0333 * reps.value))
      } else {
          // Brzycki Formula (Default/Bench): Weight / (1.0278 - (0.0278 * Reps))
          oneRepMax.value = weight.value / (1.0278 - (0.0278 * reps.value))
      }
    }
  }
}

const formulaName = computed(() => {
    if (liftType.value === 'Deadlift') {
        return 'LOMBARDI'
    }
    if (liftType.value === 'Squat') {
        return 'EPLEY'
    }
    return 'BRZYCKI'
})


const breakdown = computed(() => {
  if (!oneRepMax.value) return []
  return percentages.map(p => {
    return {
      percentage: p,
      weight: Math.round((oneRepMax.value! * p) / 100),
      reps: estimateReps(p)
    }
  })
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

const buttonText = computed(() => {
    return oneRepMax.value ? 'Recalculate Max' : 'Calculate Max'
})

const faqs = [
  {
    question: "How accurate is this One Rep Max Calculator?",
    answer: "This calculator uses the widely respected Brzycki Formula. While it is one of the most accurate methods for estimating 1RM from sub-maximal efforts (especially under 10 reps), individual results can vary based on lifting experience, muscle fiber composition, and fatigue levels. Always treat this as an estimate."
  },
  {
    question: "Can I use this for any exercise?",
    answer: "Yes, but it works best for compound lifts like Squats, Bench Press, and Deadlifts. Isolation exercises (like bicep curls) may not scale as predictably with these formulas due to muscle fatigue setting in differently."
  },
  {
    question: "Is it safe to test my true 1RM?",
    answer: "Testing a true 1RM places different stress on the body than regular training. Ensure you have proper form, a spotter, and have warmed up thoroughly. For many, calculating an estimated 1RM using this tool is a safer alternative to testing a max effort lift."
  }
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black font-sans">
    <TheHeader />

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col items-center">
      
      <!-- Container for both cards -->
      <div class="w-full max-w-2xl flex flex-col gap-8 md:my-10 px-4 md:px-0">
          
          <!-- Calculator Section -->
          <div class="p-8 border-2 border-black bg-gray-50 shadow-none md:shadow-2xl">
            <div class="w-full space-y-10">
              <div class="space-y-2 text-center">
                <h2 class="text-4xl font-black uppercase leading-tight">Calculate Your {{ liftType === 'Lifts' ? 'Limits' : liftType }}</h2>
                <p class="text-gray-600 font-medium">Use the Brzycki formula to estimate your max strength.</p>
              </div>

              <div class="max-w-md mx-auto space-y-6">
                <!-- Lift Type Selector -->
                <div class="space-y-2">
                    <label for="liftType" class="block font-bold uppercase text-sm tracking-widest">Lift Type</label>
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

                <div class="space-y-2">
                    <label for="weight" class="block font-bold uppercase text-sm tracking-widest">Lift Weight</label>
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
                                class="bg-gray-100 font-black text-gray-500 hover:text-black border-none rounded-sm py-1 pl-2 pr-1 text-sm uppercase focus:ring-0 cursor-pointer"
                            >
                                <option v-for="opt in unitOptions" :key="opt" :value="opt">{{ opt }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="space-y-2">
                   <label for="reps" class="block font-bold uppercase text-sm tracking-widest">Repetitions</label>
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

          <!-- Results Section -->
          <div class="flex flex-col bg-white border-2 border-black shadow-none md:shadow-2xl relative min-h-[300px]">
            <!-- Abstract Pattern Background (SVG) -->
            <div class="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div v-if="oneRepMax" class="flex-1 flex flex-col relative z-0">
                <!-- 1RM Big Display -->
                <div class="flex-none p-10 border-b-2 border-black flex items-end justify-between bg-white">
                    <div>
                        <h3 class="font-bold uppercase text-black tracking-widest mb-2">Estimated One Rep Max</h3>
                        <div class="text-8xl md:text-9xl font-black leading-none tracking-tighter text-black">
                            {{ Math.round(oneRepMax) }}<span class="text-4xl text-black align-top ml-2">{{ unit }}</span>
                        </div>
                    </div>
                    <div class="text-right hidden sm:block">
                         <div class="text-sm font-bold uppercase text-gray-400">Analysis</div>
                         <div class="font-mono text-xs text-gray-500 mt-1">BASED ON {{ formulaName }}</div>
                    </div>
                </div>

                <!-- Table Container -->
                <div class="flex-1 overflow-x-auto p-0">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-black text-white">
                            <tr>
                                <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3">Percentage</th>
                                <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3">Weight ({{ unit }})</th>
                                <th class="p-4 font-bold uppercase tracking-widest text-sm w-1/3 text-right">Est. Reps</th>
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

            <!-- Empty State -->
            <div v-else class="flex-1 flex items-center justify-center p-10 text-center relative z-0">
                <div class="max-w-lg">
                    <div class="text-9xl font-black text-gray-100 mb-6 select-none opacity-50">1RM</div>
                    <h3 class="text-2xl font-bold uppercase mb-2">Ready to Calculate</h3>
                    <p class="text-gray-500">Enter your lift details above to generate your strength report.</p>
                </div>
            </div>
          </div>
      </div>

      <!-- Info Contents -->
      <div class="max-w-4xl mx-auto px-6 py-20 bg-white w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section>
                <h3 class="text-2xl font-black uppercase mb-4 border-l-4 border-black pl-4">What is One Rep Max?</h3>
                <p class="text-gray-700 leading-relaxed">
                    A One Rep Max (1RM) is the maximum amount of weight a person can possibly lift for one repetition of an exercise. 
                    It is the gold standard for measuring pure strength in exercises like the Squat, Bench Press, and Deadlift.
                </p>
            </section>

            <section>
                <h3 class="text-2xl font-black uppercase mb-4 border-l-4 border-black pl-4">Why Calculate It?</h3>
                <p class="text-gray-700 leading-relaxed">
                    Knowing your 1RM allows you to program your training effectively. Most strength programs prescribe weights based on a percentage of your 1RM (e.g., "Do 5 sets of 5 reps at 75% of 1RM").
                    Calculating it prevents you from training too light or too heavy.
                </p>
            </section>

             <section>
                <h3 class="text-2xl font-black uppercase mb-4 border-l-4 border-black pl-4">Who Is It For?</h3>
                <p class="text-gray-700 leading-relaxed">
                    This tool is essential for <strong>Powerlifters</strong>, <strong>Weightlifters</strong>, <strong>CrossFit athletes</strong>, and anyone serious about strength training.
                    Whether you are a beginner establishing a baseline or an advanced lifter planning a peaking block, knowing your numbers is key.
                </p>
            </section>

             <section>
                <h3 class="text-2xl font-black uppercase mb-4 border-l-4 border-black pl-4">How It Works</h3>
                <p class="text-gray-700 leading-relaxed">
                    Testing a true 1RM can be dangerous and fatiguing. This calculator uses the <strong>Brzycki Formula</strong> to <em>estimate</em> your max based on a weight you can lift for reps (e.g., 5 reps).
                    This allows you to gauge your strength safely without pushing to absolute failure.
                </p>
            </section>
        </div>

        <!-- FAQ Section -->
        <div class="mt-20">
            <h2 class="text-3xl font-black uppercase mb-10 text-center">Frequently Asked Questions</h2>
            <div class="space-y-6 max-w-3xl mx-auto">
                <div v-for="(faq, index) in faqs" :key="index" class="border-2 border-black p-6 rounded-lg bg-gray-50">
                    <h4 class="font-bold text-lg mb-2">{{ faq.question }}</h4>
                    <p class="text-gray-600">{{ faq.answer }}</p>
                </div>
            </div>
        </div>
      </div>
    </main>
    
    <TheFooter />
  </div>
</template>

<style scoped>
/* Custom scrollbar for webkit */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: white;
  border-left: 1px solid #eee;
}
::-webkit-scrollbar-thumb {
  background: black;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
