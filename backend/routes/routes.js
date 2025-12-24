import express from "express";

import { getTachesController, getTacheByIdController, createTacheController, deleteTacheByIDController } from "../controllers/tache.js";
import { createEmployeController } from "../controllers/employe.js";

const router=express.Router();

router.get("/taches", getTachesController);
router.get("/taches/:id", getTacheByIdController);
router.post("/taches", createTacheController);
router.delete("/taches/:id", deleteTacheByIDController);

router.post("/employes", createEmployeController)

export default router;