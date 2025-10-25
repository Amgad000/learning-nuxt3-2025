<template>
  <div>
    <h2 class="test my-8 text-center text-3xl font-semibold">
      Here are all of my courses
    </h2>
    <UPageGrid>
      <UPageCard
        v-for="(course, index) in courses"
        :key="index"
        :title="course.title"
        :description="course.description"
        :icon="course.icon"
        :to="`/courses/${course.url}`"
        variant="subtle"
      />
    </UPageGrid>
  </div>
</template>

<script setup>
// ~ and @ to app
// ~~ and @@ to root dir
const courses = useCourses()
</script>
