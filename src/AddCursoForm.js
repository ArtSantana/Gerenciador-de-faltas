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
const DisciplinasForm = () => {
  return(
    <div className="dpForm">
    <Form

      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
    <Form.Item label="Nome Disciplina">
      <Input />
    </Form.Item>
    <Form.Item label="Nome Professor">
      <Input />
    </Form.Item>
    <Form.Item label="Limite de faltas">
      <InputNumber />
    </Form.Item>
    </Form>

    </div>
  );
}

export const DisciplinasModal = () => {
  const [showDPModal, setShowDPModal] = useState(false);

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
      <Modal
        title="Adicionar disciplina"
        visible={showDPModal}
        onOk={handleOkDP}
        onCancel={handleCancelDP}
        width="40vw"
      >
        <DisciplinasForm />
      </Modal>
    </div>

  );
}



function AddCursoForm(){

  const [cursos, setCursos] = useContext(CursosContext);
  const [showModal, setShowModal] = useState(false);


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


      setCursos(prevCursos =>[...cursos,data]);



    }

    const cursoSearch =  async (id_student) => {
    let data = {
      id_student:1
    };
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('/course/search',options);
    data = await response.json()
    Promise.resolve(data).then(() => {
      console.log(data);
    });
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
    <Button  className="loadCurso" type="primary" onClick={cursoSearch}>
      Carregar cursos
    </Button>
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
export default AddCursoForm;
