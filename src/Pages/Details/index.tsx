import { XCircle, Star } from "lucide-react";
import * as S from "./styles";
import { ImageUrl } from "../../Services";

interface IDetails {
  title: string;
  description: string;
  closeModal: () => void;
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
}

export function Details({
  title,
  description,
  closeModal,
  poster_path,
  vote_average,
  vote_count,
  popularity,
  original_language,
}: IDetails) {
  const originalLanguage = original_language.toUpperCase();

  return (
    <S.Container>
      <S.modalDetails>
        <header>
          <h2>{title}</h2>
          <div className="closeModal">
            <XCircle color="#F63F60" onClick={closeModal} />
          </div>
        </header>
        <div className="informations">
          {<img src={ImageUrl + poster_path} />}

          <div className="details">
            <p>{description}</p>
            <ul>
              <li>
                <Star height={18} color="#f8ff00" />
                {vote_average}
              </li>
              <li>
                <strong>Amount:</strong> {vote_count}
              </li>

              <li>
                <strong>Preview:</strong>
                {popularity}
              </li>
              <li>
                <strong>Original language:</strong> {originalLanguage}
              </li>
            </ul>
          </div>
        </div>
      </S.modalDetails>
    </S.Container>
  );
}
