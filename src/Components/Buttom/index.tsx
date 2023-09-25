import * as S from "./styles";

interface IButton {
  text: string;
  onClick: () => void;
  width: number;
  backgroundColor: string;
}

export function Button({ backgroundColor, onClick, text, width }: IButton) {
  return (
    <S.Buttom onClick={onClick} width={width} backgroundColor={backgroundColor}>
      {text}
    </S.Buttom>
  );
}
