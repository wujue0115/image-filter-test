import type { FetcherOptions, FetcherResponse, FetcherInterceptor } from '../fetcher/useFetcher.ts'

const REMINI_API_KEY = import.meta.env.VITE_REMINI_API_KEY

const baseInterceptors: FetcherInterceptor = {
  async onResponse(response: FetcherResponse) {
    const newResponse = response
    const data = await response.json()
    newResponse.data = data
    return newResponse
  }
}

const baseAPIOptions = {
  ...baseInterceptors
}

const reminiAPIOptions = {
  baseURL: 'https://developer.remini.ai/api',
  ...baseInterceptors,
  async onRequest(options: FetcherOptions) {
    const newOptions = { ...options }

    newOptions.headers = {
      ...newOptions.headers,
      Authorization: `Bearer ${REMINI_API_KEY}`
    } as Record<string, string>

    return newOptions
  }
}

const api = useFetcher({
  ...baseAPIOptions
})

const reminiAPI = useFetcher({
  ...reminiAPIOptions
})

const useAPI = () => ({
  api,
  reminiAPI
})

export { useAPI }
