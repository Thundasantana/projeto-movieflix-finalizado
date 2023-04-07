import { AxiosRequestConfig } from 'axios';
import MovieCrudCard from 'pages/Private/Movies/MovieCrudCard';
import { useEffect, useState } from 'react';
import { Movie } from 'type/movie';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';

const ListMovie = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: 0,
        size: 4,
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="row">
      {page?.content.map((movie) => (
        <div key={movie.id} className="col-sm-6">
          <MovieCrudCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default ListMovie;
