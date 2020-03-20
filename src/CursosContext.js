import React, { useState, createContext } from "react";

export const CursosContext = createContext();


export const CursosProvider = props => {
  const [cursos,setCursos] = useState([

  ]);

  return (

    <CursosContext.Provider value={[cursos,setCursos]}>
      {props.children}
    </CursosContext.Provider>

  );
};
