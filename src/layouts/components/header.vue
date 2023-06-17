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
    class="h-60px"
    mode="horizontal"
    :ellipsis="false"
    background-color="#333"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>产品介绍</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
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
