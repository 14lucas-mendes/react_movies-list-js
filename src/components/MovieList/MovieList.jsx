import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';
import * as movies from '../../api/movies.json';

export const MovieList = () =>
  <>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </>
);
