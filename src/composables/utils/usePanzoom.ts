import Panzoom from '@panzoom/panzoom'

export const usePanzoom = (element: HTMLElement, options: any = {}) => {
  const instance = Panzoom(element, {
    maxScale: 5,
    contain: 'inside',
    ...options
  })

  return instance
}
