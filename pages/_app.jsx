import { useState } from 'react';
import { useToggle } from '../hooks/useToggle';
import { ThemeProvider } from 'styled-components';

import './_app.css';
import { GalleryContext } from '../context/galleryContext';
import { GlobalStyle } from '../globals/reset.styles';

import { theme } from '../globals/theme';

function MyApp({ Component, pageProps }) {
    const testVal = 'test val';
    const funcTest = () => {
        console.log('testFunc');
    };
    const [openGalleryState, setImageOpen] = useToggle();
    const [activeImageIndex, setActiveImageIndex] = useState();
    return (
        <>
            <GlobalStyle />
            <GalleryContext.Provider
                value={{
                    testVal,
                    funcTest,
                    openGalleryState,
                    setImageOpen,
                    activeImageIndex,
                    setActiveImageIndex,
                }}
            >
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </GalleryContext.Provider>
        </>
    );
}

export default MyApp;
