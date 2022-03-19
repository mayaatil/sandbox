DROP DATABASE IF EXISTS recipeme_db;
CREATE DATABASE recipeme_db;


create table recipes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    description text,
    image_url varchar (200)
    );
    
    create table ingredients (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar (30) not null
    );
    
    
    create table recipes_ingredients (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     recipe_id int,
     FOREIGN KEY (recipe_id)
     REFERENCES recipes(id)
     ON DELETE CASCADE,
     ingredient_id int,
     FOREIGN KEY (ingredient_id)
     REFERENCES ingredients(id)
	ON DELETE cascade )
    