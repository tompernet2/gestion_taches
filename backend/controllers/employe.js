import { createEmploye } from "../models/EmployesModel.js";

export const createEmployeController = async (req, res)=>{
    const data = req.body;
    createEmploye(data, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}