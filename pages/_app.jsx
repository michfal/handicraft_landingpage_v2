// import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";


const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    darkGrayBlue: "#31506E",
    lightGrayBlue: "#4A78A6",
    purple: "#A06FD7",
    lightGray: "#E7EEF4"
  },
};

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
