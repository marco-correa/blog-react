import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 10px;
    font-family: "Lato", serif;
  }

  * {
    box-sizing: border-box;
  }
`;
