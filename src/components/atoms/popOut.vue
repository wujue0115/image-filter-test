<script setup lang="ts">
import okSvg from './okSvg.vue'

const isPro = ref(true)
const isClick = ref(null)
</script>

<template>
  <div text-white z-999 absolute right-0 left-0 top-0 bottom-0 class="bg-slate-300/50" >
    <div w-full h-full flex flex-row justify-center items-center>
      <div  flex flex-row justify-center items-center bg-white rounded-3xl >
        <div relative class="myImg" h-95vh w-350px  overflow-hidden rounded-l-3xl :class="{ 'isProBg': isPro}">
          <svg
            @click="$emit('actionClose')"
            absolute
            top-5
            left-5
            cursor-pointer
            z-10
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            between
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <!-- <img src="/src/assets/afterE.png" w-300px min-h-96> -->
        </div>

        <div flex flex-col  pt-5 mx-5 >
          <div m-auto w="80%" px-15>
            <div class="flex flex-row">
              <div
                border="3 solid #B8B8B8"
                transition-shadow
                duration-1000
                z-10
                cursor-pointer
                w-40
                p-1
                text-center
                rounded-3xl
                color-black
                @click="isPro = !isPro"
                :class="{ 'bg-[#B8B8B8] color-white': isPro }"
              >
                PRO
              </div>
              <div
                border="3 solid #B8B8B8"
                transition-shadow
                duration-1000
                translate-x--5
                cursor-pointer
                w-40
                p-1
                text-center
                rounded-3xl
                color-black
                @click="isPro = !isPro"
                :class="{ 'bg-[#B8B8B8] color-white z-10 ': !isPro }"
              >
                LITE
              </div>
            </div>
          </div>
          <div my-2   text-color-black w="80%"  mx-15 >
            <div flex items-center justify-between py-0.5>
              <p>無限的照片修復</p>
              <p><okSvg /></p>
            </div>
            <hr class="w-full" m-auto />
            <div flex items-center justify-between py-0.5>
              <p>無限使用 AI 照片與濾鏡</p>
              <p><okSvg /></p>
            </div>
            <hr class="w-full" m-auto />
            <div flex items-center justify-between py-0.5>
              <p>去除廣告</p>
              <p><okSvg /></p>
            </div>
            <hr class="w-full" m-auto />

            <div flex items-center justify-between py-0.5>
              <p :class="{ 'text-color-[#B8B8B8]': !isPro}">可在 PC 上使用</p>
              <p v-if="isPro"><okSvg /></p>
              <p v-else><lockSvg /></p>
            </div>
            <hr class="w-full" m-auto />

            <div flex items-center justify-between py-0.5>
              <p :class="{ 'text-color-[#B8B8B8]': !isPro}">無限的影片畫質修復</p>
              <p v-if="isPro"><okSvg /></p>
              <p v-else><lockSvg /></p>
            </div>
            <hr class="w-full" m-auto />
            <div flex items-center justify-between py-0.5>
              <p :class="{ 'text-color-[#B8B8B8]': !isPro}">多版本的修復結果</p>
              <p v-if="isPro"><okSvg /></p>
              <p v-else><lockSvg /></p>
            </div>
            <hr class="w-full" m-auto />
            <div flex items-center justify-between py-0.5>
              <p :class="{ 'text-color-[#B8B8B8]': !isPro}">色調調整</p>
              <p v-if="isPro"><okSvg /></p>
              <p v-else><lockSvg /></p>
            </div>
            <hr class="w-full" m-auto />

            <div flex items-center justify-between py-0.5>
              <p :class="{ 'text-color-[#B8B8B8]': !isPro}">背景模糊 / 增強</p>
              <p v-if="isPro"><okSvg /></p>
              <p v-else><lockSvg /></p>
            </div>
            <hr class="w-full" m-auto />
          </div>
          <div px-5 my-3 flex flex-col justify-center items-center text-black text-xs>
            <div @click="isClick = '1'" cursor-pointer hover:border-color-black :class="{ '!border-color-black': isClick == '1' }" mb-3 v-if="!isPro" w-full p-3 rounded-full border="2px solid #ddd" flex flex-row justify-between> <p font-black> 每年 | <span class="text-color-gray-500 text-xs">$1,190.00</span></p> <p>只要 <span>$22.88 / 週</span></p> </div>

            <div @click="isClick = '2'" cursor-pointer hover:border-color-black :class="{ '!border-color-black': isClick === '2' }"  mb-3   v-else w-full p-3 rounded-full border="2px solid #ddd" flex flex-row justify-between> <p font-black> 每年 | <span class="text-color-gray-500 text-xs">$2,590.00</span></p> <p>只要 <span>$49.81 / 週</span></p> </div>

           

            <div  @click="isClick = '3'"  cursor-pointer hover:border-color-black :class="{ '!border-color-black': isClick === '3' }" v-if="!isPro"  w-full p-3 rounded-full border="2px solid #ddd" flex flex-row justify-between> <p font-black> 每週 | <span class="text-color-gray-500 text-xs">$150.00</span></p> <p>只要 <span>$150 / 週</span></p> </div>

            <div  @click="isClick = '4'"  cursor-pointer hover:border-color-black  :class="{ '!border-color-black': isClick === '4' }" v-else  w-full p-3 rounded-full border="2px solid #ddd" flex flex-row justify-between> <p font-black> 每週 | <span class="text-color-gray-500 text-xs">$320.00</span></p> <p>只要 <span>$320 / 週</span></p> </div>
          </div>

          <!-- <div m-2 flex flex-col justify-center items-center v-else>
              <img src="../assets/ProYear.png"  max-w-md btn-base bg-white alt="" />
              <img src="../assets/ProMonth.png" max-w-md  btn-base bg-white alt="" />
            </div> -->
          <div  mb-5 mt-2 flex justify-around>
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
              class="bg-[#B8B8B8]"
            ></WButtom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.myImg{
  background-image:url('/src/assets/LITE.png');
  background-size: cover;
  background-position: left bottom;
}
.isProBg {
  background-image:url('/src/assets/PRO.png');
  background-size: cover;
  background-position: left bottom;
}

</style>
