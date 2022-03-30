import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height: 6rem;
    background-color: ${(props) => props.theme.colors.darkGrayBlue};
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > h1:first-child {
        cursor: pointer;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        padding: 0 30%;
    }
`;

export const FooterText = styled.h1`
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.light};
`;
