import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'type/movie';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const List = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovies] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
      
    };

    requestBackend(config).then((response) => {
      setMovies(response.data);
    });
    
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        <div className="base-card movie-details-card">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-container">
                <img src={movie?.imgUrl} alt={movie?.imgUrl} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="name-movie">
                <h6>{movie?.subTitle}</h6>
                <p>{movie?.year}</p>
                <div className="subtitulo-descrition">
                  <p>{movie?.subTitle}</p>
                </div>
              </div>
              <div className="description-container">
                <p>{movie?.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
