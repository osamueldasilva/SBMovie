import * as S from "./styles";
import axios from "axios";
import { IMovie } from "../../Interfaces/IMovies";
import { useQuery } from "react-query";
import { ImageUrl, apiKey, moviesURL } from "../../Services";
import { Button } from "../Buttom";
// import { Loading } from "../Loading";
import { useState } from "react";
import { Details } from "../../Pages/Details";

export function CardsMovie() {
  const routeApiMovie = `${moviesURL}/top_rated?${apiKey}`;
  const [detailsId, setDetailsId] = useState<number | null>(null);

  function modalDetails(id: number) {
    setDetailsId(id);
  }

  function closeModal() {
    setDetailsId(null);
  }

  const { data: dataMovies, isLoading } = useQuery(
    ["DataMovies"],
    getDataMovie
  );

  async function getDataMovie() {
    try {
      const { data } = await axios.get<IMovie>(routeApiMovie, {
        headers: {
          Authorization: "Bearer 81a887e1a2cf45fbbce0ba27b5cc345f",
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          <S.HeaderMyFavorites>
            <h2>Best movies</h2>
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
          </S.ContainerCards>
        </>
      )}
    </>
  );
}
