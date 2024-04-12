import type { FetcherResponse, FetcherInterceptor } from '../fetcher/useFetcher.ts'

const baseInterceptors: FetcherInterceptor = {
  async onResponse(response: FetcherResponse) {
    const newResponse = response
    const data = await response.json()
    newResponse.data = data
    return newResponse
  }
}

const baseAPIOptions = {
  baseURL: import.meta.env.VITE_BASE_API_URL,
  ...baseInterceptors
}

const api = useFetcher({
  ...baseAPIOptions
})

const useAPI = () => ({
  api
})

export { useAPI }
