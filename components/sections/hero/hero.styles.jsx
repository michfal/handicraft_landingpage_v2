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
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
        grid-template-rows: 1fr 1fr 0.2fr 0.6fr;
    }
`;

export const TextWrapper = styled.div`
    grid-column: 1 / 3;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        grid-column-start: 2;
        margin-left: 20%;
    }
`;

export const LogoWrapper = styled.div`
    width: 70%;
    min-height: 25rem;
    position: relative;
    margin: auto;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin: 0 1rem auto auto;
        min-height: 20rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 0 auto auto 20%;
        grid-column-start: 2;
        width: 27rem;
    }
`;

export const IllustrationWrapper = styled.div`
    min-height: 30rem;
    height: 100%;
    position: relative;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        grid-column-start: 3;
        grid-row: 1 / 3;
        height: 90%;
    }
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
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 5% auto auto 10%;
    }
`;

export const BubblesWrapper = styled.div`
    position: relative;
    grid-column: 1 / 3;
    grid-row-start: 4;
    height: 100%;
    width: 90%;
    margin: auto;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        grid-column: 2 / 4;
        width: 80%;
        margin-left: 0;
    }
`;
