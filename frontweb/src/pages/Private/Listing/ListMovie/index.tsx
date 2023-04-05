import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'type/movie';
import { requestBackend } from 'util/requests';
import MovieCrudCard from '../MovieCrudCard';

const ListMovie = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies${movieId',
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {movie?.genre.map((movie) => (
          <div key={movie.id} className="col-xl-4">
            <MovieCrudCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMovie;
