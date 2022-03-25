import { sizes } from './breakpoints';

export const theme = {
    colors: {
        darkGrayBlue: '#31506E',
        lightGrayBlue: '#4A78A6',
        violet: '#A06FD7',
        lightGray: '#E7EEF4',
        light: '#F8F4FC',
    },
    breakpoints: {
        // mobileS: '320px',
        mobile: `${sizes.mobile}px`,
        // mobileL: '425px',
        tablet: `${sizes.tablet}px`,
        laptop: `${sizes.laptop}px`,
        // laptopL: '1440px',
        // desktop: '2560px'
    },
};
