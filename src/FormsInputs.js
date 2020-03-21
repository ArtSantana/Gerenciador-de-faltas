import React, { useState, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";

import "./App.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";
import { Modal} from "antd";


{/*Contains the forms and functions for adding subjects to the DB*/}

export const DisciplinasModal = (props) => {
  const [cursos, setCursos] = useContext(CursosContext);
  const [showDPModal, setShowDPModal] = useState(false);


  const DisciplinasForm = () => {
    return (
      <div className="dpForm">
        <Form wrapperCol={{ span: 18 }} layout="horizontal">
          <Form.Item label="Nome Disciplina" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input id="NomeDP"/>
          </Form.Item>
          <Form.Item label="Nome Professor">
            <Input  id="ProfessorDP" />
          </Form.Item>
          <Form.Item label="Limite de faltas">
            <InputNumber id = "numFaltas" />
          </Form.Item>
          <div className="diasAula">
            <label className="AulasLabel">Aulas por dia</label>
            <div classname="individualDay">
              <Form.Item label="Segunda">
                <InputNumber className="diasAulaInput" id="Monday" />
              </Form.Item>
            </div>
            <div classname="individualDay">
              <Form.Item label="Terça">
                <InputNumber className="diasAulaInput" id="Thursday" />
              </Form.Item>
            </div>
            <div classname="individualDay">
              <Form.Item label="Quarta">
                <InputNumber className="diasAulaInput" id="Wednesday" />
              </Form.Item>
            </div>
            <div classname="individualDay">
              <Form.Item label="Quinta">
                <InputNumber className="diasAulaInput" id="Tuesday" />
              </Form.Item>
            </div>
            <div classname="individualDay">
              <Form.Item label="Sexta">
                <InputNumber className="diasAulaInput" id="Friday"/>
              </Form.Item>
            </div>
            <div classname="individualDay">
              <Form.Item label="Sábado">
                <InputNumber className="diasAulaInput" id="Saturday" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    );
  };

  {/*Insert disciplines into current selected course(props.selectIndex) based on form inputs*/}
  const subjectAdd = (professor, nome, limite_faltas, ID_Curso,index) => {
      let data = {

          "name_curso": props.cursoIndex.nome,
          "professor": (document.getElementById("ProfessorDP").value),
          "name": (document.getElementById("NomeDP").value),
          "limite_faltas": (document.getElementById("numFaltas").value)

      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch('/subject/create', options);
      console.log(data);
      subjectSearch();

    }

    {/*Select subjects from DB and assign them to cursosContext State*/}
    const subjectSearch =  async (id_course) => {
        let data = {
        	id_course: props.cursoIndex.ID
        }
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        const response = await fetch('/subject/search',options);
        data = await response.json()
        Promise.resolve(data).then(() => {
          console.log(data);
          let newData = [...cursos];
          let subjects = {Disciplines:data};
          newData[props.cursoIndex.ID - 1]["Disciplines"] = data;
          setCursos(newData);
          console.log(newData);

        });
    }



    const openDPModal = () => {
      setShowDPModal(true);
    };

    const handleOkDP = e => {
      setShowDPModal(false);
    };

    const handleCancelDP = e => {
      setShowDPModal(false);
    };

  return (
    <div>
      <Button className="addDP" type="primary" onClick={openDPModal}>
        Adicionar disciplina
      </Button>
      <Button  className="addCurso" type="primary" onClick={subjectSearch}>
        Load subjects
      </Button>
      <Modal
        title="Adicionar disciplina"
        visible={showDPModal}
        onOk={subjectAdd}
        onCancel={handleCancelDP}
        width="70vw"
      >
        <DisciplinasForm />
      </Modal>
    </div>

  );
}


{/*Contains the forms and functions for adding courses to the DB*/}

function FormsInputs(){

  const [cursos, setCursos] = useContext(CursosContext);
  const [showModal, setShowModal] = useState(false);

  const CursosForm = () => {
    return(

      <div>
        <Form

          wrapperCol={{ span: 14 }}
          layout="horizontal"

        >

          <Form.Item  label="Nome curso">
            <Input id = "CursoInput" />
          </Form.Item>


          <Form.Item label="Data inicio">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Data final">
            <DatePicker />
          </Form.Item>


        </Form>
      </div>
    );
  }

  {/*Select courses from DB and assign them to cursosContext State*/}
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


{/*Insert course into DB from input form*/}
  const cursoAdd = (course, id) => {
      let data = {
        name:(document.getElementById("CursoInput").value),
        id:"1"
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch('/course/create', options);

      cursoSearch();


    }





    const openModal = () => {
      setShowModal(true);
    };

    const handleOk = e => {
      setShowModal(false);
    };

    const handleCancel = e => {
      setShowModal(false);
    };


  return (
    <div>
      <Button  className="addCurso" type="primary" onClick={openModal}>
        Adicionar curso
      </Button>


      <Modal
        title="Adicionar curso"
        visible={showModal}
        onOk={cursoAdd}
        onCancel={handleCancel}
        width="40vw"
      >
        <CursosForm />
      </Modal>
    </div>

  );
}
export default FormsInputs;
