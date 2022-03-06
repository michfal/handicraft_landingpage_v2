import styled from 'styled-components';

// export const HeaderTest = styled.h1`
//     color: palevioletred;
// `;

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
`;

export const NavList = styled.div`
    color: ${(props) => props.theme.colors.darkGrayBlue};
    width: 80%;
    margin: auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    & > * {
        cursor: pointer;
    }
`;

export const NavElement = styled.a`
    cursor: pointer;
`;
