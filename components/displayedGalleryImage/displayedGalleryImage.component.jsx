import { useContext } from 'react';
import { GalleryContext } from '../../context/galleryContext';
import Image from 'next/image';
import { DisplayedImage, ImageContainer } from './displayedGalleryImage.styles';
import closeIcon from '../../public/images/close_icon.svg';
import leftArrow from '../../public/images/left_arrow_icon.svg';

const testClick = () => {
    console.log('testclick');
};

export const DisplayedGalleryImage = ({ imagesData, index }) => {
    const {
        openGalleryState,
        setImageOpen,
        activeImageIndex,
        setActiveImageIndex,
    } = useContext(GalleryContext);

    return (
        <DisplayedImage>
            {(console.log(openGalleryState), console.log(activeImageIndex))}
            <ImageContainer>
                <Image src={closeIcon} alt="close" onClick={setImageOpen} />
                <Image
                    width={imagesData[index].width}
                    height={imagesData[index].height}
                    src={imagesData[index].image}
                    alt=""
                    priority="true"
                    // placeholder="blur"
                />
            </ImageContainer>
        </DisplayedImage>
    );
};
