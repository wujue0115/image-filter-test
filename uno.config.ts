import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'btn-base':
      'py-1 px-6 w-fit rounded-full bg-[#fa0] text-base select-none hover:(outline-base animate-pulse-alt) cursor-pointer'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.25
    }),
    presetTypography(),
    presetWebFonts()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
