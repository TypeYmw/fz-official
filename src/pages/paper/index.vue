<!--
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-07-15 23:30:45
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-07-15 23:51:42
 * @Description: 
-->
<template>
  <div class="container">
    <section>
      <div class="title">普通印刷纸</div>
      <div class="flex justify-around w-100%">
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
      </div>
    </section>
    <section>
      <div class="title">普通印刷纸</div>
      <div class="flex justify-around">
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
      </div>
    </section>
    <section>
      <div class="title">普通印刷纸</div>
      <div class="flex justify-around">
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
        <PaperCard :img-url="'/assets/images/paper_2.jpg'" />
      </div>
    </section>
    <section>
      <div class="title">涂布艺术纸</div>
    </section>
    <section>
      <div class="title">包装纸</div>
    </section>
    <section>
      <div class="title">牛皮纸</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PaperCard from '../../components/paper/paper-card.vue';
</script>

<style scoped lang="less">
.container {
  margin-top: 60px;

  .title {
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dotted #ccc;
  }
  
}
</style>