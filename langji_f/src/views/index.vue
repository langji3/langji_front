<template>
    <div class="index">
        <div>
            <span class="line mark" ref="textEL" data-text='["Hi,我是浪迹。","一个热爱技术的探索者！","欢迎来到我的博客！"]'></span>
        </div>
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
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>