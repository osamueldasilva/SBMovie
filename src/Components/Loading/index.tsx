import * as S from "./styles";

export function Loading() {
  return (
    <S.Container>
      <div className="loader">
        <div className="loader__filmstrip"></div>
        <p className="loader__text">loading</p>
      </div>
    </S.Container>
  );
}
