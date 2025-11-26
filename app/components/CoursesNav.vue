<script setup>
const items = ref([
  [
    {
      label: 'menu',
      type: 'label',
    },
    {
      label: 'Guide',
      icon: 'i-ph-book-open',
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      //   to: '/docs/components',
      //   active: true,
      //   defaultOpen: true,
    },
  ],
  [
    {
      label: 'User',
      icon: 'i-lucide-user',
      badge: '3.8k',
      to: '/login',
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true,
    },
  ],
])
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-48"
    :ui="{
      separator: 'bg-neutral-200 dark:bg-neutral-700 my-1.5',
      link: 'cursor-pointer',
    }"
  />
</template>
