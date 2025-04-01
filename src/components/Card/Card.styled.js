import styled, { keyframes } from 'styled-components';

const themeColors = {
    'Web Design': {
      background: '#FFE4C2',
      text: '#FF6D00'
    },
    'Copywriting': {
      background: '#E9D4FF',
      text: '#9A48F1'
    },
    'Research': {
      background: '#BDFFDF',
      text: '#06B16E'
    }
  };

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    height: auto;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const cardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const cardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
  }
`;

export const cardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const cardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $theme }) => themeColors[$theme]?.background };

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $theme }) => themeColors[$theme]?.text };
  }
`;

export const cardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const cardBtnDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`;

export const cardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const cardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const cardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;