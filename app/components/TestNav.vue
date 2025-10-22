<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      // to: '/docs/getting-started',
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      // to: '/docs/composables',
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      // to: '/docs/components',
      active: true,
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      // to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
  ],
])
</script>

<template>
  <UNavigationMenu
    color="neutral"
    variant="link"
    :items="items"
    orientation="vertical"
    class="w-1/2"
    :ui="{
      separator: 'bg-neutral-200 dark:bg-neutral-800',
      link: 'cursor-pointer',
    }"
  />
</template>
