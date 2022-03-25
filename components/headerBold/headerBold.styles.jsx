import styled from 'styled-components';

export const Header = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.darkGrayBlue};
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        font-size: 3rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        font-size: 3.6rem;
    }
`;

export const HeaderMain = styled(Header)`
    font-size: 3rem;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        font-size: 4.8rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        font-size: 4rem;
        text-align: left;
    }
`;
