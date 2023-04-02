import { Movie, Series } from '../category/types';

export interface PersonDetailsWCredits {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: Date | null;
  deathday: Date | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string;
  combined_credits: CombinedCredits;
}

export interface CombinedCredits {
  cast: Cast[];
  crew: Cast[];
}

export type Cast = (Movie | Series) & {
  character: string;
  credit_id: string;
  order: number;
  department: string;
  job: string;
  episode_count: number;
};
