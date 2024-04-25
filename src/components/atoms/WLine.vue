<script lang="ts" setup>

import { useDraggable } from '@vueuse/core'
const el = ref<HTMLElement | null>(null)
// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 600, y:64 },
})
</script>

<template>
  <div ref="el"  :style="style" fixed bg-red z-100  w-auto h="75vh">
    <img src="../../assets/svg4.svg" absolute class="bottom-[20%] right-[-15px]" w-30px h-30px >
    <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute mx-5 top-15 class="right-55%">before</button>
    <!-- <hr width="1px" h-full/> -->
    <div class="line"></div>
    <button border-0 rounded-3xl bg-black color-white py-2 px-5 absolute mx-5 top-15 class="left-45%">after</button>
  </div>
</template>
