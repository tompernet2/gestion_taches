import db from "../config/database.js";

export const createAffectation = (data, res) => {
  db.query("INSERT INTO affectations SET ?", [data], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};