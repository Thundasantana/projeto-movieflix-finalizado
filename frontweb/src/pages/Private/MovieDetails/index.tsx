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

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <div className=" base-card movie-details-card">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
                alt="nome do filme"
              />
            </div>
          </div>
          <div className="title-year-subtitle-container">
            <h2>nome do filme</h2>
            <h4>ano</h4>
            <p>subtitulo</p>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      {reviews?.map((item) => (
        <div key={item.id}>
          <ReviewListing name={item.user.name} text={item.text} />
        </div>
      ))}
    </div>
  );
};
export default MovieDetails;
