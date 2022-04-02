import styled from 'styled-components';

export const PointTickWrapper = styled.div`
    /* border: 1px solid blue; */
    width: 80%;
    margin: 10% auto;
    /* border: 1px solid green; */
    display: flex;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        width: 60%;
        margin: 3% auto;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        width: 45%;
    }
`;

export const ImageWrapper = styled.div`
    height: 5rem;
    min-width: 5rem;
    margin: 0.5rem 1rem auto auto;
    /* border: 1px solid red; */
    position: relative;
    display: inline-block;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin: 1rem 2rem auto auto;
        min-width: 7rem;
        height: 7rem;
    }
`;
