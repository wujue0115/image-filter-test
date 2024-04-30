<script setup lang="ts">
import { ref } from 'vue'
const myWidth = ref(null)
const isOpen = ref(false)
onMounted(() => {
  myWidth.value = useMyWindowSize(myWidth)
})
// 滑桿功能
import { useDraggable } from '@vueuse/core'
const target = ref(null)
const elLine = ref<HTMLElement | null>(null)
const initialX = computed(() => {
  return myWidth.value / 2
})
const { x, y, style } = useDraggable(elLine, {
  initialValue: { x: initialX, y: 30 }
})
const AdjustedWidth = computed(() => {
  return (myWidth.value - 384)/2
})
</script>

<template>
  <main class="main" relative box-border w-full h-100vh bg-black font-sans>
    <div flex flex-col justify-center items-center box-border w-auto h-full>
      <div rounded-2xl bg-white>
        <div
          ref="target"
          relative
          class="EpartImg h-88 w-96"
          :style="{ '--liner': (x - AdjustedWidth) / 384 * 100 + '%' }">
          <div
            ref="elLine"
            class="!top-58px"
            :style="style"
            fixed
            bg-red
            z-100
            w-auto
            h="65vh"
            cursor-pointer
          >
            <img
              src="../assets/svg4.svg"
              cursor-pointer
              absolute
              class="bottom-[20%] right-[-15px]"
              w-30px
              h-30px
            />
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
        </div>

        <div flex flex-col m-3>
          <div p-3 flex justify-around>
            <WButtom
              :content="'立即解鎖'"
              @click="isOpen = !isOpen"
              type
              w="80px"
              text-center
              bg-black
              color-white
            ></WButtom>
          </div>
        </div>
      </div>
      <popOut v-if="isOpen" @action-close="isOpen = !isOpen" />
    </div>
  </main>
</template>

<style scoped>
.EpartImg:before,
.EpartImg:after {
  background-position: 50% 20%;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/beforeE.png);
  background-size: cover;
}
.EpartImg:before {
  background-image: url(../assets/beforeE.png);
}
.EpartImg:after {
  background-image: url(../assets/afterE.png);
}
.EpartImg::after {
  clip-path: inset(0 0 0 var(--liner));
}
img.img2 {
  object-position: right;
  object-fit: cover;
  object-position: center;
}
</style>
