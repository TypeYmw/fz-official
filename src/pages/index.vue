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
        delay: 1000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="h-350px"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
    <section>
      <div class="text-center text-size-48px sub-title">服务种类</div>
      <div class="category w-100% flex justify-center items-center">
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
        <div class="w-250px h-350px bg-black text-center category-item">1</div>
      </div>
    </section>

    <section> 
      
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
* {
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

</style>
