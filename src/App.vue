<template>
  <div id="app">
    <Header />
    <div>{{ message }}</div>
  </div>
  
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header,
    },
    data() {
      return {
        message: "Hello, vue 3!",
      };
    },
  };
    


  // createApp(App).mount("#app");
</script>