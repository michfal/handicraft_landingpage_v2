import React from 'react';

// import { HeaderLight } from '../../headerLight/headerLight.component';
import { PointViolet } from '../../pointViolet/pointViolet.component';
import { PointTick } from '../../pointTick/pointTick.components';

import { Texts } from '../../../globals/texts'

import { OfferWrapper, VioletPointsWrapper } from './offer.styles';

export const Offer = () => {

    return (
        <OfferWrapper>
            <HeaderLight>Oferuję:</HeaderLight>

            <VioletPointsWrapper>

                <PointViolet>Bukiety</PointViolet>
                <PointViolet>Ozdoby Okolicznościowe</PointViolet>
                <PointViolet>Lalki</PointViolet>

            </VioletPointsWrapper>

            <PointTick text={Texts.offer.first}></PointTick>
            <PointTick text={Texts.offer.second}></PointTick>

        </OfferWrapper>
    );
}