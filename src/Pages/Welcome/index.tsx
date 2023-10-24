import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Buttom } from "../../Components/Buttom/styles";

export function Welcome() {

  const navigate = useNavigate();

  function handleLogin() {

    navigate('/Movies')

  }

  return (
    <S.Content>
      <>
        <S.ContainerImage>
          <ul className="background">
            <div className="greetings">
              <h1>Seja bem-vindo ao SBMovie</h1>
              <p>
                O seu destino definitivo para filmes e séries, onde você
                encontrará uma ampla seleção para assistir a qualquer momento.
              </p>

              <Buttom backgroundColor="#065e8a" width={20} onClick={handleLogin}>Começar</Buttom>

            </div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </S.ContainerImage>
      </>

    </S.Content>
  );
}
