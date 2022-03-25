import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 62.6%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

`;
