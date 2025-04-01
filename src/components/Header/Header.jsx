import React, { useState, useEffect } from "react";
import { PopUser } from "../PopUser/PopUser";
import { Container } from "../Styles/globalStyles";
import * as S from "./Header.styled/"

export const Header = () => {
  const [isPopUserVisible, setIsPopUserVisible] = useState(false);
  const [isDark, setIsDark] = useState(false); 

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const togglePopUser = () => {
    setIsPopUserVisible(!isPopUserVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (isPopUserVisible && !event.target.closest('.header__pop-user-set')) {
            setIsPopUserVisible(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopUserVisible]);

    return (
  <S.header>
    <Container>
      <S.headerBlock>
      {isDark ? (
            <S.headerLogoDark>
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </S.headerLogoDark>
          ) : (
            <S.headerLogo>
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </S.headerLogo>
          )}
        <S.headerNav>
          <S.headerButton id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </S.headerButton>
          <S.headerUser href="#user-set-target" onClick={togglePopUser}>
            Ivan Ivanov
          </S.headerUser>
          {isPopUserVisible && <PopUser />}
        </S.headerNav>
      </S.headerBlock>
    </Container>
  </S.header>
    );
};

