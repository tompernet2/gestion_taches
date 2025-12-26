import { createAffectation } from "../models/AffectionsModel.js";

export const createAffectationController = (req, res) =>{
    createAffectation(req.body, res)
}