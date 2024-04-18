<script lang="ts" setup>
const route = useRoute()

const src = ref<string>('')
const panzoomRef = ref<HTMLElement | null>(null)
const panzoom = ref<any>(null)

onMounted(() => {
  console.log(route.query)

  src.value = route.query.image as string

  panzoom.value = usePanzoom(panzoomRef.value!)
})

const handleZoomIn = () => {
  panzoom.value.zoomIn()
}

const handleZoomOut = () => {
  panzoom.value.zoomOut()
}
</script>

<template>
  <div h-screen pt-16 flex flex-col sjustify-center items-center>
    <div w="[50%]" h="[50%]" border="1px solid white">
      <div ref="panzoomRef" w-30 h-30>
        <img :src="src" alt="" w-full h-full object-cover />
      </div>
    </div>

    <WButtom mt-6 content="Zoom In" @click="handleZoomIn" />
    <WButtom mt-6 content="Zoom Out" @click="handleZoomOut" />
  </div>
</template>
