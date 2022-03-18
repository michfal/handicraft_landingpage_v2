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
`;

export const NavList = styled.div`
    color: ${(props) => props.theme.colors.darkGrayBlue};
    /* border: 1px solid red; */
    width: 80%;
    max-width: 40rem;
    margin: auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    & > * {
        cursor: pointer;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: auto auto auto 20%;
    }
`;

export const NavElement = styled.a`
    cursor: pointer;
    padding: 0 1rem 1rem;
`;
