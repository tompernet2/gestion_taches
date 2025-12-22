import mysql from "mysql2";

//creer la connexion avec la BDD
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gestion_taches"
})

export default db;