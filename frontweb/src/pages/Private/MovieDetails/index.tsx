import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'type/review';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { hasAnyRoles } from 'util/auth';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';

import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  
  const { movieId } = useParams<urlParams>();

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

return (
  <div className="movie-details-container">
    <h1>Tela Detalhes do filme id: {movieId}</h1>
    {hasAnyRoles(['ROLE_MEMBER']) && <ReviewForm movieId={movieId} />}
    {reviews?.map((item) => (
      <div key={item.id}>
        <ReviewListing name={item.user.name} text={item.text} />
      </div>
    ))}
  </div>
);
};
export default MovieDetails;
