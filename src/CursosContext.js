import React, { useState, createContext } from "react";

export const CursosContext = createContext();

export const CursosProvider = props => {
  const [cursos, setCursos] = useState([
    {
      curso: "Curso 1",
      disciplinas: [
        {
          nomeDP: "Disciplina 1 Curso 1",
          faltas: 8,
          maxFaltas: 25,
          professor:"Professor Fulano"
        },
        {
          nomeDP: "Disciplina 2 Curso 1",
          faltas: 20,
          maxFaltas: 25,
          professor:"Professor Fulano"
        }
      ],
    },
    {
      curso: "Curso 2",
      disciplinas: [
        {
          nomeDP: "Disciplina 1 Curso 2",
          faltas: 1,
          maxFaltas: 10,
          professor:"Professor Fulano"
        },
        {
          nomeDP: "Disciplina 1 Curso 2",
          faltas: 15,
          maxFaltas: 20,
          professor:"Professor Fulano"
        }
      ],
    },
    {
      curso: "Curso 3",
      disciplinas: [
        {
          nomeDP: "Disciplina 1 Curso 3",
          faltas: 10,
          maxFaltas: 10,
          professor:"Professor Fulano"
        },
        {
          nomeDP: "Disciplina 2 Curso 3",
          faltas: 1,
          maxFaltas: 20,
          professor:"Professor Fulano"
        }
      ],
    }
  ]);

  return (
    <CursosContext.Provider value={[cursos, setCursos]}>
      {props.children}
    </CursosContext.Provider>
  );
};
