import { Film, Home, Video } from "lucide-react";
import * as S from "./styles";

export function Sidebar() {
  return (
    <>
      <S.Container>
        <S.Navigate>
          <button className="IconsNavigate">
            <Home color="#525252" size={40} cursor={"pointer"} />
          </button>
          <button className="IconsNavigate">
            <Film color="#525252" size={40} cursor={"pointer"} />
          </button>
          <button className="IconsNavigate">
            <Video color="#525252" size={40} cursor={"pointer"} />
          </button>
        </S.Navigate>
      </S.Container>
      {/* <S.Content>{children}</S.Content> */}
    </>
  );
}
