import React from 'react';
import Image from 'next/image';

import bgImage from '../../../public/images/main_bg_illustration.svg';

import { HeroWrapper } from './hero.styles';

export const Hero = () => {
    return (
        <HeroWrapper>
            <h1>Hero</h1>
            <Image
                alt="Mountains"
                src={bgImage}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </HeroWrapper>
    );
}
