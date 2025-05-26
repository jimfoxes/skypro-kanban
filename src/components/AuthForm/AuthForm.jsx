import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthForm.styled";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [error, setError] = useState("");

  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // };

  const validateForm = () => {
    const newErrors = { name: false, email: false, password: false };

    let isValid = true;
    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(
        !isSignUp
          ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
          : "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    // if (!formData.email.trim() || !validateEmail(formData.email)) {
    if (!formData.email.trim()) {
      newErrors.email = true;
      setError(
        !isSignUp
          ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
          : "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError(
        !isSignUp
          ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
          : "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    const checkErrors = Object.values(errors).some(Boolean)
    if (!checkErrors) {
          setError("");
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.email, password: formData.password })
        : await signUp({
            name: formData.name,
            login: formData.email,
            password: formData.password,
          });

      if (data) {
        updateUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.wrapper>
      <S.container>
        <S.modal>
          <S.modalBlock>
            <S.modalTitle>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </S.modalTitle>
            <S.form>
              {isSignUp && (
                <S.input
                  $error={errors.name}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              )}
              <S.input
                $error={errors.email}
                type="email"
                name="email"
                placeholder="Эл. почта"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <S.input
                $error={errors.password}
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <S.error>{error}</S.error>
              <S.authButton
                onClick={handleSubmit}
                disabled={Object.values(errors).some(Boolean)}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.authButton>

              <S.formGroup>
                {!isSignUp && (
                  <p>
                    Нужно зарегистрироваться?
                    <Link to="/register">Регистрируйтесь здесь</Link>
                  </p>
                )}
                {isSignUp && (
                  <p>
                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  </p>
                )}
              </S.formGroup>
            </S.form>
          </S.modalBlock>
        </S.modal>
      </S.container>
    </S.wrapper>
  );
};
