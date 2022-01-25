import React from 'react';
import Image from 'next/image';
import pointer from '../../public/images/pointer.svg';
import { Paragraph } from '../paragraph/paragraph.component';

import { PointTickWrapper, ImageWrapper } from './pointTick.styles';

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
            <Paragraph text={text}/>
        </PointTickWrapper>
    )
}