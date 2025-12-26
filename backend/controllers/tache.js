import {
  getTaches,
  createTache,
  deleteTacheById,
  getTachesAffectation,
} from "../models/TachesModel.js";

export const getTachesController = (req, res) => {
  getTaches(res);
};

export const createTacheController = (req, res) => {
  createTache(req.body, res);
};

export const deleteTacheByIdController = (req, res) => {
  deleteTacheById(req.params.id, res);
};

export const  getTachesAffectationController = (req, res) =>{
    getTachesAffectation(req.params.id, res);
}