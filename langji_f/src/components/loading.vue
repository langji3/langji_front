<template>
    <div class="loading" :class="{ 'loading-out': isLoadingOut }">
        <svg viewBox='0 0 50 50'>
            <circle cx='25' cy='25' r='20'></circle>
        </svg>
        <p>LOADING</p>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const isLoadingOut = ref(false);
    function loadingOut() {
        isLoadingOut.value = true;
        setTimeout(() => {
            isLoadingOut.value = false;
        }, 1000);
    }
</script>

<style scoped>
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #f7f7f7;
        z-index: 100000000;
        transition: 1s ease;
    }
    .loading svg {
        width: 5rem;
        margin-bottom: 2rem;
        overflow: visible;
        transition: 0.3s ease;
    }
    .loading svg circle {
        fill: none;
        stroke: #171717;
        stroke-width: 5;       /* 减小描边宽度以适应半径 */
        stroke-dasharray: 140; /* 根据半径调整 */
        stroke-dashoffset: 140; /* 根据半径调整 */
        transform-origin: center;
        animation: circle_rotate 3s linear infinite;
    }
    @keyframes circle_rotate {
        0% {
            stroke-dashoffset: 140;
            transform: rotate(0deg);
        }
        100% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
        }
    }
    .loading p {
        font-size: 2rem;
        font-family: sans-serif;
        color: #171717;
        font-weight: 900;
        transition: 0.3s ease;
    }


    .loading.loading-out {
        animation: loadingOut 1s forwards;
    }

    @keyframes loadingOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5); /* 扩大元素以创建推出效果 */
        }
    }
</style>
