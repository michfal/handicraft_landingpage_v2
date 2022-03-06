import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    padding: 8rem 1rem 2rem;
`;

export const GalleryImages = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GalleryDivider = styled.div`
    border: 2px solid ${(props) => props.theme.colors.darkGrayBlue};
    background: ${(props) => props.theme.colors.darkGrayBlue};
    margin: 1.2rem 0 1rem 0;
    border-radius: 2px;
`;

export const GalleryImage = styled.div`
    width: 90vw;
    height: 90vw;
    margin-bottom: 1.5rem;
    overflow: hidden;
    & > span {
        pointer-events: none;
    }
`;
