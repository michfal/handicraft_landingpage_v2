import { useState, useEffect } from 'react';
import { size } from '../globals/theme';

export const nameWindowSize = (width) => {
    if (width >= size.laptop) return 'laptop';
    if (width >= size.tablet) return 'tablet';
    if (width < size.tablet) return 'mobile';
};

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

    const widthName = nameWindowSize(width);
    return widthName;
};
