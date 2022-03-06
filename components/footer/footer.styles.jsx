import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height: 6rem;
    background-color: ${(props) => props.theme.colors.darkGrayBlue};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const FooterText = styled.h1`
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.light};
`;
