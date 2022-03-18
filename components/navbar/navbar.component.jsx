import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import { NavbarWrapper, NavList, NavElement } from './navbar.styles';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavList>
                <Link href="/" passHref>
                    <NavElement> Strona Główna </NavElement>
                </Link>
                <Link href="/gallery" passHref>
                    <NavElement>Galeria</NavElement>
                </Link>

                <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <NavElement>Kontakt</NavElement>
                </LinkScroll>
            </NavList>
        </NavbarWrapper>
    );
};
