import { Movie, Person, Series } from '../category/types';

export interface Search {
  page: number;
  results: Array<Person | Movie | Series>;
  total_pages: number;
  total_results: number;
}

export interface SearchResult {
  movies: Array<Movie>;
  series: Array<Series>;
  people: Array<Person>;
}
