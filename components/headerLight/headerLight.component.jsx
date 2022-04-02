import React from 'react';
import { Header } from './headerLight.styles';

export const HeaderLight = ({ about, children }) => {
    return <Header about={about}>{children}</Header>;
};
