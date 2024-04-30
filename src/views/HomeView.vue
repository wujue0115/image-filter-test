<script setup lang="ts">
const router = useRouter()
const image = ref(null)
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
    const { filterImage, updateOriginImageURL } = useReminiStore()

    const res = await filterImage(imageFile)

    // 將origin 圖片保存在pinia中
    // 建立FileReader 監聽 Load 事件
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.onload = function () {
      image.value = reader.result
    }
    await updateOriginImageURL(image)
    router.push({
      name: `${type}part`
    })
  }
}
</script>

<template>
  <main class="main" relative box-border pt-20 w-full h-100vh font-sans>
    <div flex h-full text-white>
      <div flex flex-col justify-center items-center ml="[40%]" box-border w-full h-full>
        <div w-450px flex flex-col justify-center items-center>
          <h2 text-center text-5xl>
            AI photo enhancer, <br />
            in one click
          </h2>
          <p mt-3 text-lg text-gray-100>Only JPG file accepted</p>
          <div mt-8 w="80%" rounded-3xl border="3 dashed #fff" bg="#0005">
            <div my-8 mx-auto flex justify-center align-center>
              <div text-md btn-base py-2 bg-pink-500 flex justify-center @click="handleClick('A')">
                <span inline-block align-top> Upload Your Photo</span>
                <span ml-2>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="20" height="20" fill="url(#pattern0_571_2261)" />
                    <defs>
                      <pattern
                        id="pattern0_571_2261"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlink:href="#image0_571_2261" transform="scale(0.0078125)" />
                      </pattern>
                      <image
                        id="image0_571_2261"
                        width="128"
                        height="128"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs></svg
                ></span>
              </div>
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
