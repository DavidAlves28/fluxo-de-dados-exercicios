import React from 'react';
import { TitleHeader, Image, ContainerHeader } from './styled'
export const Header = ({ nome, foto }) => {
   
    return (
        <ContainerHeader>
            <Image src={foto}></Image>
            <h2>{nome}</h2>
            <TitleHeader>
                Insta4
            </TitleHeader>
        </ContainerHeader>

    )
}