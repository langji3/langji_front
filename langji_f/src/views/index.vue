<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="`/index`"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-menu-item index="0">
            <img
              src="@\assets\logo.svg"
              style="width: 50px"
              alt="Element logo"
            />
          </el-menu-item>
          
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">个人简介</el-aside>
        <el-main>
          <a href="" class="wavebutton">Go study</a>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
@import '@/assets/css/wavebutton.css';

</style>