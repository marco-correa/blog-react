import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Colors } from './tokens';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 16px;
    font-family: "Open Sans", serif;
    background-color: ${Colors.NeutralLightest};
  }

  * {
    box-sizing: border-box;
  }
`;
