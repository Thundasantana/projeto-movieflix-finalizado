import ButtonIcon from 'components/ButtonIcon';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from 'AuthContext';
import { getTokenData } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies' } };

  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        console.log('ERRO', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo obrigatorio',
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>

        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
