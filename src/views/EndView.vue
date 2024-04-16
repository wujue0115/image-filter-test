<script setup lang="ts">
const isPro = ref(true)
</script>

<template>
  <main class="main" relative box-border w-full h-100vh bg-black>
    <div flex h-full text-white>
      <div flex flex-col justify-center items-center box-border w-full h-full>
        <div rounded-3xl bg-white>
          <div object-cover relative>
            <svg
              absolute
              top-2
              left-2
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <img src="../assets/endBg.png" rounded-t-3xl max-w-lg alt="" />
          </div>

          <div flex flex-col m-3>
            <div m-auto>
              <div class="flex flex-row">
                <div  border="3 solid #ddd" cursor-pointer w-40 p-1 text-center rounded-3xl color-black   @click="isPro = !isPro" :class="{ 'bg-gray-500 color-white': isPro }">PRO</div>
                <div  border="3 solid #ddd" cursor-pointer w-40 p-1 text-center  rounded-3xl  color-black rounded-l-xl  border-l-transparent @click="isPro = !isPro" :class="{ 'bg-gray-500  color-white': !isPro }">LITE</div>
              </div>
            
            </div>
            <div m-2 flex flex-col justify-center items-center >
              <img v-if="isPro" src="../assets/LiteYear.png"  max-w-md btn-base bg-white alt="" />
              <img v-else src="../assets/ProYear.png"  max-w-md btn-base bg-white alt="" />
              <img v-if="isPro" src="../assets/LiteMonth.png" max-w-md  btn-base bg-white alt="" />
              <img v-else src="../assets/ProMonth.png" max-w-md  btn-base bg-white alt="" />
            </div>
            <!-- <div m-2 flex flex-col justify-center items-center v-else>
              <img src="../assets/ProYear.png"  max-w-md btn-base bg-white alt="" />
              <img src="../assets/ProMonth.png" max-w-md  btn-base bg-white alt="" />
            </div> -->
            <div p-3 flex justify-around>
              <WButtom
                :content="'繼續'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                bg-black
              ></WButtom>
              <WButtom
                :content="'下次再說'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                bg-gray-500
              ></WButtom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
