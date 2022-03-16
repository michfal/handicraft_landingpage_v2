import styled from 'styled-components';

export const AboutWrapper = styled.div`
    padding-top: 5vh;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding: 5vh 0 5vh 0;
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
`;
