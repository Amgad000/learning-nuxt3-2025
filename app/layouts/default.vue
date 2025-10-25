<template>
  <div>
    <UHeader>
      <template #title>
        <h1
          class="text-primary drop-shadow-primary-200 dark:drop-shadow-primary-700 text-3xl font-bold tracking-wide drop-shadow-lg"
        >
          Coursaty
        </h1>
      </template>

      <UNavigationMenu variant="link" :items="items" />

      <template #right>
        <UColorModeButton class="cursor-pointer" />

        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/nuxt/ui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </template>
    </UHeader>

    <UContainer>
      <slot />
    </UContainer>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: 'Our Courses',
    to: '/courses',
    active: route.path.startsWith('/courses'),
  },
])
</script>
