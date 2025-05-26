import { useState, useEffect, useRef } from "react";
import { PopUser } from "../PopUser/PopUser";
import { Container } from "../Styles/globalStyles";
import * as S from "./Header.styled/";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isPopUserVisible, setIsPopUserVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const popUserRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const togglePopUser = () => {
    setIsPopUserVisible(!isPopUserVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (
        popUserRef.current &&
        !popUserRef.current.contains(event.target)  &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsPopUserVisible(false);
      }
    };

    if (isPopUserVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

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
              <Link to="/">
                <img src="/images/logo_dark.png" alt="logo" />
              </Link>
            </S.headerLogoDark>
          ) : (
            <S.headerLogo>
              <Link to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </S.headerLogo>
          )}
          <S.headerNav>
            <S.headerButton id="btnMainNew">
              <Link to="card/new">Создать новую задачу</Link>
            </S.headerButton>
            <S.headerUser ref={userButtonRef} onClick={togglePopUser}>Ivan Ivanov</S.headerUser>
            <div ref={popUserRef}>
            <PopUser $isPopUserVisible={isPopUserVisible} />
            </div>
          </S.headerNav>
        </S.headerBlock>
      </Container>
    </S.header>
  );
};
