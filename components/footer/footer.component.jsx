import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';

import { FooterWrapper, FooterText } from './footer.styles';

const d = new Date();
let year = d.getFullYear();

export const Footer = () => {
    return (
        <FooterWrapper>
            <Link href="/" passHref>
                <FooterText>Strona Główna</FooterText>
            </Link>

            <FooterText>Copyright {year} Michał Fal</FooterText>
        </FooterWrapper>
    );
};
