import React from 'react';
import Image from 'next/image';
import pointer from '../../public/images/pointer.svg';

import { PointTickWrapper, ImageWrapper, PointText } from './pointTick.styles';

export const PointTick = ({text}) => {

    return (
        <PointTickWrapper>
            <ImageWrapper>
                <Image
                    alt="background"
                    src={pointer}
                    layout="fill"
                    quality={100}
                />
            </ImageWrapper>
            <PointText>{text}</PointText>
        </PointTickWrapper>
    )
}