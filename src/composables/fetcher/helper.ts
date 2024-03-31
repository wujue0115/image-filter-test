export const parseObjectToQueryString = (query: Record<string, any>) => {
  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&')
  return queryString
}
