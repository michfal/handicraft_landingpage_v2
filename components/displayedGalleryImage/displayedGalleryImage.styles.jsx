import styled from 'styled-components';

export const DisplayedImage = styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImagesWrapper = styled.div`
    width: 100vw;
    position: relative;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        width: 85vw;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        width: 49vw;
        max-width: 55rem;
        margin: auto;
        height: auto;
    }
`;
export const MainImageWrapper = styled.div`
    position: relative;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        width: 85%;
        margin: auto;
    }
`;

export const ArrowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0;
    & > span {
        cursor: pointer;
    }

    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        position: absolute;
        padding: 0;
        width: 100%;
        top: 50%;
    }
`;

export const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        position: absolute;
        top: -1rem;
        right: 0;
        padding: 0;
    }
`;
