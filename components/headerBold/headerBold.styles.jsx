import styled from 'styled-components';

export const Header = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.darkGrayBlue};
    text-align: center;
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 3rem
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        font-size: 3.6rem
    }

`;

export const HeaderMain = styled(Header)`
    font-size: 3rem;
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 5rem
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        font-size: 6.5rem
    }
`;