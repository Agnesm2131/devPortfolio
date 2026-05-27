import 'server-only'

const dictionaries = {
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
  us: () => import('@/dictionaries/us.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'tr' | 'us') => dictionaries[locale]()