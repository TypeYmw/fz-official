<!--
 * @Author: yangmw yangmw@91160.com
 * @Date: 2023-06-17 16:43:00
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2023-06-18 00:21:20
 * @Description: 
-->
<template>
 <el-menu
    :default-active="activeIndex"
    class="h-60px !absolute w-100% z-100 top-0 left-0 !border-none"
    mode="horizontal"
    :ellipsis="false"
    background-color="rgba(0,0,0,0.4)"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <div class="flex justify-center items-center">
      <img src="/assets/images/logo_no_text.png" alt="" class="w-75px m-l-15px">
      <span class="text-white text-size-18px m-l-10px">方正纸业</span>
    </div>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>产品介绍</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>ss
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">联系我们</el-menu-item>
    <el-menu-item index="3">公司公告</el-menu-item>
  </el-menu>
</template>


<script>
export default {

}
</script>
