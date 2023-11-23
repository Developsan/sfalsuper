import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller.js';
import { about } from '../controllers/about.controller.js';
import { contacto } from '../controllers/contact.controller.js';
import { author , postAuthors} from '../controllers/autores/authors/author.controller.js';
import { postBook, getCountBookyAuthor, getBookByAuthor } from '../controllers/books/book.controller.js';
import { postUsers } from '../controllers/users/users.controller.js';
import { verifyToken } from '../middelwares/verifyJWToken.js';
const router = Router();

router.post('/login',login);
router.post('/create/user', postUsers);
router.get('/about',verifyToken,about);
router.get('/contacto', verifyToken,contacto);
router.get('/autores',verifyToken, author);
router.get('/logout', logout);
router.post('/create/autor',verifyToken, postAuthors);
router.post('/create/book',verifyToken, postBook);
router.get('/view/book/count', getCountBookyAuthor);
router.get('/view/book/author/:id', getBookByAuthor);


export default router;