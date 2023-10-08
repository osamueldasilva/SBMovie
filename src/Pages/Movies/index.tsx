import { Header } from "../../Components/Header";
import * as S from "./styles";

import axios from "axios";
import { IMovie } from "../../Interfaces/IMovies";
import { useQuery } from "react-query";
import { ImageUrl, apiKey, moviesURL } from "../../Services";
import { useState } from "react";
import { Details } from "../../Pages/Details";
import { ArrowLeft, ArrowRight, Filter, Search, X } from "lucide-react";
import { Loading } from "../../Components/Loading";
import { Button } from "../../Components/Buttom";
import { InputText } from "../../Components/InputText";
import { ResultsSearch } from "./ResultsSearch";

export function Movies() {
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [countPage, setCountPage] = useState<number>(1);
  const [openFilter, setopenFilter] = useState<boolean>(false);
  const [resultSearch, setResultSearch] = useState<string>("");
  const [vlResultProps, setVlResultProps] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const routeApiMovie = `${moviesURL}top_rated?${apiKey}`;

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
        params: { language: "pt-br", page: countPage },
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

  function getSearchResults() {
    setOpenSearch(true);
    setVlResultProps(resultSearch);
  }

  return (
    <>
      <Header />

      <S.Container>
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <S.HeaderMovies>
                <div className="Filter">
                  <div></div>
                  {!openFilter ? (
                    <>
                      <Filter
                        color="#0284C7"
                        width={32}
                        height={32}
                        cursor={"pointer"}
                        onClick={() => setopenFilter(true)}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="actions">
                        <InputText
                          placeholder="Digite o nome do filme"
                          type="text"
                          width={20}
                          value={resultSearch}
                          onChange={(e) => setResultSearch(e.target.value)}
                        />
                        <S.Button
                          backgroundColor="#0284C7"
                          onClick={getSearchResults}
                        >
                          <Search color="#fafafa" />
                        </S.Button>

                        <Button
                          onClick={() => {
                            setResultSearch("");
                            setOpenSearch(false);
                          }}
                          text="Limpar filtro"
                          backgroundColor="#737373"
                          width={7}
                        />
                        <S.Button
                          backgroundColor="#F63F60"
                          onClick={() => setopenFilter(false)}
                        >
                          <X color="#fafafa" />
                        </S.Button>
                      </div>
                    </>
                  )}
                </div>
                <div className="infMovies">
                  {!openSearch ? (
                    <>
                      <h2>Filmes</h2>
                    </>
                  ) : (
                    <h2>{vlResultProps}</h2>
                  )}
                </div>
              </S.HeaderMovies>
              <></>

              {!openSearch ? (
                <>
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
                    {countPage !== 1 && (
                      <ArrowLeft
                        color="#0284C7"
                        height={48}
                        cursor="pointer"
                        onClick={arrowLeft}
                      />
                    )}
                    <h3>{countPage}</h3>
                    <h3>|</h3>
                    <h3>{dataMovies?.total_pages}</h3>
                    {countPage !== dataMovies?.total_pages && (
                      <ArrowRight
                        color="#0284C7"
                        height={48}
                        cursor="pointer"
                        onClick={arrowRigth}
                      />
                    )}
                  </footer>
                </>
              ) : (
                <>
                  <S.ContainerCards>
                    <ResultsSearch vlResult={vlResultProps} />
                  </S.ContainerCards>
                </>
              )}
            </>
          )}
        </>
      </S.Container>
    </>
  );
}
