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

export const getTacheById = (id, res) => {
  db.query("SELECT * FROM taches WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results[0]);
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
