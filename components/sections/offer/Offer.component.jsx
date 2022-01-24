import React from 'react';

import { HeaderLignt } from '../../headerLight/headerLight.component';
import { PointViolet } from '../../pointViolet/pointViolet.component';
import { PointTick } from '../../pointTick/pointTick.components';

import { Texts } from '../../../globals/texts'

import { OfferWrapper, VioletPointsWrapper } from './offer.styles';

export const Offer = () => {

    return (
        <OfferWrapper>
            <HeaderLignt>Oferuję:</HeaderLignt>

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