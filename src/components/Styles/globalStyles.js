import { createGlobalStyle } from'styled-components';
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:before,
    *:after {
      box-sizing: border-box;
    }

    a,
    a:visited {
      text-decoration: none;
      cursor: pointer;
    }

    button,
    ._btn {
      cursor: pointer;
      outline: none;
    }

    ul li {
      list-style: none;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      color: #000000;
    }

    .wrapper {
        max-width: 100%;
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        background-color: #F1F1F1;
    }

    div,
    button,
    a {
        font-family: "Roboto", sans-serif;
    }

`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;