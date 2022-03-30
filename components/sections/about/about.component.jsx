import React from 'react';
import Image from 'next/image';
import { HeaderLight } from '../../headerLight/headerLight.component';
import { Paragraph } from '../../paragraph/paragraph.component';
import { Texts } from '../../../globals/texts';
import { sizes } from '../../../globals/breakpoints';
import illustration from '../../../public/images/about_illustration.svg';
import bubblesOffer from '../../../public/images/bubbles_offer.svg';
import {
    AboutWrapper,
    ParagraphWrapper,
    IllustrationWrapper,
    BubblesWrapperOffer,
} from './about.styles';

export const About = ({ windowSize }) => {
    return (
        <AboutWrapper>
            <HeaderLight about="true">O mnie:</HeaderLight>
            <ParagraphWrapper>
                <Paragraph text={Texts.about.first} />
                <Paragraph text={Texts.about.second} />
            </ParagraphWrapper>
            {windowSize >= sizes.laptop && (
                <>
                    <IllustrationWrapper>
                        <Image
                            alt="logo"
                            src={illustration}
                            quality={100}
                            layout="fill"
                        />
                    </IllustrationWrapper>
                    <BubblesWrapperOffer>
                        <Image
                            alt="logo"
                            src={bubblesOffer}
                            quality={100}
                            layout="fill"
                        />
                    </BubblesWrapperOffer>
                </>
            )}
        </AboutWrapper>
    );
};
