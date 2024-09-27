<template>
    <div class="index">
        <h1>Welcome to the Index Page</h1>
        <p>This is a basic template for your Vue component.</p>
        <button @click="test">Click me to test the loading component</button>
    </div>
</template>

<script setup lang="ts">
    import { useLoadingStore } from '@/stores/loading';
    import {useRouter} from 'vue-router';
    const router = useRouter();
    function test() {
        router.push('/home');
    }
</script>

<style scoped>
.index {
    text-align: center;
    margin-top: 50px;
}
</style>