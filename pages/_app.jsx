import { ThemeProvider } from "styled-components";

import './_app.css';
import { GlobalStyle } from "../globals/reset.styles";

import { theme, size } from "../globals/theme";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
