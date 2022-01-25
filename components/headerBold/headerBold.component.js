import React from 'react';
import { Header, HeaderMain } from './headerBold.styles'

export const HeaderBold = ({main, children}) => {
    // console.log(main)
    return (
        <>
            {main ? <HeaderMain>{children}</HeaderMain> : <Header>{children}</Header>}
        </>
    )
}


