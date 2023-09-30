import { Header } from "../../Components/Header";
import * as S from "./styles";

import { CardsMovie } from "../../Components/Cards";

export function ComedyMovies() {
  return (
    <>
      <Header />
      <S.Container>
        <CardsMovie />
      </S.Container>
    </>
  );
}
