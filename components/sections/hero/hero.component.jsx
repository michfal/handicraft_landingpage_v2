import React from 'react';
import Image from 'next/image';

import bgImage from '../../../public/images/main_bg_illustration.svg';
import logo from '../../../public/images/logo.svg';
import { HeaderBold } from '../../headerBold/headerBold.component';

import { HeroWrapper, LogoWrapper, BgImageWrapper, HeroHeader, HeroList } from './hero.styles';

export const Hero = () => {
    return (
        <HeroWrapper>
            <LogoWrapper>
                <Image
                    alt="logo"
                    src={logo}
                    quality={100}
                    layout="fill"
                />
            </LogoWrapper>
            <HeaderBold main>Rękodzieło Artystyczne</HeaderBold>
            <HeroList>
                <li>Lalki</li>
                <li>Kwiaty</li>
                <li>Ozdoby</li>
            </HeroList>
            <BgImageWrapper>
                <Image
                    alt="background"
                    src={bgImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </BgImageWrapper>
        </HeroWrapper>
    );
}
