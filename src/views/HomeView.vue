<script setup lang="ts"></script>

<template>
  <main class="main" relative box-border pt-16 w-full h-100vh>
    <div absolute top-0 left="[354px]" w-3px h-full bg-white></div>

    <div flex h-full text-white>
      <div flex flex-col justify-center items-center ml="[50%]" box-border w-full h-full>
        <div w-450px flex flex-col justify-center items-center>
          <h2 self-start text-5xl>Lorem, ipsum dolor.</h2>
          <p mt-8 text-lg text-gray-100>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, magni deleniti.
            Aliquid labore ipsum a ex consequuntur, aliquam consectetur nam!
          </p>
          <div mt-8 w="80%" grid grid-cols-2 rounded-3xl border="3 solid #fff" bg="#0005">
            <div mt-6 flex justify-center>
              <WButtom :content="'A'" w="80px" text-center bg-red></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom :content="'B'" w="80px" text-center bg-red></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom :content="'C'" w="80px" text-center bg-red></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom :content="'D'" w="80px" text-center bg-red></WButtom>
            </div>
            <div my-6 flex justify-center>
              <WButtom :content="'E'" w="80px" text-center bg-red></WButtom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url('../assets/home.jpg');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
}
</style>
