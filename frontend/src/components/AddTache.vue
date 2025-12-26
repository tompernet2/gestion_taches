<template>
  <div class="flex justify-center">
    <form @submit.prevent="saveTache" class=" p-8 rounded-lg w-full max-w-md flex flex-col gap-4">
      
      <div class="flex flex-col">
        <label class="mb-1 font-semibold text-gray-700">Libelle Tache</label>
        <input type="text" placeholder="Libelle" v-model="tacheLibelle" required class="px-3 py-2 border border-gray-300 rounded-md " />
      </div>

      <div class="flex flex-col">
        <label class="mb-1 font-semibold text-gray-700">Heure Début</label>
        <input type="time" v-model="tacheHeureDebut" required class="px-3 py-2 border border-gray-300 rounded-md " />
      </div>

      <div class="flex flex-col">
        <label class="mb-1 font-semibold text-gray-700">Heure Fin</label>
        <input type="time" v-model="tacheHeureFin" required class="px-3 py-2 border border-gray-300 rounded-md " />
      </div>

      <button type="submit" class="bg-blue-500 text-white py-2 rounded-md cursor-pointer" >
        Créer une tâche
      </button>

    </form>

    <router-link to="/" class="fixed top-0 left-0 m-2 bg-gray-500 mr-1 px-3 py-2 rounded-md text-white">
      Retour 
    </router-link>
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
