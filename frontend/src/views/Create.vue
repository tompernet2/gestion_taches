<!-- src/views/Home.vue -->
<template>
  <div>
    <AddTache/>
  </div>
</template>

<script>
import AddTache from '../components/AddTache.vue';

export default {
  name: "Create",
  components: {
    AddTache
  }
};
</script>

<style>
h2 {
  color: #42b983;
}
</style>
