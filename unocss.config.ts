/*
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-06-17 23:40:22
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-06-18 00:09:58
 * @Description: 
 */
import type { UserShortcuts } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { SHORTCUTS, THEME } from './constants/unocss'

export default defineConfig({
  shortcuts: SHORTCUTS as UserShortcuts<any>,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: THEME.PRIMARY,
    },
  },
})
