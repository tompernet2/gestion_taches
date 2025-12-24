import { getTaches, getTacheById, createTache  ,deleteTacheByID} from "../models/TachesModel.js";

export const getTachesController=(req, res)=>{
    getTaches((err, results)=>{
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const getTacheByIdController=(req, res)=>{
    getTacheById(req.params.id, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const createTacheController = (req, res)=>{
    const data=req.body;
    createTache(data, (err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}
export const deleteTacheByIDController = (req, res)=>{
    const id=req.params.id;
    deleteTacheByID(id, (err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}