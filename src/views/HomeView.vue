<template>
  <div class="home">
    <HelloWorld msg="Hello World" :another-prop="12" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>
