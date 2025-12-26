<template>
  <div>
    <form @submit.prevent="saveEmploye">
      <label>Login</label>
      <input type="text" placeholder="Login" v-model="login" required />

      <label>Password</label>
      <input type="text" placeholder="Password" v-model="password" required />

      <label>Nom</label>
      <input type="text" placeholder="Nom" v-model="nom" required />

      <label>Prénom</label>
      <input type="text" placeholder="Prénom" v-model="prenom" required />

      <button type="submit">Créer un compte</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const router = useRouter()

const login = ref("")
const password = ref("")
const nom = ref("")
const prenom = ref("")

const saveEmploye = async () => {
  try {
    await axios.post("http://localhost:5000/employes", {
      login: login.value,
      password: password.value,
      nom: nom.value,
      prenom: prenom.value,
    })

    login.value = ""
    password.value = ""
    nom.value = ""
    prenom.value = ""

    router.push("/")
  } catch (err) {
    console.log(err)
  }
}
</script>

<style></style>
