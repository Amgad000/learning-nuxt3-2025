<template>
  <div class="flex h-lvh flex-col items-center justify-center">
    <h1 class="mb-4 text-4xl">Dang!</h1>
    <h1 class="text-8xl">{{ error.statusCode }}</h1>
    <p>{{ error.message ? error.message : 'this router does not exist' }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['error'])
</script>
