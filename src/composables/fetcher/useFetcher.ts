export interface FetcherResponse<T = any> extends Response {
  data?: T
}

export type FetcherInterceptor<Req = RequestInit, Res = Response, Err = Error> = {
  onRequest?: (options: Req) => Promise<Req>
  onResponse?: (response: Res) => Promise<Res>
  onError?: (error: Err) => Promise<Err>
}

export interface FetcherOptions
  extends FetcherInterceptor<FetcherOptions, FetcherResponse>,
    RequestInit {
  baseURL?: string
  query?: Record<string, any>
}

export type FetcherMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
export type FetcherFunction<T = any> = (
  url: string,
  options?: FetcherOptions
) => Promise<FetcherResponse<T> | Error>
export type FetcherInstance = FetcherFunction & Record<FetcherMethod, FetcherFunction>

const useFetcher = (baseOptions: FetcherOptions = {}): FetcherInstance => {
  const fetcher = async (url: string, options: FetcherOptions = {}) => {
    const mergedOptions: FetcherOptions = {
      ...baseOptions,
      ...options
    }

    const baseURL = mergedOptions.baseURL || ''
    const queryString = parseObjectToQueryString(mergedOptions.query || {})
    const newURL = `${baseURL}${url}${queryString ? `?${queryString}` : ''}`

    const { onRequest, onResponse, onError } = mergedOptions

    try {
      // Handle onRequest interceptor before fetch
      const newOptions = onRequest ? await onRequest(mergedOptions) : mergedOptions
      const response = await fetch(newURL, newOptions)
      // Handle onResponse interceptor after fetch
      const newResponse = onResponse ? await onResponse(response) : response
      return newResponse
    } catch (error) {
      // Handle onError interceptor when error
      const newError = onError ? await onError(error as Error) : error
      throw newError
    }
  }

  const methods: FetcherMethod[] = ['get', 'post', 'put', 'patch', 'delete']
  methods.forEach((method) => {
    ;(fetcher as FetcherInstance)[method] = async (url: string, options: FetcherOptions = {}) => {
      const mergedOptions: FetcherOptions = {
        ...options,
        method
      }
      return fetcher(url, mergedOptions)
    }
  })

  return fetcher as FetcherInstance
}

export { useFetcher }
