<!--
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-06-17 15:18:54
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-06-18 00:30:53
 * @Description: 
-->
<template>
  <div class="flex flex-col h-screen">
    <!-- 顶部 -->
    <Header class="flex-0" />
    <nuxtPage class="flex-1 overflow-auto" />
    <Footer class=""/>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>
<style module lang="less"></style>
