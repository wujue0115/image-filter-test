<script lang="ts" setup>
const route = useRoute()

const src = ref<string>('null')
const panzoomRef = ref<HTMLElement | null>(null)
  // const range = ref<HTMLInputElement>(null)
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
const handleInput = (e) => {
  console.log(e);
  
  panzoom.value.zoom(e.target.valueAsNumber)
}
const handleChange = (e) => {
  panzoom.value.zoom(e.target.valueAsNumber)
}
</script>

<template>
  <div h-screen pt-16 flex flex-col sjustify-center items-center>
    <div class="max-h-[70%] max-w-[50%]">
      <div ref="panzoomRef" m-auto>
        <img src="../assets/demo.png" alt="" w-full h-auto object-cover  />
      </div>
    </div>

    <div mt-6 flex justify-center content-center>
    <WButtom mx-2 content="-" @click="handleZoomOut" />
    <input
    ref="panzoom"
    @input="handleInput"
    @Change="handleChange"
    class="range-input"
    type="range"
    min="0.1"
    max="5"
    step="0.1"
    defaultValue="1"
  />
  <WButtom mx-2 content="+" @click="handleZoomIn" />
</div>
  </div>
</template>
