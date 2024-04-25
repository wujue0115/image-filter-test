<script lang="ts" setup>
const route = useRoute()

// 放大縮小功能 
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


// 滑桿功能
import { ref } from 'vue'
import { useElementSize, useMouseInElement } from '@vueuse/core'
const target = ref(null)
const mouse = reactive(useMouseInElement(target))
const el = ref(null)
// const el2 = ref(null)

const { width, height, elementPositionX } = useElementSize(el)
const {  isOutside, elementX } = useMouseInElement(target)

const elLine = ref<HTMLElement | null>(null)
  import { useDraggable } from '@vueuse/core'
// const elLine = ref<HTMLElement | null>(null)
// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(elLine, {
  initialValue: { x: 600, y:64 },
})

console.log(width);

watch(x, (newValue,oldValue)=>{
  let halfX = ref(width.value/2 + elementPositionX.value)
  console.log(halfX.value);
  console.log(elementX.value);
  console.log(width);
  console.log(elementPositionX.value);
  
  
  
  if( x.value < halfX.value ){
    isOpen.value = true
    x.value = 600
}else{
  console.log("not");
  
}
})
// if( mouse.isOutside){
//   console.log("isOutside");
  
  
// }

// container.useEventListener("mouseenter", () => {
//   container.useEventListener("mousemove", moveLine);
// })

// container.useEventListener("mouseleave", () => {
//   line.style.cursor = "default";
//   container.removeEventListener("mousemove", moveLine);
// })
</script>

<template>
  <main class="main" relative box-border pt-16 w-full h-100vh font-sans>
    <DownloadButtom  @click="isOpen = !isOpen"/>
      
  <div pt-4 flex flex-col justify-center items-center class=" h-[90%] myContainer" ref="target" >
    <div ref="elLine"  :style="style" fixed bg-red z-100  w-auto h="75vh">
      <img src="../assets/svg4.svg" absolute class="bottom-[20%] right-[-15px]" w-30px h-30px >
      <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute mx-5 top-15 class="right-55%">before</button>
      <!-- <hr width="1px" h-full/> -->
      <div class="line"></div>
      <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute mx-5 top-15 class="left-45%">after</button>
    </div>
    <div>
      
      <div ref="panzoomRef" class="frame wrapper">
        <img src="../assets/demo.png" alt="" class="img1"  ref="el"  />
       
        <!-- <div class="line" :style="{left: x - width/2 + 'px', transform: `translateX(${width}px)`}"></div> -->
        <div class="wrapper frame" >
        <img class="img2 !left-auto" src="../assets/demo.png" :style="{transform: `translateX(${-width/2}px)` ,width: width - x + width/2 + 120 +'px' , maxWidth: width + 'px'}"> 
          
        </div>
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
    defaultValue="1"
  />
  <WButtom class="!text-3xl" bg-black color-white content="+" @click="handleZoomIn" />
</div>

  <div  absolute bottom-10px left-10px bg-red w-auto h-20px>
    <!-- <h1>Hello world {{ x }} {{ y }}
      {{ isOutside }}</h1> -->
      <p>  width: {{  width }}
      
        height: {{  height }}  
  
        {{ isOutside }}
        {{ elementX }}
      </p>

</div>
  </div>
  <popOut v-if="isOpen"    @action-close="isOpen = !isOpen"/>
</main>
</template>
<style>
.myContainer {
  position: relative;
 
  user-select: none;
  border-radius: 5px;
  overflow: hidden;
}

.line {
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  left: 30%;
  background: #fff;
  cursor: pointer;
}

.wrapper {
  img {
    position: absolute;
    height: 100%;
    object-fit: cover;
  }
}

.img1 {
  width: 30%;
  object-position: left;
}

.img2 {
  object-position:center;
  object-fit: contain;
}
</style>