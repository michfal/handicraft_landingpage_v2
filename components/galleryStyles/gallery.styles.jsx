import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    padding: 8rem 1rem 2rem;
`;

export const GalleryImages = styled.div`
    padding-top: 1rem;
`;

export const GalleryDivider = styled.div`
    border: 2px solid ${(props) => props.theme.colors.darkGrayBlue};
    background: ${(props) => props.theme.colors.darkGrayBlue};
    margin: 1.2rem 0 2rem 0;
    border-radius: 2px;
    /* width: 9%; */
    /* height: 1px; */
`;
