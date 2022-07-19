<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ anotherProp }}</p>
    <p>{{ state.count }}</p>
    <p>{{ userStore.getIsLoggedIn }}</p>
    <button @click="increment">+</button>
    <button @click="aboutPage">About</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores';

const router = useRouter();

const userStore = useUserStore();

interface Props {
  msg: string;
  anotherProp?: number;
}
const props = withDefaults(defineProps<Props>(), {
  anotherProp: 10,
});

interface State {
  count: number;
}

const state = reactive<State>({
  count: props.anotherProp,
});

const increment = () => {
  state.count++;
  userStore.login();
};

const aboutPage = () => {
  router.push({ name: 'about' });
};
</script>
