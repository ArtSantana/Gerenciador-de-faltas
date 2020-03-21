DROP database if EXISTS  Gerenciamento;

CREATE DATABASE Gerenciamento;

USE Gerenciamento;

Create Table Estudante (
    ID int not null auto_increment,
    user varchar (30) not null,
    pass varchar (30) not null,
    email varchar (50) not null,    
    
    primary key (ID)
);

INSERT INTO Estudante (user, pass, email) VALUES ('fernandinho', 'akira', 'fernandinho@akira');

Create Table Cursos (
    ID int not null auto_increment,    
    nome varchar (60),
    ID_Estudante int not null,

    foreign key (ID_Estudante) references Estudante(ID),
    primary key (ID)
);

Create Table Disciplinas (
    ID int not null auto_increment,
    nome varchar(30) not null,
    professor varchar(60) not null,
    diaAula int,
    horaAula int ,
    limite_faltas int not null,
    ID_Curso int not null,
    
    foreign key (ID_Curso) references Cursos (ID),
    primary key (ID)
);




Create Table Faltas (
    ID int not null auto_increment,
    ID_Disciplina int not null,    

    foreign key (ID_Disciplina) references Disciplinas (ID),
    primary key (ID)
);



select * from Disciplinas;