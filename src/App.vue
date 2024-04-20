<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header fixed z-1 flex items-center h-16 w-full font-sans w="[50%]">
    <nav pl-6 >
      <RouterLink to="/" text-xl text-white decoration-none>Home</RouterLink>
    
    </nav>
  </header>

  <RouterView />
</template>
