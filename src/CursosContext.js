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
          diasAula: [1, 2, 3, 0, 1, 0, 0],
          faltasColor: "blue"
        },
        {
          nomeDP: "Disciplina 2 Curso 1",
          faltas: 20,
          maxFaltas: 25,
          diasAula: [1, 2, 3, 0, 1, 0, 0],
          faltasColor: "blue"
        }
      ]
    },
    {
      curso: "Curso 2",
      disciplinas: [
        {
          nomeDP: "Disciplina 1 Curso 2",
          faltas: 1,
          maxFaltas: 10,
          diasAula: [1, 2, 3, 0, 1, 0, 0],
          faltasColor: "orange"
        },
        {
          nomeDP: "Disciplina 1 Curso 2",
          faltas: 15,
          maxFaltas: 20,
          diasAula: [1, 2, 3, 0, 1, 0, 0],
          faltasColor: "orange"
        }
      ]
    }
  ]);

  return (
    <CursosContext.Provider value={[cursos, setCursos]}>
      {props.children}
    </CursosContext.Provider>
  );
};
