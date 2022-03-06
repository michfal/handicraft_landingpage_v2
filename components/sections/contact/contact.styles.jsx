import styled from 'styled-components';

export const ContactWrapper = styled.div`
    min-height: 40vh;
    position: relative;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    & > span {
        z-index: -1;
        top: -5rem;
    }
`;

export const ContactInfoWrapper = styled.div`
    margin: auto;
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
        /* position: absolute !important; */
        top: -2rem;
        left: 0.5rem;
    }
`;
