<script setup lang="ts">
const isPro = ref(true)
const handleClick =  (type) => {
  router.push({
    name: 'Home',
    params: name
})

}
</script>

<template>
  <main class="main" relative box-border w-full h-100vh bg-black font-sans>
    <div flex h-full text-white>
      <div flex flex-col justify-center items-center box-border w-full h-full>
        <div rounded-3xl bg-white>
          <div  relative class="myImg"  w-530px  min-h-52 >
            <svg
              absolute
              top-2
              left-2
              cursor-pointer
              z-10
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          
            <div absolute top-0 class="left-50%" w-3px h-full bg-white></div>
            <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute top-5 class="right-55%">before</button>
            <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute top-5 class="left-55%">after</button>
            <!-- <img src="../assets/endBg.png"  rounded-t-3xl  max-h-48  object-contain  alt="" /> -->
          </div>

          <div flex flex-col m-3>
            <div m-auto>
              <div class="flex flex-row">
                <div  border="3 solid #a1a1aa" transition-shadow duration-1000  z-10  cursor-pointer w-40 p-1 text-center rounded-3xl color-black   @click="isPro = !isPro" :class="{ 'bg-slate-400 color-white': isPro }">PRO</div>
                <div  border="3 solid #a1a1aa" transition-shadow duration-1000 translate-x--5 cursor-pointer w-40 p-1 text-center  rounded-3xl  color-black    @click="isPro = !isPro" :class="{ 'bg-slate-400  color-white z-10 ': !isPro }">LITE</div>
              </div>
            
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.myImg{
  background-position: center top;
  background-size: cover;
  background-image: url( ../assets/endBg.png);

}
</style>
