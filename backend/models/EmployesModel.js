import db from "../config/database.js";
import bcrypt from "bcrypt";

export const getEmployes = (res) => {
  db.query("SELECT * FROM employes", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createEmploye = async (data, res) => {
  try {
    const passwordHash = await bcrypt.hash(data.password, 10);

    const employe = {
      login: data.login,
      password: passwordHash,
      nom: data.nom,
      prenom: data.prenom,
    };

    db.query("INSERT INTO employes SET ?", employe, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  } catch (err) {
    res.send(err);
  }
};
