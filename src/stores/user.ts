import { defineStore } from 'pinia';

// import axios from '@/axios';
import { computed, ref } from 'vue';

// interface State {
//   isLoggedIn: boolean;
// }

export const userStore = defineStore('user', () => {
  const isLoggedIn = ref(false);

  const getIsLoggedIn = computed(() => isLoggedIn.value);

  const login = () => {
    isLoggedIn.value = true;
  };

  return {
    getIsLoggedIn,
    login,
  };
});
