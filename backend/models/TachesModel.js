import db  from "../config/database.js";

export const getTaches=(result)=>{
    db.query("SELECT * FROM taches" , (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getTacheById=(id, result) => {
    db.query(
        "SELECT * FROM taches WHERE id = ?",
        [id], 
        (err, results) =>{
            if (err){
                console.log(err);
                result(err, null)
            }else{
                result(null, results[0])
            }
        })
}

export const createTache=(data, result)=>{
    db.query("INSERT INTO taches SET ?", [data], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const deleteTacheByID=(id, result)=>{
    db.query("DELETE FROM taches WHERE id = ?", [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results)
        }
    })
}