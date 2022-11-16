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
// exercicio 1 
  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")

  //exercicio 2 

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
