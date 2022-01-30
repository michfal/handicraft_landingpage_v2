import React from 'react';
import { HeaderLight } from '../../headerLight/headerLight.component';
import { Paragraph } from '../../paragraph/paragraph.component';
import { Texts } from '../../../globals/texts';
import { AboutWrapper, ParagraphWrapper } from './about.styles';

export const About = () => {
    return (
        <AboutWrapper>
            <HeaderLight>O mnie:</HeaderLight>
            <ParagraphWrapper>
                <Paragraph text={Texts.about.first} />
                <Paragraph text={Texts.about.second} />
            </ParagraphWrapper>
            
        </AboutWrapper>
    );
}
