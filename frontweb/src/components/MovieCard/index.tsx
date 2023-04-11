import { Movie } from 'type/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={movie.imgUrl} alt="Nome do filme" />
      </div>
      <div className="card-bottom-container">
        <h6>{movie.title}</h6>
        <p>{movie.year}</p>
        <div className="card-subtitulo">
          <p>{movie.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
