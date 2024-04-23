<script setup lang="ts">

const router = useRouter()
const uploadImage = () => {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          resolve(file)
        }
        reader.onerror = (e) => {
          reject(e)
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  })
}

const handleClick = async (type) => {
  const imageFile = await uploadImage()
  if (imageFile instanceof File) {
    const { filterImage } = useReminiStore()

    const res = await filterImage(imageFile)

    console.warn(res)
     router.push({
    name: `${type}part`,
    // params: name
})
   
  }
  

}
</script>

<template>
  <main class="main" relative box-border pt-16 w-full h-100vh>
    <!-- <div absolute top-0 left="[350px]" w-3px h-full bg-white></div> -->

    <div flex h-full text-white>
      <div flex flex-col justify-center items-center ml="[40%]" box-border w-full h-full>
        <div w-450px flex flex-col justify-center items-center>
          <h2 self-start text-5xl>Lorem, ipsum dolor.</h2>
          <p mt-8 text-lg text-gray-100>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, magni deleniti.
            Aliquid labore ipsum a ex consequuntur, aliquam consectetur nam!
          </p>
          <div mt-8 w="80%" grid grid-cols-2 rounded-3xl border="3 solid #fff" bg="#0005">
            <div mt-6 flex justify-center>
              <WButtom
                :content="'A'"
                @click="handleClick('A')"
                type
                w="80px"
                text-center
                bg-red
              ></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom
                :content="'B'"
                @click="handleClick('B')"
                type
                w="80px"
                text-center
                bg-red
              ></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom
                :content="'C'"
                @click="handleClick('C')"
                type
                w="80px"
                text-center
                bg-red
              ></WButtom>
            </div>
            <div mt-6 flex justify-center>
              <WButtom
                :content="'D'"
                @click="handleClick('D')"
                type
                w="80px"
                text-center
                bg-red
              ></WButtom>
            </div>
            <div my-6 flex justify-center>
              <WButtom
                :content="'E'"
                @click="handleClick('E')"
                type
                w="80px"
                text-center
                bg-red
              ></WButtom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url('../assets/home2.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
