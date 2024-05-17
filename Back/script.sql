create database if not exists anime_streaming;
use anime_streaming;

ALTER USER 'root'@'localhost' IDENTIFIED BY ''; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

create table if not exists Usuario (
	Id int primary key not null AUTO_INCREMENT,
    Nome varchar(255) not null,
	Email varchar(200) not null,
    Senha varchar(100) not null,
    IsAdmin boolean DEFAULT FALSE
);

create table if not exists Video (
	Id int primary key not null AUTO_INCREMENT,
    Titulo varchar(255) not null,
    Descricao varchar(255) not null,
    URL text not null
);

create table if not exists Assistir (
	Id int primary key not null AUTO_INCREMENT,
    UserId INT not null,
    VideoId INT not null,
    FOREIGN KEY (UserId) REFERENCES Usuario(Id),
    FOREIGN KEY (VideoId) REFERENCES Video(Id)
);

create table if not exists Filme(
	Id int primary key not null AUTO_INCREMENT,
    VideoId INT not null,
	FOREIGN KEY (VideoId) REFERENCES Video(Id)
);

create table if not exists Serie (
	Nome varchar(255) not null,
    Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
);

create table if not exists Serie_Episodio (
	Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    SerieId INT NOT NULL,
    VideoId INT NOT NULL,
    Numero_Ep INT NOT NULL,
    Temporada INT NOT NULL,
    FOREIGN KEY (SerieId) REFERENCES Serie(Id),
    FOREIGN KEY (VideoId) REFERENCES Video(Id)
);

create table if not exists Comentario (
	Id int primary key not null AUTO_INCREMENT,
	UserId int not null,
    VideoId int not null,
    Conteudo varchar(255) not null,
    FOREIGN KEY (UserId) REFERENCES Usuario(Id),
    FOREIGN KEY (VideoId) REFERENCES Video(Id)
);
