import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.$active ? "1" : "0.4")};
  background-color: ${(props) => {
    if (props.$orange) return "#FFE4C2";
    if (props.$green) return "#B4FDD1";
    if (props.$purple) return "#E9D4FF";
    if (props.$gray) return "#94A6BE";
    return "transparent";
  }};
  color: ${(props) => {
    if (props.$orange) return "#FF6D00";
    if (props.$green) return "#06B16E";
    if (props.$purple) return "#9A48F1";
    if (props.$gray) return "#FFFFFF";
    return "inherit";
  }};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusWrapper = styled.div`
  margin-bottom: 11px;
`;

export const StatusParagraph = styled.div`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${(props) => {
    if (props.$gray) return "#94A6BE";
    return "transparent";
  }};
  color: ${(props) => {
    if (props.$gray) return "#FFFFFF";
    return "inherit";
  }};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const Subtitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const ButtonActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 495px) {
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  

  @media screen and (max-width: 495px) {
    width: 100%;
    margin-bottom: 10px;

    button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;


export const ButtonBrowse = styled.button`
  height: 30px;
  padding: 0 14px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: ${(props) => (props.$bordered ? "0.7px solid #565EEF" : "none")};
  outline: none;
  background: ${(props) => (props.$bordered ? "transparent" : "#565EEF")};
  color: ${(props) => (props.$bordered ? "#565EEF" : "#FFFFFF")};
  cursor: pointer;
  margin-right: ${props => props.$group ? '8px' : '0'};
  a {
    color: ${(props) => (props.$bordered ? "#565EEF" : "#FFFFFF")};
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) =>
      props.$bordered ? "transparent" : "#33399b"};
    color: ${(props) => (props.$bordered ? "#33399b" : "#FFFFFF")};

    a {
      color: ${(props) => (props.$bordered ? "#33399b" : "#FFFFFF")};
    }
  }

  @media screen and (max-width: 495px) {
    height: 40px;
    width: 100%;
  }
`;

export const HiddenContent = styled.div`
  display: none;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: #000;
  text-align: center;
  padding: 20px;
`;
