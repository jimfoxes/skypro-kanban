import * as S from "./PopExit.styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const PopExit = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    logout()
    navigate("/login");
  };

  return (
    <S.PopExitWrapper id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.ButtonButton onClick={handleLogout}>Да, выйти</S.ButtonButton>
              <S.ExitButtonNo >
                <S.ButtonLink to={-1}>Нет, остаться</S.ButtonLink>
              </S.ExitButtonNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExitWrapper>
  );
};
