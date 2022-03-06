import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { GalleryContext } from '../../context/galleryContext';
import { HeaderBold } from '../headerBold/headerBold.component';
import { DisplayedGalleryImage } from '../displayedGalleryImage/displayedGalleryImage.component';
import { useScrollLock } from '../../hooks/useScrollLock';
import {
    GalleryWrapper,
    GalleryImages,
    GalleryDivider,
    GalleryImage,
} from './galleryContent.styles';

export const GalleryContent = ({ images }) => {
    const {
        openGalleryState,
        setImageOpen,
        activeImageIndex,
        setActiveImageIndex,
    } = useContext(GalleryContext);

    const handleImageClick = (e) => {
        const target = e.target;
        setActiveImageIndex(parseInt(target.dataset.index));
        setImageOpen();
    };

    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(() => {
        openGalleryState ? lockScroll() : unlockScroll();
    });
    return (
        <GalleryWrapper>
            <HeaderBold>Galeria</HeaderBold>
            <GalleryDivider />
            {openGalleryState && (
                <DisplayedGalleryImage
                    imagesData={images}
                    index={activeImageIndex}
                />
            )}
            <GalleryImages>
                {images.map((image, index) => {
                    return (
                        <GalleryImage
                            data-index={index}
                            key={image.id}
                            onClick={handleImageClick}
                        >
                            <Image
                                width={image.width}
                                height={image.height}
                                src={image.image}
                                alt=""
                            />
                        </GalleryImage>
                    );
                })}
            </GalleryImages>
        </GalleryWrapper>
    );
};
