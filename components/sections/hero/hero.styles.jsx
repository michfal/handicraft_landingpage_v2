import styled from 'styled-components';

export const HeroWrapper = styled.div`
    position: relative;
    padding-top: 3rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    & > span {
        z-index: -1;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding-top: 8rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 0.2fr 0.5fr;
    }
`;

export const TextWrapper = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const LogoWrapper = styled.div`
    width: 70%;
    min-height: 25rem;
    position: relative;
    margin: auto;
    & > span {
        margin: auto;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin: 0 1rem auto auto;
        min-height: 20rem;
        & > span {
            margin: 0 auto;
        }
    }
`;

export const IllustrationWrapper = styled.div`
    min-height: 30rem;
    height: 100%;
    position: relative;
`;

export const List = styled.ul`
    font-size: 2rem;
    list-style-type: disc;
    list-style-position: inside;
    font-weight: 700;
    margin: 5% auto auto 20%;
    color: ${(props) => props.theme.colors.darkGrayBlue};
    & > li {
        line-height: 3rem;
    }
`;

export const BubblesWrapper = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    height: 100%;
    width: 90%;
    margin: auto;
`;
