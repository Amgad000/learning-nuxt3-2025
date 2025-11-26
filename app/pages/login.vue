<template>
  <div
    class="flex h-[calc(100vh-var(--ui-header-height))] flex-col items-center justify-center"
  >
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Login"
        description="Log in to access your account."
        icon="i-lucide-user"
        :providers="providers"
      />
    </UPageCard>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    return navigateTo('/')
  }
})

const providers = [
  {
    label: 'GitHub',
    icon: 'i-ph-github-logo-bold',
    onClick: () => {
      supabase.auth.signInWithOAuth({
        provider: 'github',
      })
    },
    variant: 'outline',
    class: 'cursor-pointer',
  },
]
</script>
