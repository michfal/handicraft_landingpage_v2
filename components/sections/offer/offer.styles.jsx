import styled from 'styled-components';

export const OfferWrapper = styled.div`
    padding-top: 10vh;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        padding-top: 1vh;
    }
`;

export const VioletPointsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20rem;
    width: 70%;
    margin: 5% auto auto auto;
`;

export const BubblesWrapper = styled.div`
    position: relative;
    width: 90%;
    height: 10vh;
    margin: auto;
    /* border: 1px solid red; */
`;
