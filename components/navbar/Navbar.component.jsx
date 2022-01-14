import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { HeaderTest } from "./navbar.styles";
import { ThemeContext } from 'styled-components'


export const Navbar = () => {
    const themeContext = useContext(ThemeContext)

    console.log('Current theme: ', themeContext)
    return (
        // <HeaderTest>Navbar</HeaderTest>
        // Change "href=/" to react scroll
        <>
        <Link href="/">Strona Główna</Link>
        {/* <Link href="/">Oferta</Link> */}
        <Link href="/gallery">Galeria</Link>
        {/* <Link href="/">O mnie</Link> */}
        <Link href="/">Kontakt</Link>
        </>
    )
} 