import type { Tab } from '../types'

export const tabs: Tab[] = [
  {
    segment: undefined,
    href: '.',
    title: 'home',
    prefetch: false,
  },
  {
    segment: 'about',
    href: 'about',
    title: 'about',
    prefetch: false,
  },
  {
    segment: 'blog',
    href: 'blog',
    title: 'blog',
    prefetch: true,
  },
]