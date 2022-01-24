import styled from 'styled-components';


export const PointTickWrapper = styled.div`
    width: 80vw;
    /* height: 8rem; */
    margin: 10% auto;
    /* border: 1px solid green; */
    display: flex;
`;

export const ImageWrapper = styled.div`
    height: 5rem;
    min-width: 5rem;
    /* border: 1px solid red; */
    position: relative;
    display: inline-block;
    & > span {
        height: 100%;
        /* width: 8rem; */
    }
`;

export const PointText = styled.p`
        color: ${props => props.theme.colors.lightGrayBlue};
        font-size: 16px;
        display: inline-block;
        /* width: 25rem; */
        margin-top: 0;
        padding-left: 1rem;
`;