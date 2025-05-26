import styled from "styled-components";

const NotFoundContainer = styled.main`
  width: 100%;
  background-color: #EAEEF6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundBlock = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    padding: 40px 20px;
  }
`;

const NotFoundCode = styled.div`
  font-size: 120px;
  font-weight: 700;
  color: #94A6BE;
  line-height: 1;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

const NotFoundText = styled.div`
  font-size: 24px;
  color: #000000;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundBlock>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundText>Страница не найдена</NotFoundText>
      </NotFoundBlock>
    </NotFoundContainer>
  );
};