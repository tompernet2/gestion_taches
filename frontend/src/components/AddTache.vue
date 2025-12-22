<template>
  <div>
    <div>
      <label>Libelle Tache</label>
      <input type="text" placeholder="Libelle" v-model="tacheLibelle" />
      <label>Heure Début</label>
      <input type="time" v-model="tacheHeureDebut" />
      <label>Heure Fin</label>
      <input type="time" v-model="tacheHeureFin" />
      <button @click="saveTache">Créer une tache</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tacheLibelle: "",
      tacheHeureDebut: "",
      tacheHeureFin: "",
    };
  },
  methods: {
    async saveTache() {
      try {
        await axios.post("http://localhost:5000/taches", {
          libelle: this.tacheLibelle,
          heure_debut: this.tacheHeureDebut,
          heure_fin: this.tacheHeureFin,
        });
        this.tacheLibelle = "";
        this.tacheHeureDebut = "";
        this.tacheHeureFin = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
