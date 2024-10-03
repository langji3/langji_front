
<template>
  <Loading ref="loadingComponent"/>
  <RouterView/>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import Loading from '@/components/loading.vue';
import router from '@/router'
const loadingComponent = ref()
onMounted(()=>{
  check_loading()
  router.beforeEach((to,from,next)=>{
    loadingComponent.value.in_act()
    setTimeout(()=>{
      next()
      loadingComponent.value.out()
    },1000)
  })
})
function check_loading(){
  let timer = setTimeout(() => {
    if(document.readyState==='complete'){
      loadingComponent.value.out()
      clearTimeout(timer);
    }
  }, 300);
}
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
body{
  background-image: url('../../langji_f/public/bg.png');
  background-size: cover;
}
a{
	text-decoration: none;
}
ul li{
	list-style: none;
}
</style>
