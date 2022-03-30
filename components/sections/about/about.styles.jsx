import styled from 'styled-components';

export const AboutWrapper = styled.div`
    padding-top: 5vh;
    display: grid;
    position: relative;
    & > span {
        z-index: -1;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding: 5vh 0 5vh 0;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        grid-template-columns: 0.5fr 1fr 1fr 0.2fr;
        grid-template-rows: 0.2fr 3fr 2fr;
    }
`;

export const ParagraphWrapper = styled.div`
    width: 80vw;
    min-height: 18rem;
    margin: 2rem auto auto auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        width: 90%;
        min-height: 22rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        width: 100%;
        grid-column: 2;
    }
`;

export const IllustrationWrapper = styled.div`
    height: 100%;
    position: relative;
    grid-row: 1 / 3;
    grid-column: 3;
`;

export const BubblesWrapperOffer = styled.div`
    width: 70%;
    height: 80%;
    margin: auto auto auto 0;
    position: relative;
    grid-row: 3;
    grid-column: 1 / 4;
    transform: scaleX(-1);
`;
