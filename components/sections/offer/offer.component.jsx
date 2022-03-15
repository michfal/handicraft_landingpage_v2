import React from 'react';
import Image from 'next/image';

import { HeaderLight } from '../../headerLight/headerLight.component';
import { PointViolet } from '../../pointViolet/pointViolet.component';
import { PointTick } from '../../pointTick/pointTick.components';
import { sizes } from '../../../globals/theme';

import { Texts } from '../../../globals/texts';
import bubblesOffer from '../../../public/images/bubbles_offer.svg';
import {
    OfferWrapper,
    VioletPointsWrapper,
    BubblesWrapper,
} from './offer.styles';

export const Offer = ({ windowSize }) => {
    return (
        <OfferWrapper>
            <HeaderLight>Oferuję:</HeaderLight>

            <VioletPointsWrapper>
                <PointViolet>Bukiety</PointViolet>
                <PointViolet>Ozdoby</PointViolet>
                <PointViolet>Lalki</PointViolet>
            </VioletPointsWrapper>

            <PointTick text={Texts.offer.first} />
            <PointTick text={Texts.offer.second} />
            {windowSize >= sizes.tablet && (
                <BubblesWrapper>
                    <Image
                        alt="logo"
                        src={bubblesOffer}
                        quality={100}
                        layout="fill"
                    />
                </BubblesWrapper>
            )}
        </OfferWrapper>
    );
};
