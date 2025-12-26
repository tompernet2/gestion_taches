import express from "express";

import { getTachesController, getTachesAffectationController, createTacheController, deleteTacheByIdController } from "../controllers/tache.js";
import { createEmployeController, getEmployesController } from "../controllers/employe.js";
import { createAffectationController } from "../controllers/affection.js";

const router=express.Router();

router.get("/taches", getTachesController);
router.get("/taches/:id", getTachesAffectationController);
router.post("/taches", createTacheController);
router.delete("/taches/:id", deleteTacheByIdController);

router.post("/employes", createEmployeController);
router.get("/employes", getEmployesController);

router.post("/affectations", createAffectationController);

export default router;