<template>
      <div class="header">
        <div class="inner-header flex">
          <el-avatar class="dynamic-avatar" :size="200" src="/avatar.jpg"/>
        </div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <!-- 定义一个defs元素，用于存储各种元素的定义，可以被其他元素引用。
                在defs元素中定义了一个名为“gentle-wave”的路径元素，用于描述波浪形状
                改路径秒苏联一系列二次贝塞尔曲线的控制点坐标，从而实现了波浪形状 -->
            <defs>
                <path id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <!-- 定义一个g元素，用于讲多个图形组合在一期，并应用一些样式
                在g元素中使用use元素多次引用了赚钱定义的名为gentle-wave的路径元素
                通过设置不同的x，y坐标和填充颜色，实现了波浪形状和渐变效果 -->
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
      </div>
      <div style="margin-top: 50px;margin-left: 42%;">
          <span class="line mark" ref="textEL" data-text='["Hi,我是浪迹。","一个热爱技术的探索者！","欢迎来到我的博客！"]'></span>
      </div>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading';
import {useRouter} from 'vue-router';
import { ref ,onMounted} from 'vue';
const router = useRouter();
function test() {
    router.push('/home');
}

//typewriter
const textEL = ref<HTMLElement | null>(null);
const texts = ref<string[]>([]);
const index = ref(0);
const charIndex = ref(0);
const delta = ref(500);
const start = ref<number | null>(null);
const isDeleting = ref(false);

// 生命周期钩子
onMounted(() => {
  if (textEL.value) {
    const dataText = textEL.value.getAttribute('data-text');
    if (dataText) {
      texts.value = JSON.parse(dataText);
    }
    window.requestAnimationFrame(type);
  }
});

// type 函数
function type(time: number): void {
  window.requestAnimationFrame(type);
  if (start.value === null) start.value = time;
  const progress = time - start.value;
  
  if (progress > delta.value) {
    const text = texts.value[index.value];
    if (!isDeleting.value) {
      textEL.value!.innerHTML = text.slice(0, ++charIndex.value);
      delta.value = 500 - Math.random() * 400;
    } else {
      textEL.value!.innerHTML = text.slice(0, charIndex.value--);
    }

    start.value = time;

    if (charIndex.value === text.length) {
      isDeleting.value = true;
      delta.value = 200;
      start.value = time + 1200;
    }

    if (charIndex.value < 0) {
      isDeleting.value = false;
      start.value = time + 200;
      index.value = ++index.value % texts.value.length;
    }
  }
}

</script>

<style scoped>
@import '@/styles/typewriter.css';
.index {
    display: flex;
    align-items: center;
    height: 100vh;
}
.dynamic-avatar {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  background: linear-gradient(to right, #63a4ff 30%, #83eaf1 70%);
  border-radius: 50%; /* 确保边框和头像一致 */
}

.dynamic-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}
.header {
    position: relative;
    text-align: center;
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    color: white;
}

.inner-header {
    height: 65vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
}

.content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: white;
}

.parallax>use {
    /* 使use元素执行move-forever动画 */
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    /* 延迟2秒启动动画  */
    animation-delay: -2s;
    /* 设置动画持续时间为7秒 */
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }

    .content {
        height: 30vh;
    }

    h1 {
        font-size: 24px;
    }
}
</style>