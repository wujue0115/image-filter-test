import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
export const useMyWindowSize = () => {
  let myWidth = width.value

  return myWidth
}
