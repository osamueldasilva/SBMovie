import axios from "axios";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "../../../Components/Buttom";
import { Loading } from "../../../Components/Loading";
import { IMovie } from "../../../Interfaces/IMovies";
import { ImageUrl, SearchApi, apiKey } from "../../../Services";
import { Details } from "../../Details";
import * as S from "../styles";

interface IResultsSearch {
  vlResult: string;
}

export function ResultsSearch({ vlResult }: IResultsSearch) {
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [countPage, setCountPage] = useState<number>(1);

  const searchWithQueryURL = `${SearchApi}?${apiKey}`;

  const { data: DataSearch, isLoading } = useQuery(
    ["DataSearch", countPage, vlResult],
    dataSearchResults
  );

  async function dataSearchResults() {
    try {
      const { data } = await axios.get<IMovie>(searchWithQueryURL, {
        params: { query: vlResult, language: "pt-br", page: countPage },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function closeModal() {
    setDetailsId(null);
  }

  function modalDetails(id: number) {
    setDetailsId(id);
  }

  function arrowLeft() {
    setCountPage((prevState) => prevState - 1);
  }

  function arrowRigth() {
    setCountPage((prevState) => prevState + 1);
  }
  return (
    <>
      <S.ContainerCards>
        {isLoading ? (
          <Loading />
        ) : DataSearch?.total_results === 0 ? (
          <S.Container>
            <h2>
              INFELIZMENTE, NÃO EXISTE NENHUM FILME RELACIONADO AO QUE FOI
              PESQUISADO😢😢
            </h2>
          </S.Container>
        ) : (
          <S.Container>
            <S.ContainerCards>
              {DataSearch?.results.map(
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
                )
              )}
            </S.ContainerCards>

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
              <h3>{DataSearch?.total_pages}</h3>
              {countPage === DataSearch?.total_pages ? undefined : (
                <ArrowRight
                  color="#0284C7"
                  height={48}
                  cursor={"pointer"}
                  onClick={arrowRigth}
                />
              )}
            </footer>
          </S.Container>
        )}
      </S.ContainerCards>
    </>
  );
}
