import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { FooterWrapper, FooterText } from './footer.styles';

const d = new Date();
let year = d.getFullYear();

export const Footer = () => {
    return (
        <FooterWrapper>
            <LinkScroll
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FooterText>Strona Główna</FooterText>
            </LinkScroll>

            <FooterText>Copyright {year} Michał Fal</FooterText>
        </FooterWrapper>
    );
};
