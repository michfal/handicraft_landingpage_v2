import styled from 'styled-components';

export const OfferWrapper = styled.div`
    padding-top: 10vh;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding-top: 1vh;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding-top: 5vh;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        padding-top: 8vh;
    }
`;

export const VioletPointsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20rem;
    width: 70%;
    margin: 5% auto auto auto;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        flex-direction: row;
        height: auto;
    }
`;

export const BubblesWrapper = styled.div`
    /* border: 1px solid red; */
    position: relative;
    width: 90%;
    height: 10vh;
    margin: auto;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        width: 40%;
        height: 12vh;
        margin-right: 5%;
    }
`;

export const PointTickWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin-top: 5%;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        flex-direction: row;
        max-width: 120rem;
    }
`;
