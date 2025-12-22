<template>
  <div>
    <router-link to="/create">Ajouter</router-link>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>libelle</th>
          <th>heure debut</th>
          <th>heure fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.libelle }}</td>
          <td>{{ item.heure_debut }}</td>
          <td>{{ item.heure_fin }}</td>
          <td><button @click="deleteTache(item.id)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getTaches();
  },
  methods: {
    async getTaches() {
      try {
        const response = await axios.get("http://localhost:5000/taches");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteTache(id) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/taches/${id}`
        );
        this.getTaches()
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
