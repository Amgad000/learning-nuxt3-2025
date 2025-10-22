<template>
  <div>
    <p class="py-1 text-xl font-bold">Welcome to the Course Page</p>
    <p>This is the main content area.</p>
    <p class="mt-2 font-mono italic">
      chapter: {{ $route.params.chapterSlug }}
    </p>
    <p class="font-mono italic">lesson: {{ $route.params.lessonSlug }}</p>
  </div>
</template>

<script setup></script>
