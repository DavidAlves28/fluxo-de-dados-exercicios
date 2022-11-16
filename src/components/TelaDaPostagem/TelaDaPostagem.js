import React, { useState } from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";


const TelaDaPostagem = ({ imagem, titulo, descricao }) => {
  

  return (
    (imagem.length > 0 && titulo.length > 0 && descricao.length > 0 ? 
    
    (<ContainerPostagem>

      <TitleHeader>{titulo}</TitleHeader>
      <Image src={imagem} />
      <Description>{descricao}</Description>
      </ContainerPostagem>
    ) : (
      <ContainerPostagem>

        <TitleHeader>Título</TitleHeader>
        <Image src="https://picsum.photos/200/300" />
        <Description>Descrição</Description>
      </ContainerPostagem>))
  )
};

export default TelaDaPostagem;
