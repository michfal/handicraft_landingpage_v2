import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderBold } from '../../headerBold/headerBold.component';
import { sizes } from '../../../globals/breakpoints';

import illustration from '../../../public/images/contact_illustration.svg';
import bgImage from '../../../public/images/contact_bg_image.svg';
import bubblesContact from '../../../public/images/bubbles_contact.svg';
import fbIcon from '../../../public/images/fb_icon.svg';
import mailIcon from '../../../public/images/mail_icon.svg';

import {
    ContactWrapper,
    ContactInfoWrapper,
    ContactInfo,
    IllustrationWrapper,
} from './contact.styles';

const bubbleStyles = {
    top: '-5rem !important',
};

export const Contact = ({ windowSize }) => {
    return (
        <ContactWrapper id="contact">
            <HeaderBold>Kontakt</HeaderBold>
            <ContactInfoWrapper>
                <ContactInfo>
                    <Image
                        alt=" mail_icon"
                        layout="fixed"
                        src={mailIcon}
                        quality={100}
                    />
                    <h1>alicja.fal@op.pl</h1>
                </ContactInfo>
                <ContactInfo>
                    <Image
                        alt="fb_icon"
                        layout="fixed"
                        src={fbIcon}
                        quality={100}
                    />
                    <h1>
                        <Link href="https://www.facebook.com/bukiety.alicjafal">
                            bukiety.alicjafal/
                        </Link>
                    </h1>
                </ContactInfo>
            </ContactInfoWrapper>

            {windowSize >= sizes.tablet && (
                <IllustrationWrapper>
                    <Image
                        alt="logo"
                        src={illustration}
                        quality={100}
                        layout="fill"
                    />
                </IllustrationWrapper>
            )}
            <Image
                alt="background"
                src={bgImage}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </ContactWrapper>
    );
};
