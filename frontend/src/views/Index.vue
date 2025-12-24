<!-- src/views/Home.vue -->
<template>
  <div>
    <TachesList/>
  </div>
</template>

<script>
import TachesList from '../components/TachesList.vue';

export default {
  name: "Index",
  components: {
    TachesList
  }
};
</script>

<style>
</style>
