import { useState, useEffect } from 'react';
import { sizes } from '../globals/theme';

// export const nameWindowSize = (width) => {
//     if (width >= sizes.laptop) return 'laptop';
//     if (width >= sizes.tablet) return 'tablet';
//     if (width < sizes.tablet) return 'mobile';
// };

export const useWindowSize = () => {
    // const [width, setWidth] = useState([window.innerWidth])
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const widthName = nameWindowSize(width);
    return width;
};
