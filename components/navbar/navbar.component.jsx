import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import { NavbarWrapper, NavList } from './navbar.styles';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavList>
                <Link href="/" passHref>
                    Strona Główna
                </Link>
                <Link href="/gallery" passHref>
                    Galeria
                </Link>

                <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    Kontakt
                </LinkScroll>
            </NavList>
        </NavbarWrapper>
    );
};
