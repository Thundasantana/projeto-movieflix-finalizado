import { useForm } from 'react-hook-form';
import { requestBackend } from 'util/requests';
import Button from 'components/ButtonIcon';
import { Review } from 'type/review';
import { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  text: string;
  movieId: number;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        toast.info('Avaliação realizada com sucesso');
      })
      .catch((error) => {
        console.log('error');
      });
  };

  return (
    <div className="base-card card-containner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('text', {
              required: 'Campo obrigatório',
            })}
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
