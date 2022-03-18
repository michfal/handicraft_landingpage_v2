import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    font-size: 2.5rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.violet};
    padding: 1rem 5rem;
    border-radius: 3rem;
    margin: 5rem auto auto auto;
    display: block;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        margin: 5rem auto auto 20%;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.laptop}) {
        margin: 5rem auto auto 0;
        padding: 1rem 7rem;
    }
`;
