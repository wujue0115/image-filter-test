<script setup lang="ts">
const isPro = ref(true)
</script>

<template>
  <main class="main" relative box-border w-full h-100vh bg-black font-sans>
    <div flex h-full text-white>
      <div flex flex-col justify-center items-center box-border w-full h-full>
        <div rounded-3xl bg-white>
          <div  relative class="myImg"  w-530px  min-h-52 >
           
          
            <div absolute top-0 class="left-50%" w-3px h-full bg-white></div>
            <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute top-5 class="right-55%">before</button>
            <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute top-5 class="left-55%">after</button>
            <!-- <img src="../assets/endBg.png"  rounded-t-3xl  max-h-48  object-contain  alt="" /> -->
          </div>

          <div flex flex-col m-3>
            <div p-3 flex justify-around>
             
              <WButtom
                :content="'立即解鎖'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                bg-black
              ></WButtom>
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
