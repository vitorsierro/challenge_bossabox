import React, { useState } from "react";
import { enviar } from "../../pages/api/tools";
import styled from "../../styles/Modal.module.css";
import { Typography, Button, Input } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function Modal({ onClose = () => {} }) {
  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tags, setTags] = useState("");

  function handleClick() {
    const dados = {
      title: titulo,
      link: link,
      description: descricao,
      tags: [tags],
    };
    enviar(dados);
    onClose();
    window.location.reload();
  }

  return (
    <div className={styled.Modal}>
    <form className={styled.Form}>
      <header className={styled.Header}>
        <Title style={{marginRight:'1.5rem'}}>+ Add nova ferramenta</Title>
        <Button
          type="text"
          danger
          shape="circle"
          size="large"
          icon={<CloseCircleOutlined />}
          onClick={onClose}
        />
      </header>
      <main className={styled.Corpo}>
        <Text>Nome do Titulo:</Text>
        <Input
          placeholder="Insira o titulo aqui!"
          required
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
        />

        <Text style={{ marginTop: "1rem" }}>Link:</Text>
        <Input
          placeholder="Insira o link aqui!"
          required
          onChange={(event) => {
            setLink(event.target.value);
          }}
        />

        <Text style={{ marginTop: "1rem" }}>Texto da descrição:</Text>
        <TextArea
          required
          placeholder="Insira a descrição aqui!"
          autoSize={{ maxRows: 5 }}
          onChange={(event) => {
            setDescricao(event.target.value);
          }}
        />

        <Text style={{ marginTop: "1rem" }}>Nomes das tags:</Text>
        <Input
          placeholder="insira as tags aqui separadas por espaço!"
          required
          onChange={(event) => {
            setTags(event.target.value);
          }}
        />
      </main>
      <footer>
        <Button
          shape="round"
          type="primary"
          size="large"
          style={{ float: "right" }}
          onClick={() => {
            handleClick();
          }}
        >
          Adicionar
        </Button>
      </footer>
    </form>
    </div>
  );
}
