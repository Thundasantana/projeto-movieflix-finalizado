import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'type/movie';
import { requestBackend } from 'util/requests';
import { Review } from 'type/review';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { hasAnyRoles } from 'util/auth';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <div className="movie-details-container">
        <div className="base-card movie-details-card">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-container">
                <img src={movie?.imgUrl} alt={movie?.imgUrl} />
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
        <div>
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
          )}
          {reviews?.map((item) => (
            <div key={item.id}>
              <ReviewListing name={item.user.name} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
