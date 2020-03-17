DROP database if EXISTS  Gerenciamento;

CREATE DATABASE Gerenciamento;

USE Gerenciamento;

Create Table Disciplinas (
    ID int not null auto_increment,
    diaAula int not null,
    horaAula int not null,
    primary key (ID)
)
