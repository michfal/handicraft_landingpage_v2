import { useContext } from 'react';
import { GalleryContext } from './galleryContext';
import { useToggle } from '../hooks/useToggle';

export const GalleryContextWrapper = ({ children }) => {
    let sharedState = 'testState';
    const [openGalleryState, setGalleryOpen] = useToggle(false);
    return (
        <GalleryContext.Provider
            value={(sharedState, openGalleryState, setGalleryOpen)}
        >
            {children}
        </GalleryContext.Provider>
    );
};

export const useGalleryContext = () => {
    return useContext(GalleryContext);
};
