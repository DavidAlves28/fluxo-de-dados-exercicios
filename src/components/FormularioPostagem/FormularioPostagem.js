import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState ("");
  const [titulo, setTitulo] = useState("")

 const trocarImagem = (event) =>{
  setImagem(event.target.value)
  
 } 
 const trocarDescricao = (event)=>{
 setDescricao(event.target.value)
  
 }
 const trocarTitulo =(event)=>{
  setTitulo(event.target.value)
 }


 const novoPost =(e)=>{
  e.preventDefault()
  const enviarPost = {
    titulo: titulo,
    imagem: imagem,
    descricao: descricao
  }
  props.setUsuario(enviarPost )
  setTitulo("")
  setImagem("")
  setDescricao("")
 }

  return (


    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form onSubmit={novoPost}>

        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id='titulo'
           value={titulo} onChange={trocarTitulo}
          />
        </StyledLabel>
        <StyledLabel htmlFor="imagem">
          Imagem:
          <Input id='imagem'
          value={imagem}   onChange={trocarImagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id='descricao'
          value={descricao} onChange={trocarDescricao}
          />
        </StyledLabel>
        <SendButton>POSTAR</SendButton>
      </Form>

    </FormContainer>


  );
};

export default FormularioCadastro;
