import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);

  };
  const trocarNome = (e)=>{
    props.setNome(e.target.value)
  } ;
  const trocarFoto = (e)=>{
    props.setFoto(e.target.value)
  } ;
  // exercicio 2

  return (
    <FormContainer>
      <Form>
        <StyledLabel htmlFor="nome">
          Nome:
          <Input id="nome"
          value={props.nome} onChange={trocarNome} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Foto de Perfil
          <Input id="foto" 
            value={props.foto} onChange={trocarFoto}
          />
        </StyledLabel>
        <SendButton onClick={login} >Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
