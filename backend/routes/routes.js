import express from "express";

import { showTaches, showTachesById, deleteTache, createTache } from "../controllers/tache.js";

const router=express.Router();

router.get("/taches", showTaches);
router.get("/taches/:id", showTachesById);
router.post("/taches", createTache);
router.delete("/taches/:id", deleteTache);

export default router;