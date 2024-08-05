<template>
  <div>{{ message }}</div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    data() {
      return {
        message: "Hello, Vue 3!",
      };
    },
  };


  // createApp(App).mount("#app");
</script>