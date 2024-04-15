<script setup lang="ts">

</script>

<template>
  <main class="main" relative box-border  w-full h-100vh bg-black>

    <div flex h-full text-white>
   
      <div flex flex-col justify-center items-center  box-border w-full h-full>
     
        <div  rounded-3xl bg-white >
    
          <div  object-cover relative>
            <svg absolute top-2 left-2 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
     <img src="https://picsum.photos/500/200"  rounded-t-3xl alt=""/>
          </div>
         
          
            <div  flex flex-col m-3>
            <div m-auto>
              <WButtom
              :content="'pro'"
              @click="handleClick('A')"
              type
              w="80px"
              text-center
              bg-red
            ></WButtom>
            </div>
              <div m-2 flex flex-col justify-center items-center>
                <WButtom
                  :content="'每年'"
                  @click="handleClick('A')"
                  type
                  w="80px"
                  text-center
                  m-1
                  text-black
                  bg-white
                  border="1 solid #000"
                ></WButtom> 
                <WButtom
                :content="'每月'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                text-black
                bg-white
                border="1 solid #000"
              ></WButtom>
            </div>
              <div p-3  flex justify-around>
              <WButtom
                :content="'繼續'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                bg-black
              ></WButtom> <WButtom
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

<style scoped>
</style>
