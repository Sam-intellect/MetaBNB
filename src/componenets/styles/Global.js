import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.primary};
    color: hsl(192, 100%, 9%);
    font-family: 'Inter', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
