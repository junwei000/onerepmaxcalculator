<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'One Rep Max Calculator | Push Your Limits Safely',
  meta: [
    {
      name: 'description',
      content: 'Calculate your One Rep Max (1RM) instantly with the most accurate Brzycki formula. Strength standards, percentage breakdowns, and more.'
    },
    {
      name: 'keywords',
      content: '1rm calculator, one rep max, brzycki formula, strength calculator, powerlifting, weightlifting'
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
