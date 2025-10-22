<template>
  <UContainer>
    <div class="grid min-h-screen grid-cols-12 gap-2">
      <nav class="col-span-4 bg-neutral-100 p-4 dark:bg-neutral-800">
        <h2 class="mb-4 text-2xl font-bold">Chapters</h2>
        <CoursesNav />
      </nav>

      <main class="col-span-8 bg-neutral-100 p-4 text-lg dark:bg-neutral-800">
        <h2 class="mb-4 text-2xl font-bold">Lessons</h2>
        <NuxtPage />
      </main>
    </div>
  </UContainer>
</template>

<script setup></script>
