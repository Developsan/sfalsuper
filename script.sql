CREATE TABLE `autores` (
  `autores_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`autores_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `libros` (
  `libros_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `editorial` varchar(255) DEFAULT NULL,
  `autores_id` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  `idioma` varchar(255) DEFAULT NULL,
  `paginas` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`libros_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_COUNT_BOOKS_BY_AUTHOR`()
BEGIN 
	SELECT
	name,
	(SELECT COUNT(libros_id) from libros where libros.autores_id = autores.autores_id) as libros
	FROM 
	autores;
	END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_INSERT_AUTHORS`(in Nombre varchar(255))
begin 
 insert into autores (name)
 VALUES (Nombre);
 end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_INSERT_BOOK`(
 IN Nombre varchar(255),
 IN Editorial varchar(255),
 IN Autores_id int,
 IN Descripcion varchar(255),
 IN Precio double,
 IN Idiomas VARCHAR(255),
 IN Paginas int(255)
)
BEGIN
	insert into libros(nombre,editorial,autores_id,descripcion,precio,idioma,paginas) 
	values(Nombre,Editorial,Autores_id,Descripcion,precio,Idiomas,Paginas);
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_INSERT_USER`(
 IN Nombre varchar(255),
 IN Contrasena VARCHAR(255),
 IN Email VARCHAR(255)
)
BEGIN
	insert into usuarios(nombre,contrasena,email) 
	values(Nombre,Contrasena,Email);
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_SELECT_BOOK_AUTHOR`(
	IN Author_id INT
)
BEGIN 
	SELECT l.nombre as nombre_libro,a.name as nombre_autor
	FROM 
	libros AS l
	INNER JOIN autores a 
	ON l.autores_id = a.autores_id
	where l.autores_id = Author_id;
	END$$
DELIMITER ;

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
