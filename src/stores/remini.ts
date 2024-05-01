import type { FetcherResponse } from '@/composables/fetcher/useFetcher'

export const useReminiStore = defineStore('remini', () => {
  const { api } = useAPI()
  const filterImageURL = ref<string | null>(null)
  const originImageURL = ref<string | null>(null)
  const isLoading = ref(false)
  const isError = ref(false)
  const updateOriginImageURL = (url: string) => {
    originImageURL.value = url
  }
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
    isLoading.value = true
    try {
      // 測試用，模擬 API 回傳
      if (import.meta.env.PROD) {
        return updateFilterImageURL('https://fakeimg.pl/2880x2160/?retina=1&text=過濾後&font=noto')
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
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { 
  filterImage, filterImageURL, updateOriginImageURL, originImageURL, isLoading, isError
  }
})
