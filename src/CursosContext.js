import React,{useState,createContext} from "react";




export const CursosContext = createContext();


export const CursosProvider = props => {
	const [cursos,setCursos] = useState(
	[
		{
		curso:"ADS",
			disciplinas:[
			{
					nomeDP:"DP1",
					faltas:8,
					maxFaltas:25,
					diasAula:[1,2,3,0,1,0,0],
					faltasColor:"blue"
				},
				{			nomeDP:"DP2",
							faltas:20,
							maxFaltas:25,
							diasAula:[1,2,3,0,1,0,0],
							faltasColor:"red"

				}
			]
		}
	]);


	return(
		<CursosContext.Provider value ={[cursos,setCursos]}>
			{props.children}
		</CursosContext.Provider>
	);
};
