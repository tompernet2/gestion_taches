import db from "../config/database.js";

export const getTaches = (res) => {
  db.query("SELECT * FROM taches", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createTache = (data, res) => {
  db.query("INSERT INTO taches SET ?", [data], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteTacheById = (id, res) => {
  db.query("DELETE FROM taches WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const getTachesAffectation = (id,res) => {
  db.query("SELECT * FROM taches t WHERE t.id NOT IN ( SELECT a.tache_id FROM affectations a WHERE a.employe_id = ?)",[id], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};