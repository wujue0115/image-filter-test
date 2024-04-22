<script lang="ts" setup>
const route = useRoute()

const src = ref<string>('null')
const panzoomRef = ref<HTMLElement | null>(null)
const range = ref<HTMLInputElement>(null)
const panzoom = ref<any>(null)
const isOpen = ref(false)
onMounted(() => {
  console.log(route.query)

  src.value = route.query.image as string

  panzoom.value = usePanzoom(panzoomRef.value!)

  
})

const handleZoomIn = () => {
  panzoom.value.zoomIn()
  // console.log(panzoom.value.getScale());
  range.value.valueAsNumber = panzoom.value.getScale()
}

const handleZoomOut = () => {
  panzoom.value.zoomOut()
  // range.value.current = panzoom.getScale() + ''
  range.value.valueAsNumber = panzoom.value.getScale()
}
const handleInput = (e) => {
  // console.log(e);
  // panzoom.value.reset()
  panzoom.value.zoom(e.target.valueAsNumber)
}
const handleChange = (e) => {
  // panzoom.value.reset()
  panzoom.value.zoom(e.target.valueAsNumber)
}
const handleClick =  () => {
 console.log("handleClick");
}
</script>

<template>
  <main class="main" relative box-border pt-16 w-full h-100vh font-sans>
      <WButtom absolute top-5 right-5 mx-2 content="Download" bg-pink-500 color-white @click="isOpen = !isOpen"/>
    
  <div h-screen pt-4 flex flex-col sjustify-center items-center>
    <div class="h-[60%] w-[50%]">
      <div ref="panzoomRef" m-auto>
        <img src="../assets/demo.png" alt="" w-full h-auto object-cover  />
      </div>
    </div>

    <div mt-6 flex justify-center content-center>
    <WButtom class="!text-3xl"  bg-black color-white content="-" @click="handleZoomOut" />
    <input
    ref="range"
    @input="handleInput"
    @Change="handleChange"
    class="range-input"
    type="range"
    min="0.1"
    max="5"
    step="0.1"
    
  />
  <WButtom class="!text-3xl" bg-black color-white content="+" @click="handleZoomIn" />
</div>
  </div>
  <popOut v-if="isOpen"    @action-close="isOpen = !isOpen"/>
</main>
</template>
