import express from "express";

import { getTachesController, getTacheByIdController, createTacheController, deleteTacheByIdController } from "../controllers/tache.js";
import { createEmployeController, getEmployesController } from "../controllers/employe.js";

const router=express.Router();

router.get("/taches", getTachesController);
router.get("/taches/:id", getTacheByIdController);
router.post("/taches", createTacheController);
router.delete("/taches/:id", deleteTacheByIdController);

router.post("/employes", createEmployeController)
router.get("/employes", getEmployesController)

export default router;