import styled from 'styled-components';

export const HeroWrapper = styled.div`
    position: relative;
    width: 100vw;
    padding-top: 3rem;
    & > span {
        z-index: -1;
    }
`;

export const LogoWrapper = styled.div`
    width: 80%;
    min-height: 30rem;
    position: relative;
    margin: auto;
    & > span {
        margin: auto;
    }
`;

export const HeroHeader = styled.div`
    font-weight: 700;
    font-size: 3rem;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        font-size: 5rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        font-size: 6.5rem;
    }
    color: ${(props) => props.theme.colors.darkGrayBlue};
    text-align: center;
`;

export const HeroList = styled.ul`
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
