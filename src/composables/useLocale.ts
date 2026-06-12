import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { translations, locales, type Locale } from '../i18n/translations'

const pathToLocale: Record<string, Locale> = {
  '/': 'en',
  '/zh-CN': 'zh-CN',
  '/ko': 'ko',
  '/ja': 'ja',
  '/de': 'de',
  '/fr': 'fr',
  '/es': 'es',
}

export function useLocale() {
  const route = useRoute()

  const locale = computed<Locale>(() => pathToLocale[route.path] ?? 'en')
  const t = computed(() => translations[locale.value])
  const localeInfo = computed(() => locales[locale.value])

  return { locale, t, localeInfo, locales }
}
