import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    padding: 8rem 1rem 2rem;
`;

export const GalleryImages = styled.div`
    padding-top: 1rem;
    /* width: 100%; */
    margin: auto;
    display: flex;
    display: grid;
    row-gap: 1.5rem;
    @media only screen and (min-width: ${(props) =>
            props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
    }
`;

export const GalleryDivider = styled.div`
    border: 2px solid ${(props) => props.theme.colors.darkGrayBlue};
    background: ${(props) => props.theme.colors.darkGrayBlue};
    margin: 1.2rem 0 1rem 0;
    border-radius: 2px;
`;

export const GalleryImage = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    margin: auto;
    & > span {
        pointer-events: none;
    }
`;
