import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { NavbarWrapper, NavList, NavElement } from "./navbar.styles";
import { ThemeContext } from 'styled-components'


export const Navbar = () => {
    const themeContext = useContext(ThemeContext)

    // console.log('Current theme: ', themeContext)
    return (
        // <HeaderTest>Navbar</HeaderTest>
        // Change "href=/" to react scroll
        <NavbarWrapper>
            <NavList theme={themeContext}>
                <Link href="/"><NavElement >Strona Główna</NavElement></Link>
                <Link href="/gallery"><NavElement >Galeria</NavElement></Link>
                <Link href="/"><NavElement >Kontakt</NavElement></Link>
            </NavList>
        </NavbarWrapper>
    )
} 