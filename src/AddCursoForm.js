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
        className="cursoForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size="middle"
      >

        <Form.Item label="Nome curso">
          <Input />
        </Form.Item>


        <Form.Item label="Data inicio">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Data final">
          <DatePicker />
        </Form.Item>

        <DisciplinasModal/>
      </Form>
    </div>
  );
}
const DisciplinasForm = () => {
  return(
    <div>
    <Form
      labelCol={{ span: 4 }}
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

const DisciplinasModal = () => {
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

  const [showModal, setShowModal] = useState(false);

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
      <Button className="addCurso" type="primary" onClick={openModal}>
        Adicionar curso
      </Button>
      <Modal
        title="Adicionar curso"
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width="40vw"
      >
        <CursosForm />
      </Modal>
    </div>

  );
}
export default AddCursoForm;
