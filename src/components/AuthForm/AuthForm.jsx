import { Link, useNavigate } from 'react-router-dom'
import  * as S from './AuthForm.styled';

export const AuthForm = ({ isSignUp, setIsAuth }) => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
    }


  return (
    <S.wrapper>
      <S.container>
        <S.modal>
          <S.modalBlock>
            <S.modalTitle>
              <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
            </S.modalTitle>
            <S.form>
              {isSignUp && (
                <S.input
                  type="text"
                  name="firstName"
                  placeholder="Имя"
                  required
                />
              )}
              <S.input
                type="email"
                name="email"
                placeholder="Эл. почта"
                required
              />
              <S.input
                type="password"
                name="password"
                placeholder="Пароль"
                required
              />
              <S.authButton onClick={handleLogin}>
                {isSignUp ? 'Зарегистрироваться' : 'Войти'}
              </S.authButton>
              <S.formGroup>
                {!isSignUp && (
                    <p>Нужно зарегистрироваться?
                    <Link to="/register">Регистрируйтесь здесь</Link>
                    </p>
                )}
                {isSignUp && (
                    <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
                )}
              </S.formGroup>
            </S.form>
          </S.modalBlock>
        </S.modal>
      </S.container>
    </S.wrapper>
  );
};