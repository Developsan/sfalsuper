import {pool} from '../../db.js'

export const postBook = async (req,res) => {
 const {name,
    editorial,
    autores_id,
    descripcion,
    precio,
    idioma,
    paginas} =  req.body;
await pool.query(`Call SP_INSERT_BOOK('${name}','${editorial}',${autores_id},'${descripcion}',${precio},'${idioma}',${paginas})`);
return res.json('Libro creado exitosamente');

}

export const getCountBookyAuthor = async (req,res) => {
   const result = await pool.query('Call SP_COUNT_BOOKS_BY_AUTHOR()');
    return res.json(result[0]);

}

export const getBookByAuthor = async (req,res) => {
    const { author_id } = req.body
    const result = await pool.query(`Call SP_SELECT_BOOK_AUTHOR(${author_id})`);
     return res.json(result[0]);
 
 }