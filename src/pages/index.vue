<!--
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-06-17 16:38:46
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-06-18 00:32:08
 * @Description: 
-->
<template>
  <div>
    <!-- swiper -->
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="h-550px"
    >
      <swiper-slide>
        <div class="relative">
          <img class="w-100% absolute" src="/assets/images/paper_1.jpg" alt="Discover Nuxt 3" />
          <div
            class="h-350px absolute flex items-center justify-center flex-col !p-l-50px"
          >
            <div class="text-size-46px text-#ccc font-bold">良心品质, 良心服务</div>
            <div class="text-#999 text-size-20px !m-t-10px">专注印刷用纸、包装用纸、特殊用纸</div>
            
          </div>
          
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative">
          <img class="w-100% absolute" src="/assets/images/paper_2.jpg" alt="Discover Nuxt 3" />
          <div
            class="h-550px w-100% flex justify-center items-center flex-col absolute"
          >
            <div class="card">
              <div class="text-size-46px text-#fff">纸张种类齐全</div>
              <div class="text-size-32px text-#aaa">从事行业十余年，经验丰富</div>
            </div>
          </div>
          <div></div>
        </div>
      </swiper-slide>
    </swiper>
    <section>
      <div class="text-center text-size-48px sub-title">服务种类</div>
      <div class="category w-100% flex justify-center items-center">
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
      </div>
    </section>
    <div class="text-center text-size-48px sub-title">公司实力</div>
    <section class="!m-t-20px"> 
      <el-row :gutter="20" justify="center" class="w-100%">
        <el-col :span="10" class="bg-#ccc h-500px text-center leading-400px">团队图片，占地面积什么的</el-col>
        <el-col :span="10" class="leading-400px">文字介绍</el-col>
      </el-row>
    </section>

    <section class="!m-t-20px"> 
      <el-row :gutter="20" justify="center" class="w-100%">
        <el-col :span="10" class="leading-400px">工厂生产相关东西</el-col>
        <el-col :span="10" class="bg-#ccc h-500px text-center leading-400px">工厂生产相关图片</el-col>
        
      </el-row>
    </section>

    <section class="!m-t-20px"> 
      <el-row :gutter="20" justify="center" class="w-100%">
        <el-col :span="20" class="bg-#ccc h-500px text-center leading-400px">展示视频</el-col>
      </el-row>
    </section>

    <div class="text-center text-size-48px sub-title">联系我们</div>
    <section class="!m-t-20px flex justify-around items-center"> 
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
      <div class="h-200px w-200px text-center leading-200px bg-#ccc">二维码</div>
    </section>



    <div class="contact-us" @click="showQrCode">
      <div v-if="flat" class="qrcode" ></div>
    </div>
  
    
  </div>
  
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


let flat = ref(false);
const modules = ref([Autoplay, Pagination, Navigation]);
const showQrCode = () =>{
  flat.value = !flat.value
}
</script>

<style scoped lang="less">
html, * {
  margin: 0;
  padding: 0;
}
.sub-title {
  padding: 20px 0;
}

.category-item {
 margin-right: 30px !important;
}

.contact-us {
  width: 80px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  bottom: 200px;
  right: 30px;

  .qrcode {
    position: absolute;
    right: 120px;
    width: 100px;
    height: 100px;
    background: #000;
  }
}

.card {
  padding: 30px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 10px;
}

</style>
