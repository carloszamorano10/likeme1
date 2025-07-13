import pool from "../../db/config.js"


export const createLikeModels = async (titulo, img, descripcion, likes = 0)=>{
    const sqlQuery = "INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *" 
    const likesNumber = Number(likes) || 0;
    const values = [titulo, img, descripcion, likesNumber]
    const result = await pool.query(sqlQuery, values)
    return result.rows
}


export const getlikeModels = async ()=>{
    const sqlQuery = "SELECT * FROM posts"
    const response = await pool.query(sqlQuery)
    console.log(response.rows)
    return response.rows
}

