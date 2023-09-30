import { IResultsMovies } from "./IResultsMovies";

export interface IMovie {
    page: number;
    results: IResultsMovies[]
    total_pages: number;
    total_results: number;
}