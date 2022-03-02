import { useContext } from 'react';
import { GalleryContext } from '../../context/galleryContext';
import Image from 'next/image';
import { useScrollLock } from '../../hooks/useScrollLock';
import { DisplayedImage, ImageContainer } from './displayedGalleryImage.styles';
import closeIcon from '../../public/images/close_icon.svg';
import leftArrow from '../../public/images/left_arrow_icon.svg';
import rightArrow from '../../public/images/right_arrow_icon.svg';

export const DisplayedGalleryImage = ({ imagesData, index }) => {
    // const { lockScroll, unlockScroll } = useScrollLock();
    // lockScroll();
    const imagesArrayLength = imagesData.length;
    const {
        openGalleryState,
        setImageOpen,
        activeImageIndex,
        setActiveImageIndex,
    } = useContext(GalleryContext);
    // console.log(openGalleryState);

    const scrollRight = () => {
        if (index < imagesArrayLength - 1) {
            index++;
        }

        setActiveImageIndex(index);
    };

    const scrollLeft = () => {
        if (index >= 1) {
            index--;
        }

        setActiveImageIndex(index);
    };

    return (
        <DisplayedImage>
            <ImageContainer>
                <Image
                    width="40"
                    src={closeIcon}
                    alt="close"
                    onClick={setImageOpen}
                />
                <Image
                    width={imagesData[index].width}
                    height={imagesData[index].height}
                    src={imagesData[index].image}
                    alt="gallery image"
                    priority="true"
                />
                <Image
                    width="40"
                    height="40"
                    src={leftArrow}
                    alt="close"
                    onClick={scrollLeft}
                />
                <Image
                    width="40"
                    height="40"
                    src={rightArrow}
                    alt="close"
                    onClick={scrollRight}
                />
            </ImageContainer>
        </DisplayedImage>
    );
};
