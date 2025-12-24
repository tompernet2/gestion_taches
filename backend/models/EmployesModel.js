import db from "../config/database.js";
import bcrypt from "bcrypt";

export const createEmploye = async (data, result) => {
  try {
    const passwordHash = await bcrypt.hash(data.password, 10);

    const employe = {
      login: data.login,
      password: passwordHash,
      nom: data.nom,
      prenom: data.prenom,
    };

    db.query("INSERT INTO employes SET ?", [employe], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  } catch (err) {
    console.log(err);
    result(err, null);
  }
};

