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
const el2 = ref(null)

const { width, height } = useElementSize(el)
const { width2, height2 } = useElementSize(el2)
const { x, y, isOutside, elementX } = useMouseInElement(target)

const myContainer = document.querySelector(".myContainer");
const line = document.querySelector(".line");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const getMousePosition = (event, target) => {
  let targetElement = event.target;
  let offsetTop = 0;
  let offsetLeft = 0;

  while (targetElement !== target) {
    offsetTop += targetElement.offsetTop;
    offsetLeft += targetElement.offsetLeft;
    while (targetElement !== target) {
      targetElement = targetElement.parentElement;
      if (
        window
        .getComputedStyle(targetElement)
        .getPropertyValue("position") !== "static"
      ) {
        break;
      }
    }
  }

  return { x: event.offsetX + offsetLeft, y: event.offsetY + offsetTop };
}

const moveLine = (e) => {
  let { x } = getMousePosition(e, myContainer);
  
  const halfLine = (line.offsetWidth >> 1);
  
  x = Math.max(Math.min(x, myContainer.offsetWidth - halfLine), halfLine);

  line.style.cursor = "none";
  line.style.left = x - halfLine + "px";
  
  const left = x;
  const right = myContainer.offsetWidth - left;
  
  img1.style.width = left + "px";
  img2.style.width = right + "px";
  console.log("hello");
  
}

console.log(width);

watch(mouse, (newValue,oldValue)=>{
  // if(mouse.isOutside){
    //   console.log("helllo");
   
    
  // }
  
  let halfX = ref(width.value * 1/2)
  if(mouse.x > halfX.value){
  console.log("halfx");
  // const left = x;
  // const right = x - left;
  // img1.style.width = left + "px";
  // img2.style.width = right + "px";
}else{
  console.log("not");
  
}
})
if( mouse.isOutside){
  console.log("isOutside");
  moveLine
  
  
}

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
      <WButtom absolute top-5 right-5 mx-2 content="Download" bg-pink-500 color-white @click="isOpen = !isOpen"/>

  <div pt-4 flex flex-col justify-center items-center class=" h-[90%] myContainer" ref="target el2" >
    <div>
      <div ref="panzoomRef" class="frame wrapper">
        <img src="../assets/demo.png" alt="" class="img1"  ref="el"  />
        <div class="line" :style="{left: x - width/2 + 'px', transform: `translateX(${width}px)`}"></div>
        <div class="wrapper frame" >
          <img class="img2 !left-auto" src="../assets/demo.png" :style="{transform: `translateX(${-width/2}px)` ,width: width - x  + 'px' }" >
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
      
        x: {{ x }}
        y: {{ y }}
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
  object-position: left;
}
</style>