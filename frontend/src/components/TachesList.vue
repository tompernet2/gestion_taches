<template>
  <div>
    <router-link to="/create">Ajouter</router-link>
    <router-link to="/affecter">Affecter</router-link>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>
            libelle
            <button @click="sortBy('libelle')">BTN libelle</button>
          </th>
          <th>
            heure debut
            <button @click="sortBy('heure_debut')">BTN Heure debut</button>
          </th>
          <th>
            heure fin
            <button @click="sortBy('heure_fin')">BTN Heure fin</button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.libelle }}</td>
          <td>{{ item.heure_debut }}</td>
          <td>{{ item.heure_fin }}</td>
          <td>
            <button @click="deleteTache(item.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const items = ref([])

const getTaches = async () => {
  try {
    const response = await axios.get("http://localhost:5000/taches")
    items.value = response.data
    console.log(items.value)
  } catch (err) {
    console.log(err)
  }
}

const sortBy = (param) => {
  items.value.sort((a, b) => {
    if(a[param] > b[param]) return 1
    if(a[param] < b[param]) return -1
    return 0
  })
}

const deleteTache = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/taches/${id}`)
    getTaches()
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getTaches()
})
</script>

<style></style>
