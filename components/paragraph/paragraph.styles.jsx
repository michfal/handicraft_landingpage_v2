import styled from 'styled-components';

export const ParagraphStyle = styled.p`
    color: ${(props) => props.theme.colors.lightGrayBlue};
    font-size: 1.6rem;
    display: inline-block;
    margin-top: 0;
    line-height: 2.5rem;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        font-size: 2.1rem;
        line-height: 3.5rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        text-align: left;
    }
`;
