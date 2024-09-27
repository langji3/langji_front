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
          </el-menu-item>
          
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">个人简介</el-aside>
        <el-main>
          <a @click="test" class="wavebutton">Go study</a>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function test(){
    router.push('/');
  }
</script>

<style>
@import '@/styles/wavebutton.css';

</style>