<template>
  <div>
    <h1>Affecter</h1>

    <select v-model="employeSelectionne">
      <option v-for="employe in employes" :key="employe.id" :value="employe">
        {{ employe.nom }} {{ employe.prenom }}
      </option>
    </select>

    <select v-if="employeSelectionne" v-model="tacheSelectionne">
      <option v-for="tache in taches" :key="tache.id" :value="tache">
        {{ tache.libelle }}
      </option>
    </select>

    <button v-if="tacheSelectionne">Affecter</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";

const employes = ref([]);
const taches = ref([]);
const employeSelectionne = ref(null);
const tacheSelectionne = ref(null);

const getEmployes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/employes");
    employes.value = response.data;
    console.log("Employés chargés :", employes.value);
  } catch (err) {
    console.log(err);
  }
};

const getTaches = async () => {
  try {
    const response = await axios.get("http://localhost:5000/taches");
    taches.value = response.data;
    console.log("Tâches chargées :", taches.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getEmployes();
  getTaches();
});

watch(employeSelectionne, (nouvelEmploye) => {
  console.log("Employé sélectionné :", nouvelEmploye);
  getTaches();
});
</script>

<style></style>
