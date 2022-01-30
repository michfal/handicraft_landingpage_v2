import styled from 'styled-components'

// export const HeaderTest = styled.h1`
//     color: palevioletred;
// `;

export const NavbarWrapper = styled.div`
    height: 9rem;
    width: 100vw;
    position: fixed;
    z-index: 1;
    background-image: linear-gradient(180deg, white, white, rgba(255,255,255, 0));
    /* background-color: lightblue; */
    font-size: 1.6rem;
`;

export const NavList = styled.div`
    color: ${props => props.theme.colors.darkGrayBlue};
    /* border: 1px solid red; */
    width: 80%;
    margin: auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
`;

export const NavElement = styled.a`
    cursor: pointer;
`;