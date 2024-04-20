<script lang="ts" setup>
// const props = defineProps<{
//   ratio: string | number
// }>()

// const normalizeRatio = (ratio: string | number): number => {
//   if (typeof ratio === 'string') {
//     const [a, b] = ratio.split('/').map(Number)
//     return a / (a + b)
//   }
//   return ratio
// }

// const ratio = computed(() => normalizeRatio(props.ratio))
const ratio = ref(0.3)
onMounted(() => {
  setInterval(() => {
    ratio.value = Math.random()
  }, 1000)
})

const beforeWidth = computed(() => {
  return Math.round(ratio.value * 100)
})

const afterWidth = computed(() => {
  return 100 - beforeWidth.value
})

const emits = defineEmits(['updateRatio'])

watch(ratio, () => {
  console.log(beforeWidth.value, afterWidth.value)

  emits('updateRatio', ratio.value)
})
</script>

<template>
  <div relative>
    <div absolute left-0 inset-y-0 duration-100 :style="{ width: `${beforeWidth}%` }">
      <slot name="before"></slot>
    </div>
    <div absolute right-0 inset-y-0 duration-100 :style="{ width: `${afterWidth}%` }">
      <slot name="after"></slot>
    </div>
  </div>
</template>
