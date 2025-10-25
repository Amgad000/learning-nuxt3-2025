<template>
  <UContainer>
    <h2 class="text-primary-600 text-4xl">
      this is {{ $route.params.courseName }} course
    </h2>
    <div class="grid min-h-screen grid-cols-12 gap-2">
      <nav class="col-span-4 bg-neutral-100 p-4 dark:bg-neutral-800">
        <h2 class="mb-4 text-2xl font-bold">Chapters</h2>
        <ul>
          <li
            class="text-xl"
            v-for="chapter in specificCourse.chapters"
            :key="chapter.id"
          >
            {{ `${chapter.id}: ${chapter.title}` }}
            <ul>
              <NuxtLink
                class="hover:bg-accented my-2.5 block px-4 text-base"
                v-for="lesson in chapter.lessons"
                :key="lesson.id"
                :to="`/courses/${specificCourse.url}/chapters/${chapter.id}/lessons/${lesson.id}`"
              >
                {{ lesson.id }}. {{ lesson.title }}
              </NuxtLink>
            </ul>
          </li>
        </ul>
      </nav>

      <main class="col-span-8 bg-neutral-100 p-4 text-lg dark:bg-neutral-800">
        <!-- only in course overview page using $route.params. -->
        <div v-if="!$route.params.chapterSlug">
          <h2 class="mb-4 text-2xl font-bold">
            an Overview of {{ specificCourse.title }}
          </h2>
          <p>{{ specificCourse.description }}</p>
        </div>

        <NuxtPage />
      </main>
    </div>
  </UContainer>
</template>

<script setup>
const route = useRoute()
const courseName = route.params.courseName
const specificCourse = useSpecificCourse(courseName)
</script>
