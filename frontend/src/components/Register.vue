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


<script>
import axios from "axios";
export default {
  data() {
    return {
      login: "",
      password: "",
      nom: "",
      prenom: "",
    };
  },
  methods: {
    async saveEmploye() {
      try {
        await axios.post("http://localhost:5000/employes", {
          login: this.login,
          password: this.password,
          nom: this.nom,
          prenom: this.prenom,

        });
        this.login = "";
        this.password = "";
        this.nom = "";
        this.prenom = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
