create database if not exists anime_streaming;
use anime_streaming;

ALTER USER 'root'@'localhost' IDENTIFIED BY ''; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

create table if not exists Usuario (
	Id int primary key not null AUTO_INCREMENT,
    Nome varchar(255) not null,
	Email varchar(200) not null,
    Senha varchar(50) not null,
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
    FOREIGN KEY (UserId) REFERENCES Usuario(UserId),
    FOREIGN KEY (VideoId) REFERENCES Video(VideoId)
);

create table if not exists Filme(
	Id int primary key not null AUTO_INCREMENT,
    VideoId INT not null,
	FOREIGN KEY (VideoId) REFERENCES Video(VideoId)
);

create table if not exists Serie(
	Id int primary key not null AUTO_INCREMENT,
    VideoId INT not null,
    Temporada Int not null,
    Numero_Episodios Int not null
);

create table if not exists Episodio(
	Id int primary key not null AUTO_INCREMENT,
    SerieId Int not null,
    Numero_Ep Int not null,
    Titulo varchar(200) not null
);

create table if not exists Comentario (
	Id int primary key not null AUTO_INCREMENT,
	UserId int not null,
    VideoId int not null,
    Conteudo varchar(255) not null,
    FOREIGN KEY (UserId) REFERENCES Usuario(UserId),
    FOREIGN KEY (VideoId) REFERENCES Video(VideoId)
);

create table if not exists Usuario (
	Id int primary key not null AUTO_INCREMENT,
    UserId int not null,
    VideiId int not null,
    FOREIGN KEY (UserId) REFERENCES Usuario(UserId),
    FOREIGN KEY (VideoId) REFERENCES Video(VideoId)
);