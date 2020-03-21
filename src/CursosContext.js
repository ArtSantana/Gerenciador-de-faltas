import React, { useState, createContext,useEffect } from "react";

export const CursosContext = createContext();


export const CursosProvider = props => {
  const [cursos,setCursos] = useState([

  ]);

  const cursoSearch =  async (id_student) => {
  let data = {
    id_student:1
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const response = await fetch('/course/search',options);
  data = await response.json()
  Promise.resolve(data).then(() => {
    console.log(data);
    setCursos(data);
    console.log(cursos);
  });
}


 useEffect(() => {
      // Update the document title using the browser API
      cursoSearch();
    },[]);

  return (

    <CursosContext.Provider value={[cursos,setCursos]}>
      {props.children}
    </CursosContext.Provider>

  );
};
