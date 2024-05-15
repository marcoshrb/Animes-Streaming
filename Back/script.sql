create database if not exists anime_streaming;
use anime_streaming;

ALTER USER 'root'@'localhost' IDENTIFIED BY ''; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    adm BOOLEAN DEFAULT FALSE
);