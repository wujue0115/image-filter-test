import type { FetcherResponse } from '@/composables/fetcher/useFetcher'

export const useReminiStore = defineStore('remini', () => {
  const { api } = useAPI()
  const filterImageURL = ref<string | null>(null)

  const updateFilterImageURL = (url: string) => {
    filterImageURL.value = url
  }

  const testFilterImage = () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            outputURL: 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto'
          }),
        1000
      )
    )

  const filterImage = async (file: File, isNeedMutate = true) => {
    try {
      // 測試用，模擬 API 回傳
      if (import.meta.env.DEV) {
        return testFilterImage()
      }

      const formData = new FormData()
      formData.append('image', file)
      const response = (await api.post('/filter', {
        body: formData
      })) as FetcherResponse

      if (isNeedMutate && response.data) {
        updateFilterImageURL(response.data.outputURL)
      }

      return response.data
    } catch (error) {
      console.error('Remini error occurred:', error)
    }
  }

  return {
    filterImage
  }
})
