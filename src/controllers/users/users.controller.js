import {pool} from '../../db.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../../libs/jwt.js';
export const postUsers = async (req,res) => {
    const {name,contrasena,email} = req.body;
    try {

    const hash =  await bcrypt.hash(contrasena, 10)    
    await pool.query(`Call SP_INSERT_USER('${name}','${hash}','${email}')`);
      
    const token = await createAccessToken({ email:email });
    res.cookie('token', token);
    res.json({
        message:"Usuario creado exitosamente"
    })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  
}