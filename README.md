# sfalsuper

## npm install

## Rutas de acceso

# Login
http://localhost:4053/login
{
  "email":"test@gmail.com",
  "contrasena":"123123"
}
# Ruta logout
http://localhost:4053/logout


# Ruta Crear usuario
http://localhost:4053/create/users

{
  "name":"test",
  "contrasena":"123123",
  "email":"test@gmail.com"
}

# Ruta crear autor
http://localhost:4053/create/autor
{
  "name":"J.K Rowling"
}

# Ruta crear book
http://localhost:4053/ceate/book
{
  "name":"Harry Potter y la Camara Secreta",
  "editorial":"Salamandra",
  "autores_id": 4,
  "descripcion":"Esta es una descripción",
  "precio":150,
  "idioma":"Español",
  "paginas":334
  
}
# Ruta Contacto
http://localhost:4053/contacto
# Ruta about
http://localhost:4053/about
# Ruta autores
http://localhost:4053/autor

# Ruta todos los autores y el numero de libros que tiene.
http://localhost:4053/view/book/count

# Ruta todos los libros de un autor

http://localhost:4053/view/book/author/4
{
  "author_id" : 4
}



