import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestPostReviewForm } from 'util/requests';
import Button from 'components/ButtonIcon';
import './styles.css';

type Props = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: number;
};

const ReviewForm = ({ movieId }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const [, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    requestPostReviewForm(formData)
      .then((response) => {
        setHasError(false);
        window.location.reload();
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <div className="base-card card-containner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('text')}
            type="text"
            name="text"
            className="form-control form-input base-input"
            placeholder="Deixe sua avaliação aqui"
          />
          <div className="form-submit">
            <Button text="Salvar Avaliação" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
