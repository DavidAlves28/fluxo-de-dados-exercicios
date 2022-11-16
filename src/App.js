import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  // Exercicio useState para os inputs.
// exercicio 1 - Controlar os inputs corretamente
// - Agrupar esses dados em uma única variável
// - Assim que o usuário clicar em "Fazer login", o nome e a foto de perfil devem aparecer dentro do componente `Header` da aplicação. A imagem e o nome devem seguir as seguintes especificações: 
//     - Você pode usar o link da sua foto de perfil do Linkedin
//     - A imagem será redonda e terá 50px de altura e 50px de largura
//     - O nome do usuário deverá estar alinhado à imagem
//     - ambos estarão alinhados à esquerda da logo `Insta4` 

  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")

  //exercicio 2 
  // - Você deve ter percebido que a página não possui um botão e assim que passamos as props corretamente, a imagem e descrição já aparecem em tempo real. Consegue entender o motivo disso acontecer?

  // - Um comportamento que faria mais sentido seria existir um botão que ao clicar, a imagem, título e descrição aparecerem na tela, você conseguiria aplicar esta funcionalidade? Siga os passos a seguir para saber se você cumpriu todos os requisitos.
  
  
  // - Encontre uma forma de agrupar as informações dos 3 inputs em uma única variável de estado
  // - Ao invés de usar as variáveis de estado que controlam os inputs para mostrar o conteúdo na tela, use o novo estado que você criou
  // - Provavelmente, se os valores dessa sua nova variável forem `undefined` em algum momento, a sua página vai quebrar. Como você resolveria isso?
  // - Já existe um botão estilizado no arquivo styles do componente `FormularioCadastro`, use este botão e aplique uma função de onClick onde, ao clicar, a postagem apareça no espaço à direita da tela
  // 1° criar objeto para fazer transferencia de estados.

  const [usuario, setUsuario] = useState({
    titulo: "",
    imagem: "",
    descricao: ""

  })

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          {pageFlow === 1 ? (
            <>
              <Header />
              <FormularioLogin setPageFlow={setPageFlow} nome={nome} setNome={setNome} foto={fotoPerfil} setFoto={setFotoPerfil} />
            </>

          ) : (
            <>
              <Header nome={nome} foto={fotoPerfil} />
              {/* Enviar set para formulario ,  */}
              <FormularioPostagem setUsuario={setUsuario}  />
            </>

          )}
        </aside>
        <TelaDaPostagem  {...usuario} />

      </Container>

    </>
  );
}

export default App;
