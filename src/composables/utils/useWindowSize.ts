import { useWindowSize } from '@vueuse/core'

const { width,height } = useWindowSize()
export const useMyWindowSize = () => {
  let myWidth = width.value
  let myHeight = height.value

  return { myWidth, myHeight }
}
