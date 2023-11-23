
import bcrypt from 'bcryptjs';
import {pool} from '../db.js'
import { createAccessToken } from '../libs/jwt.js';
export const login = async (req,res) => {
    const {contrasena,email} = req.body;
    try {

    const userFound = await pool.query(`SELECT * FROM usuarios where email = "${email}"`);
    if(!userFound)return res.status(404).json({message: "usuario no encontrado"});
    const isMatch = await bcrypt.compare(contrasena,userFound[0][0].contrasena);
    if(!isMatch)return res.status(404).json({message:"contraseńa incorrecta"}) 

    const token = await createAccessToken({id: userFound[0][0].usuario_id});
    res.cookie('token', token);
    res.json({message: 'Login Exitoso'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }


}

export const logout = (req,res) => {
    res.cookie('token', "",{
        expires: new Date(0),
    });

    return res.sendStatus(200);
}