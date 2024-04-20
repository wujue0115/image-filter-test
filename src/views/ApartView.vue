<script lang="ts" setup>
const route = useRoute()

const src = ref<string>('null')
const panzoomRef = ref<HTMLElement | null>(null)
// const range = ref<HTMLInputElement>(null)
const panzoom = ref<any>(null)
const isOpen = ref(false)
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
  // console.log(e);
  panzoom.value.reset()
  panzoom.value.zoom(e.target.valueAsNumber)
}
const handleChange = (e) => {
  panzoom.value.reset()
  panzoom.value.zoom(e.target.valueAsNumber)
}
const handleClick = () => {
  console.log('handleClick')
}

const ratio = ref(0.3)

onMounted(() => {
  // setInterval(() => {
  //   ratio.value = Math.random()
  // }, 1000)
})

const handleUpdateRatio = (ratio) => {
  console.log('update', ratio)
}
</script>

<template>
  <main class="main" relative box-border pt-16 w-full h-100vh font-sans>
    <WButtom
      absolute
      top-5
      right-5
      mx-2
      content="Download"
      bg-pink-500
      color-white
      @click="isOpen = !isOpen"
    />

    <div h-screen pt-4 flex flex-col sjustify-center items-center>
      <div class="max-h-[70%] max-w-[50%] h-[70%] w-[60%]" border="1px solid white">
        <div ref="panzoomRef" aspect="[3/2]" w-300px>
          <!-- <img src="../assets/demo.png" alt="" w-full h-auto object-cover /> -->
          <div w-full h-full bg-red>
            <WDivideSlide :ratio="ratio" w-full h-full @updateRatio="handleUpdateRatio">
              <template #before>
                <img src="../assets/demo.png" alt="" w-full h-full object-cover object-left />
              </template>
              <template #after>
                <img src="../assets/home.jpg" alt="" w-full h-full object-cover object-right />
              </template>
            </WDivideSlide>
          </div>
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
        />
        <WButtom mx-2 content="+" @click="handleZoomIn" />
      </div>
    </div>
    <popOut v-if="isOpen" @action-close="isOpen = !isOpen" />
  </main>
</template>
