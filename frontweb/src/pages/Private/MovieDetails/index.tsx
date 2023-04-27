import { useEffect, useState } from 'react';
import { BASE_URL } from 'util/requests';
import axios from 'axios';
import { Movie } from 'type/movie';

import './styles.css';
import { useParams } from 'react-router-dom';

type UrlParams = {
  movieId: string;
}

const MovieDetails = () => {

const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
    .then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <div className=" base-card movie-details-card">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={movie?.imgUrl}
               alt={movie?.title} />
            </div>

            <div className="title-year-subtitle-container">
              <h2>{movie?.title}</h2>
              <h4>{movie?.year}</h4>
              <p>{movie?.subTitle}</p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <p>{movie?.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
