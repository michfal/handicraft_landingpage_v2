import styled from 'styled-components';

export const PointText = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.lightGrayBlue};
    text-align: left;
    /* display: inline-block; */
    margin-left: 2rem;
    /* padding: 1rem 3rem;
    border-radius: 3rem; */
`;

export const Point = styled.div`
    background-color: ${(props) => props.theme.colors.violet};
    height: 80%;
    display: inline-block;
    width: 4.5rem;
    border-radius: 2rem;
`;

export const PointWrapper = styled.div`
    /* border: 1px solid red; */
    height: 3rem;
    width: 15rem;
    margin: auto;
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */
`;
