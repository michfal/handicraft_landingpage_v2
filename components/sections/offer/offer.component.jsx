import React from 'react';
import Image from 'next/image';

import { HeaderLight } from '../../headerLight/headerLight.component';
import { PointViolet } from '../../pointViolet/pointViolet.component';
import { PointTick } from '../../pointTick/pointTick.components';
import { sizes } from '../../../globals/breakpoints';

import { Texts } from '../../../globals/texts';
import bubblesOffer from '../../../public/images/bubbles_offer.svg';
import {
    OfferWrapper,
    VioletPointsWrapper,
    BubblesWrapper,
    PointTickWrapper,
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

            <PointTickWrapper>
                <PointTick text={Texts.offer.first} />
                <PointTick text={Texts.offer.second} />
            </PointTickWrapper>
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
