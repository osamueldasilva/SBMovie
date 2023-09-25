import * as S from "./styles";

interface IInputText {
  width: number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}
export function InputText({ width, placeholder, onChange, type, value }: IInputText) {
  return (
    <>
      <S.InputsComponent
        type={type}
        width={width}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
