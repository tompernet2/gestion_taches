<template>
  <div class="w-full flex flex-col justify-center">
    <div>
      <router-link to="/create" class="bg-blue-500 mr-1 px-3 py-2 rounded-md text-white">
        Ajouter 
      </router-link>
      <router-link to="/affecter" class="bg-blue-500 mr-1 px-3 py-2 rounded-md text-white">
        Affecter
      </router-link>
    </div>
    <table class="w-full border-separate border-spacing-y-2">
      <thead>
        <tr class="text-left text-gray-600">
          <th class="px-2 py-3">Libelle 
            <button @click="sortBy('libelle')" class=" px-2 py-1 cursor-pointer"><i class="pi pi-angle-up" style="font-size: 1rem"></i></button>
          </th>
          <th class="px-2 py-3">Heure début
            <button @click="sortBy('heure_debut')" class=" px-2 py-1 cursor-pointer"><i class="pi pi-angle-up" style="font-size: 1rem"></i></button>
          </th>
          <th class="px-2 py-3">Heure fin
            <button @click="sortBy('heure_fin')" class=" px-2 py-1 cursor-pointer"><i class="pi pi-angle-up" style="font-size: 1rem"></i></button>
          </th>
          <th class="px-2 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" class="bg-gray-100 rounded-lg pb-2">
          <td class="px-4 py-2 rounded-l-lg">
            <strong>{{ item.libelle }}</strong>
          </td>
          <td class="px-4 py-2">{{ item.heure_debut }}</td>
          <td class="px-4 py-2">{{ item.heure_fin }}</td>
          <td class="px-4 py-2 rounded-r-lg text-center">
            <button
              @click="deleteTache(item.id)"
              class="bg-red-600 px-3 py-2 rounded-md text-white cursor-pointer"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import 'primeicons/primeicons.css'


const items = ref([]);

const getTaches = async () => {
  try {
    const response = await axios.get("http://localhost:5000/taches");
    items.value = response.data;
    console.log(items.value);
  } catch (err) {
    console.log(err);
  }
};

const sortBy = (param) => {
  items.value.sort((a, b) => {
    if (a[param] > b[param]) return 1;
    if (a[param] < b[param]) return -1;
    return 0;
  });
};

const deleteTache = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/taches/${id}`);
    getTaches();
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getTaches();
});
</script>

<style> </style>
