import { useContext } from 'react';
import { GalleryContext } from '../../context/galleryContext';
import Image from 'next/image';
import {
    DisplayedImage,
    ImageContainer,
    ArrowContainer,
    CloseIconContainer,
} from './displayedGalleryImage.styles';
import closeIcon from '../../public/images/close_icon.svg';
import leftArrow from '../../public/images/left_arrow_icon.svg';
import rightArrow from '../../public/images/right_arrow_icon.svg';

export const DisplayedGalleryImage = ({ imagesData, index }) => {
    const imagesArrayLength = imagesData.length;
    const { setImageOpen, setActiveImageIndex } = useContext(GalleryContext);

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
                <CloseIconContainer>
                    <Image
                        width="40"
                        height="40"
                        src={closeIcon}
                        alt="close"
                        onClick={setImageOpen}
                    />
                </CloseIconContainer>

                <Image
                    width={imagesData[index].width}
                    height={imagesData[index].height}
                    src={imagesData[index].image}
                    alt="gallery image"
                    priority="true"
                />
                <ArrowContainer>
                    <Image
                        width="40"
                        height="40"
                        src={leftArrow}
                        alt="arrow left"
                        onClick={scrollLeft}
                    />
                    <Image
                        width="40"
                        height="40"
                        src={rightArrow}
                        alt="arrow right"
                        onClick={scrollRight}
                    />
                </ArrowContainer>
            </ImageContainer>
        </DisplayedImage>
    );
};
