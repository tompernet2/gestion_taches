import { getTaches, getTacheById, insertTache, deleteTacheByID } from "../models/TachesModel.js";

export const showTaches=(req, res)=>{
    getTaches((err, results)=>{
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const showTachesById=(req, res)=>{
    getTacheById(req.params.id, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const createTache = (req, res)=>{
    const data=req.body;
    insertTache(data, (err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}
export const deleteTache = (req, res)=>{
    const id=req.params.id;
    deleteTacheByID(id, (err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}