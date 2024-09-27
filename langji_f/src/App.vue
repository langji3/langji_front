
<template>
  <Loading  v-if="loading"/>
  <RouterView/>
</template>
<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Loading from '@/components/loading.vue';
  import { storeToRefs } from 'pinia';
  import { useLoadingStore } from './stores/loading';
  const { loading } = storeToRefs(useLoadingStore());
</script>
<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
	font-size: 16px;
}
a{
	text-decoration: none;
}
ul li{
	list-style: none;
}
</style>
