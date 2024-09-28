<template>
    <div class="loading">
        <svg viewBox='0 0 50 50'>
            <circle cx='25' cy='25' r='20'></circle>
        </svg>
        <p>LOADING</p>
    </div>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue';
function in_act(){
    let container = document.querySelector('.loading')
    if (container) {
        container.classList.remove('loading_out');
    }
}
function out() {
    let container = document.querySelector('.loading')
    if (container) {
        container.classList.add('loading_out');
    }
}
defineExpose({out,in_act})

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

    .loading_out {
        transform: translateY(100%);
    }
    .loading_out svg,
    .loading_out p {
        opacity: 0;
    }
</style>
