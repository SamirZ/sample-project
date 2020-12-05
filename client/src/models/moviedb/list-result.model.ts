export default interface ListResult {
  poster_path: string;
  adult?: boolean;
  overview: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  backdrop_path: string;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  vote_count: number;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  origin_country?: string[];
  original_language: string;
  video?: boolean;
}
