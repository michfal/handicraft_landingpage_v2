import styled from 'styled-components';

export const ContactWrapper = styled.div`
    /* border: 1px solid blue; */
    overflow: hidden;
    min-height: 45vh;
    position: relative;
    padding-top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 6fr;
    & > span {
        z-index: -1;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding-top: 5vh;
        min-height: 30vh;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        padding-top: 0;
        min-height: 50vh;
    }
`;

export const ContactInfoWrapper = styled.div`
    margin: auto;
    grid-column-start: 1;
    grid-column-end: 3;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        grid-column-end: 2;
        margin: 19% 5% auto auto;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 12% 5% auto auto;
    }
`;

export const ContactInfo = styled.div`
    background-color: ${(props) => props.theme.colors.lightGray};
    width: 25rem;
    height: 3.5rem;
    border-radius: 1rem;
    margin: 3rem;
    position: relative;
    display: flex;
    & > h1 {
        color: ${(props) => props.theme.colors.darkGrayBlue};
        text-align: right;
        display: inline-block;
        font-size: 2rem;
        font-weight: 700;
        margin: auto 2rem auto auto;
    }
    & > span {
        top: -2rem;
        left: 0.5rem;
    }
`;

export const IllustrationWrapper = styled.div`
    height: 17rem;
    position: relative;
    width: 60%;
    margin: 20% auto auto 15%;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 12% auto auto 5%;
    }
`;
