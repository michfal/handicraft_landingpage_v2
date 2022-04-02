import styled from 'styled-components';

export const Header = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.colors.lightGrayBlue};
    text-align: center;

    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        text-align: ${(props) => props.about && 'left'};
        grid-column: 2;
    }
`;
