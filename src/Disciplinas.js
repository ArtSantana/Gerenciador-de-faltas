import React,{useState} from 'react';
import './App.css';

function Disciplinas(){



        //Configurando os hooks
	    let [profs,setProfs] = useState(
		    []
	    );

	    let [discps,setDiscp] = useState(
		    []
	    );

        let [faltas,setFaltas] = useState(
            []
	    );

        let [maxFaltas,setMaxFaltas] = useState(
            []
	    );
        
        let [formVisible,setForm] = useState("none");
        let [faltasFormVisible,setFaltasForm] = useState("none")

        
        const addDisciplina = e => {
            setProfs(profs = profs.concat(document.getElementById("Prof").value));
            setDiscp(discps = discps.concat(document.getElementById("Discipline").value));
            setFaltas(faltas = faltas.concat(0));
            setMaxFaltas(maxFaltas = maxFaltas.concat(document.getElementById("maxFaltas").value));
            document.getElementById("Prof").value = "";
            document.getElementById("Discipline").value = "";
            document.getElementById("maxFaltas").value = "";
            e.preventDefault();
            closeForm(e);

        }
        
        
        //Fun??es para abrir e fechar forma de adicionar disciplinas
        const color = "white";
        let style = { borderColor: color, backgroundColor: color };
        style.display = formVisible;

        function openForm() {
          setForm("block");
        }

        const closeForm = e => {

           setForm("none");        
            e.preventDefault();
        }

        //Fun??o para abrir e fechar forma de adicionar faltas
        let styleFaltas = { borderColor: color, backgroundColor: color };
        styleFaltas.display = faltasFormVisible;

        function faltasForm(){
            setFaltasForm("block");
              
		}

        //Incrementando faltas ao total da disciplina
        const addFaltas = e => {
            setFaltas(faltas +document.getElementById("FaltasAdd").value);  
            e.preventDefault();
		}
 

	return(
	<div className = "Disciplines">
        <button className="addDisciplina" onClick={openForm}>Adicionar disciplina</button>
	    {/*Forma para adicionar disciplinas */}
        <div className="form-popup" id="myForm" style= {style}>
            <form className="form-container">

                <label><b>Professor</b></label>
                <input type="text" id = "Prof"/>

                <label><b>Disciplina</b></label>
                <input type="text" id = "Discipline"/>

                <label><b>Limite de faltas</b></label>
                <input type="number" id = "maxFaltas"/>

                <button className = "btnAdd" onClick={addDisciplina}>Adicionar</button>
                <button className = "btnCancel" onClick={closeForm}>Cancelar</button>
                
                
            </form>
        </div>

        {/*Display das disciplinas, professores e faltas */}
        <div className = "DisciplinesDisplay">
             <div className = "ProfFlex">
	            {profs.map(professor => (
                
                    <div>
                        <p className="indivProf">Professor: {professor}</p>
                        <hr className="DIVIDER"/>
                </div>
                ))}
          
             </div>

              <div className = "DPFlex">
                    {discps.map(disciplina => (
                        <div>
                            <p className="indivDp">Disciplina: {disciplina}</p>
                            <hr className="DIVIDER"/>

                        </div>
                    ))}
              </div>

             <div className = "faltasFlex">
                    {faltas.map(faltasTotal => (
                        <div>
                            <p className="indivDp">Faltas atuais: {faltasTotal}</p>
                            <hr className="DIVIDER"/>

                        </div>
                    ))}
              </div>
               <div className = "faltasFlex">
                    {maxFaltas.map(faltasMax => (
                        <div>
                            <p className="indivDp">Limite de faltas:{faltasMax}</p>
                            <hr className="DIVIDER"/>
                           
                        </div>
                    ))}
              </div>
              <div className = "addFaltasFlex">
                    {maxFaltas.map(faltasMax => (
                        <button className = "btnAddFaltas">Adicionar faltas</button>
                       
                    ))}
              </div>

        </div>

	</div>

	)
}



export default Disciplinas;