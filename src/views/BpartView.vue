<script lang="ts" setup>
const route = useRoute()
const store = useReminiStore()

// 放大縮小功能 
const src = ref<string>('null')
const panzoomRef = ref<HTMLElement | null>(null)
const range = ref<HTMLInputElement>(null)
const panzoom = ref<any>(null)
const isOpen = ref(false)
const myWidth = ref(null)
const nowWidth = ref(null)
const nowScale = ref(1)
onMounted(() => {
  src.value = route.query.image as string
  panzoom.value = usePanzoom(panzoomRef.value!)
  myWidth.value = useMyWindowSize().myWidth
})

const handleZoomIn = () => {
  panzoom.value.zoomIn()
  range.value.valueAsNumber = panzoom.value.getScale()
  nowWidth.value = panzoom.value.getPan().x
  nowScale.value = panzoom.value.getScale()
}

const handleZoomOut = () => {
  panzoom.value.zoomOut()
  range.value.valueAsNumber = panzoom.value.getScale()
  nowWidth.value = panzoom.value.getPan().x
  nowScale.value = panzoom.value.getScale()
}
const handleInput = (e) => {
  panzoom.value.zoom(e.target.valueAsNumber)
  nowWidth.value = panzoom.value.getPan().x
  nowScale.value = panzoom.value.getScale()
}
const handleChange = (e) => {
  panzoom.value.zoom(e.target.valueAsNumber)
  nowWidth.value = panzoom.value.getPan().x
  nowScale.value = panzoom.value.getScale()
}
const hasClick= (e) => {
  nowWidth.value = panzoom.value.getPan().x
  nowScale.value = panzoom.value.getScale()
}

// 滑桿功能
import { ref } from 'vue'
import { useElementSize, useDraggable,useElementBounding } from '@vueuse/core'
import DownloadButtom from '@/components/atoms/DownloadButtom.vue'
const el = ref(null)
const target = ref(null)
const { left, width, height }= useElementBounding(el)

const ScaleAdjustedWidth = computed(() => {
  return width.value * ( nowScale.value - 1 ) /2
})

const AdjustedWidth = computed(() => {
  return left.value + nowWidth.value * nowScale.value  - ScaleAdjustedWidth.value
})

const initialX = computed(() => {
  return myWidth.value / 2 + width.value/4
})

const elLine = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(elLine, {
  initialValue: { x: initialX , y: 64 },
  axis: 'x'
})

</script>


<template>
  <main class="main" relative box-border pt-16 w-full h-100vh font-sans>
    <DownloadButtom @click="isOpen = !isOpen" />

    <div ref="target" pt-4 flex flex-col justify-center items-center class="h-[90%] myContainer"  @click="hasClick()">
      <div
        ref="elLine"
        class="dragSvg"
        :style="style"
        fixed
        bg-red
        z-100
        w-auto
        h="75vh"
        cursor-pointer
      >
        <!-- <img
          src="../assets/svg4.svg"
          cursor-pointer
          absolute
          class="bottom-[20%] right-[-15px]"
          w-30px
          h-30px
        /> -->
        <button
          border-0
          rounded-3xl
          bg-black
          color-white
          py-2
          px-5
          absolute
          mx-5
          top-15
          class="right-55%"
        >
          before
        </button>
        <div class="line"></div>
        <button
          border-0
          rounded-3xl
          bg-black
          color-white
          py-2
          px-5
          absolute
          mx-5
          top-15
          class="left-45%"
        >
          after
        </button>
      </div>

      <div>
        <div ref="panzoomRef" class="frame wrapper">
          <img v-if="store.originImageURL" :src="store.originImageURL.value" alt="" class="img1" ref="el" />
          <img v-else src="../assets/demo.png" alt="" class="img1" ref="el" />

          <div class="wrapper frame "  :style="{ '--liner': (x - AdjustedWidth) / width / nowScale  * 100 + '%' }">
            <img
            v-if="store.filterImageURL !== null"
              class="img2 "
              :src="store.filterImageURL"
            />
            <img
            v-else
              class="img2"
              src="../assets/enhanced.jpg"
            />
            <img
              class="img2 "
              src="../assets/watermark.png"
            />
          </div>
        </div>
      </div>

      <div mt-6 flex justify-center content-center>
        <WButtom class="!text-3xl" bg-black color-white content="-" @click="handleZoomOut" />
        <input
          ref="range"
          @input="handleInput"
          @Change="handleChange"
          class="range-input"
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          defaultValue="1"
        />
        <WButtom class="!text-3xl" bg-black color-white content="+" @click="handleZoomIn" />
      </div>

      <div absolute bottom-10px left-50px w-auto h-20px color-white font-bold inline>
        <p inline text-lg text-color-zinc-400>Width: </p>
        <p inline>{{ Math.floor(width) }} px</p>
        &nbsp;
        <p inline text-lg text-color-zinc-400>Height: </p>
        <p inline>{{ Math.floor(height) }} px</p>
      </div>
    </div>
    <popOut v-if="isOpen" @action-close="isOpen = !isOpen" />
  </main>
</template>
<style>
.img2 {
  clip-path: inset(0 0 0 var(--liner));
}
.watermarked:after {
  clip-path: inset(0 0 0 var(--liner));
}

</style>