import {
  getTaches,
  getTacheById,
  createTache,
  deleteTacheById,
} from "../models/TachesModel.js";

export const getTachesController = (req, res) => {
  getTaches(res);
};

export const getTacheByIdController = (req, res) => {
  getTacheById(req.params.id, res);
};

export const createTacheController = (req, res) => {
  createTache(req.body, res);
};

export const deleteTacheByIdController = (req, res) => {
  deleteTacheById(req.params.id, res);
};
