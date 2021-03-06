import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    height: 9rem;
    width: 100vw;
    position: fixed;
    z-index: 1;
    background-image: linear-gradient(
        180deg,
        white,
        white,
        rgba(255, 255, 255, 0)
    );
    font-size: 1.6rem;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        font-size: 1.8rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        display: grid;
        grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
    }
`;

export const NavList = styled.div`
    color: ${(props) => props.theme.colors.darkGrayBlue};
    width: 80%;
    max-width: 40rem;
    margin: auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    & > * {
        cursor: pointer;
        padding: 0 1rem 1rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 0 auto;
        grid-column-start: 2;
    }
`;
