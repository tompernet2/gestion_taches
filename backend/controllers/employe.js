import { getEmployes, createEmploye } from "../models/EmployesModel.js";

export const getEmployesController = (_, res) => {
  getEmployes(res);
};

export const createEmployeController = (req, res) => {
  createEmploye(req.body, res);
};
