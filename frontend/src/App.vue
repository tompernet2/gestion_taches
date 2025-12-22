<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
    <!-- Ici s'affichent les pages selon la route -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
