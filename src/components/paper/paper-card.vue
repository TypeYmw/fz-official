<!--
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-07-15 23:39:11
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-07-15 23:48:59
 * @Description: 
-->
<template>
  <div class="paper-container">
    <img width="200" height="200" :src="imgUrl" alt="Discover Nuxt 3" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: ''
  }
})

</script>

<style>

</style>