import React from 'react';
import Image from 'next/image';

import bgImage from '../../../public/images/main_bg_illustration.svg';
import logo from '../../../public/images/logo.svg';
import heroIllustration from '../../../public/images/top_illustration.svg';
import { HeaderBold } from '../../headerBold/headerBold.component';
import { GalleryButton } from '../../galleryButton/galleryButton.component';
import { sizes } from '../../../globals/theme';

import {
    HeroWrapper,
    LogoWrapper,
    HeroHeader,
    List,
    IllustrationWrapper,
    ImagesWrapper,
    TextWrapper,
} from './hero.styles';

export const Hero = ({ windowSize }) => {
    console.log(windowSize);
    return (
        <HeroWrapper id="main">
            <LogoWrapper>
                <Image alt="logo" src={logo} quality={100} layout="fill" />
            </LogoWrapper>
            {windowSize >= sizes.tablet && (
                <IllustrationWrapper>
                    <Image
                        alt="logo"
                        src={heroIllustration}
                        quality={100}
                        layout="fill"
                    />
                </IllustrationWrapper>
            )}
            <TextWrapper>
                <HeaderBold main>Rękodzieło Artystyczne</HeaderBold>

                <List>
                    <li>Lalki</li>
                    <li>Kwiaty</li>
                    <li>Ozdoby</li>
                </List>
                <GalleryButton />
            </TextWrapper>
            <Image
                alt="background"
                src={bgImage}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </HeroWrapper>
    );
};
