/*
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-06-11 01:06:57
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-06-18 00:10:31
 * @Description: 
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt',
  ]
})
