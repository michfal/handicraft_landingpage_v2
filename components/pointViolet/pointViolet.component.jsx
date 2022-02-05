import React from 'react';

import { Point, PointText, PointWrapper } from './pointViolet.styles';

export const PointViolet = ({ children }) => {
    return (
        <PointWrapper>
            <Point></Point>
            <PointText>{children}</PointText>
        </PointWrapper>
    );
};
