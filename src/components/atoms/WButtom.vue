<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()

const { content } = toRefs(props)
</script>

<template>
  <div text-lg btn-base>{{ content }}</div>
</template>
