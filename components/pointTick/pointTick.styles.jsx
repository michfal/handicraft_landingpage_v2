import styled from 'styled-components';

export const PointTickWrapper = styled.div`
    width: 80vw;
    /* height: 8rem; */
    margin: 10% auto;
    /* border: 1px solid green; */
    display: flex;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        width: 70vw;
        margin: 7% auto;
    }
`;

export const ImageWrapper = styled.div`
    height: 5rem;
    min-width: 5rem;
    /* padding-right: 1rem; */
    margin: 0.5rem 1rem auto auto;
    /* border: 1px solid red; */
    position: relative;
    display: inline-block;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin: 1rem 1rem auto auto;
    }
`;
