<template>
  <div>
    <p class="py-1 text-xl font-bold">
      Welcome to Lesson {{ lesson.id }}: {{ lesson.title }}
    </p>
    <p>This is the main content area.</p>
    <p class="mt-2 font-mono text-2xl italic">
      chapter: {{ `${chapter.id}) ${chapter.title}` }}
    </p>
    <p class="font-mono text-2xl italic">lesson: {{ lesson.title }}</p>
    <span class="mt-4 block text-sm text-gray-500">
      (This page is located at {{ $route.path }})
    </span>
  </div>
</template>

<script setup>
const specificCourse = useSpecificCourse(useRoute().params.courseName)

let chapter = specificCourse.chapters.find(
  el => el.id == useRoute().params.chapterSlug
)
let lesson = chapter.lessons.find(el => el.id == useRoute().params.lessonSlug)

definePageMeta({
  middleware: function ({ params }, from) {
    const specificCourse = useSpecificCourse(params.courseName)

    let chapter = specificCourse.chapters.find(
      el => el.id == params.chapterSlug
    )
    if (!chapter) {
      return abortNavigation(
        createError({
          statusCode: '404',
          message: 'this chapter does not exist',
        })
      )
    }

    let lesson = chapter.lessons.find(el => el.id == params.lessonSlug)
    if (!lesson) {
      return abortNavigation(
        createError({
          statusCode: '404',
          message: 'this Lesson does not exist',
        })
      )
    }
  },
})
</script>
