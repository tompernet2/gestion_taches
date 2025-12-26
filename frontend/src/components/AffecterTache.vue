<template>
  <div class="flex justify-center">
    <div class="p-8 rounded-lg w-full max-w-md flex flex-col gap-4">
      <div class="flex flex-col">
        <h1 class="mb-1 font-semibold text-gray-700">Selectionner un employe</h1>
        <select v-model="employeSelectionne" class="px-3 py-2 border border-gray-300 rounded-md">
          <option v-for="employe in employes" :key="employe.id" :value="employe" class="">
            {{ employe.nom }} {{ employe.prenom }}
          </option>
        </select>
      </div>
  
      <div v-if="employeSelectionne" class="flex flex-col">
        <h1 class="mb-1 font-semibold text-gray-700">Selectionner une tache</h1>
        <select  v-model="tacheSelectionne" class="px-3 py-2 border border-gray-300 rounded-md">
          <option v-for="tache in taches" :key="tache.id" :value="tache">
            {{ tache.libelle }}
          </option>
        </select>
      </div>
  
      <button v-if="tacheSelectionne" @click="createAffectattion" class="bg-blue-500 text-white py-2 rounded-md cursor-pointer" >Affecter</button>
    </div>
    
    <router-link to="/" class="fixed top-0 left-0 m-2 bg-gray-500 mr-1 px-3 py-2 rounded-md text-white">
      Retour 
    </router-link>
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
  } catch (err) {
    console.log(err);
  }
};

const getTachesAffectation = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/taches/${id}`);
    taches.value = response.data;
  } catch (err) {
    console.log(err);
  }
};

const createAffectattion = async () => {
  try {
    await axios.post("http://localhost:5000/affectations", {
      employe_id: employeSelectionne.value.id,
      tache_id: tacheSelectionne.value.id,
    });
    employeSelectionne.value = "";
    tacheSelectionne.value = "";
    alert("Tache affecté");
  } catch (err){
    console.log(err)
  }
};

onMounted(() => {
  getEmployes();
});

watch(employeSelectionne, (nouvelEmploye) => {
  console.log("Employé sélectionné :", nouvelEmploye);
  tacheSelectionne.value = "";
  getTachesAffectation(nouvelEmploye.id);
});
</script>

<style></style>
