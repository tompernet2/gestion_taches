<template>
  <div>
    <form @submit.prevent="saveTache">
      <label>Libelle Tache</label>
      <input type="text" placeholder="Libelle" v-model="tacheLibelle" required />

      <label>Heure Début</label>
      <input type="time" v-model="tacheHeureDebut" required />

      <label>Heure Fin</label>
      <input type="time" v-model="tacheHeureFin" required />

      <button type="submit">Créer une tache</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const router = useRouter()

const tacheLibelle = ref("")
const tacheHeureDebut = ref("")
const tacheHeureFin = ref("")

const saveTache = async () => {
  try {
    await axios.post("http://localhost:5000/taches", {
      libelle: tacheLibelle.value,
      heure_debut: tacheHeureDebut.value,
      heure_fin: tacheHeureFin.value,
    })

    tacheLibelle.value = ""
    tacheHeureDebut.value = ""
    tacheHeureFin.value = ""

    router.push("/")
  } catch (err) {
    console.log(err)
  }
}
</script>

<style></style>
