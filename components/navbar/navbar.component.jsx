import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import { useContext } from 'react';
import { NavbarWrapper, NavList, NavElement } from './navbar.styles';
import { ThemeContext } from 'styled-components';

export const Navbar = () => {
    // const themeContext = useContext(ThemeContext)

    // console.log('Current theme: ', themeContext)

    return (
        <NavbarWrapper>
            <NavList>
                <Link href="/" passHref>
                    <NavElement>Strona Główna</NavElement>
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
