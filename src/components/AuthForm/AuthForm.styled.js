import styled from "styled-components";

export const wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const modalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border: none;
    box-shadow: none;
  }
`;

export const modalTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const input = styled.input`
  width: 100%;
  min-width: 100%;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  border: 0.7px solid ${props => props.$error ? "rgba(248, 77, 77, 0.8)" : "rgba(148, 166, 190, 0.4)"};
  outline: none;
  padding: 8px 8px;
  margin-bottom: 7px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const authButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${props => props.disabled ? '#94A6BE' : '#565eef'};
  border-radius: 4px;
  margin-top: 13px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? '#94A6BE' : '#33399b'};
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const formGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;

export const error = styled.p`
  color: rgb(248, 77, 77);
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin-bottom: 7px;
`;
