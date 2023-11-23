
import {pool} from '../../../db.js';

export const author = async (req,res) => {
   const result = await pool.query('SELECT * FROM autores')
   return res.json(result[0]);
}


export const postAuthors = async (req,res) => {
    const {name} = req.body;
    try {
        await pool.query(`Call SP_INSERT_AUTHORS('${name}')`)
        return res.json('Autor guardado exitosamente');
    } catch (error) {
        console.log(error)
        
    }

  
}