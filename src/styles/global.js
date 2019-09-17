import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: none;
    box-sizing: border-box;
  }

  html{
    font-size:62.5%;
  }

  html, body, #root {
    min-height:100%;
  }

  body {
    background:${props => props.theme.body};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color:${props => props.theme.black};
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  label {
    margin-right: 1rem;
  }

  button, select {
    cursor: pointer;
  }
`;
