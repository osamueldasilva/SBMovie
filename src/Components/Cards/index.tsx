import * as S from "./styles";
import axios from "axios";
import { IMovie } from "../../Interfaces/IMovies";
import { useQuery } from "react-query";
import { ImageUrl } from "../../Services";
import { Button } from "../Buttom";
// import { Loading } from "../Loading";
import { useState } from "react";
import { Details } from "../../Pages/Details";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Loading } from "../Loading";

export function CardsMovie() {
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [countPage, setCountPage] = useState<number>(1);
  const routeApiMovie = "https://api.themoviedb.org/3/movie/popular";

  function modalDetails(id: number) {
    setDetailsId(id);
  }

  function closeModal() {
    setDetailsId(null);
  }

  const { data: dataMovies, isLoading } = useQuery(
    ["DataMovies", countPage],
    getDataMovie
  );
  async function getDataMovie() {
    try {
      const { data } = await axios.get<IMovie>(routeApiMovie, {
        params: { language: "en-US", page: countPage },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWE4ODdlMWEyY2Y0NWZiYmNlMGJhMjdiNWNjMzQ1ZiIsInN1YiI6IjY1MTM4NjBiMDc0NWUxMDBhYzU3NjVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln4she-2eGml6cfhpt19bJrxhfDQGFVcSjQEmMqS6eA",
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function arrowLeft() {
    setCountPage((prevState) => prevState - 1);
  }

  function arrowRigth() {
    setCountPage((prevState) => prevState + 1);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.HeaderMyFavorites>
            <h2>Popular</h2>
            <h2>Total: {dataMovies?.total_results}</h2>
          </S.HeaderMyFavorites>
          <S.ContainerCards>
            {dataMovies?.results.map(
              ({
                vote_count,
                vote_average,
                title,
                poster_path,
                id,
                overview,
                popularity,
                original_language,
              }) => (
                <>
                  <S.Card key={id}>
                    <div className="ImageCard">
                      <img
                        src={ImageUrl + poster_path}
                        alt={`Filme: ${title}`}
                      />
                    </div>
                    <div className="infCard">
                      {title}
                      <Button
                        onClick={() => modalDetails(id)}
                        text="Details"
                        backgroundColor="#0284C7"
                        width={12}
                      />
                    </div>
                    {detailsId === id && (
                      <Details
                        description={overview}
                        title={title}
                        closeModal={closeModal}
                        poster_path={poster_path}
                        id={id}
                        vote_average={vote_average}
                        vote_count={vote_count}
                        popularity={popularity}
                        original_language={original_language}
                      />
                    )}
                  </S.Card>
                </>
              )
            )}
            <footer>
              {countPage === 1 ? undefined : (
                <ArrowLeft
                  color="#0284C7"
                  height={48}
                  cursor={"pointer"}
                  onClick={arrowLeft}
                />
              )}
              <h3>{countPage}</h3>
              <h3>|</h3>
              <h3>{dataMovies?.total_pages}</h3>
              {countPage === dataMovies?.total_pages ? undefined : (
                <ArrowRight
                  color="#0284C7"
                  height={48}
                  cursor={"pointer"}
                  onClick={arrowRigth}
                />
              )}
            </footer>
          </S.ContainerCards>
        </>
      )}
    </>
  );
}
