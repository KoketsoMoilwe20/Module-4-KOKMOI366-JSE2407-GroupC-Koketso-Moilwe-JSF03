<template>
  <div id="app">
    <Header />
    <router-view></router-view>
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
    



</script>