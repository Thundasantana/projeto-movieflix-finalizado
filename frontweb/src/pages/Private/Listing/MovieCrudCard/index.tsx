import { Movie } from 'type/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCrudCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-crud-card">
      <div className="movie-crud-card-top-container">
        <img src={movie.imgUrl} alt="Nome do Filme" />
      </div>
      <div className="movie-crud-card-bottom-container">
        <h6>{movie.title}</h6>
        <p>{movie.year}</p>
        <div className="movie-crud-card-subtitulo">
          <p>{movie.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCrudCard;
