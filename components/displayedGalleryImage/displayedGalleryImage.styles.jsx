import styled from 'styled-components';

export const DisplayedImage = styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 90vw;
`;

export const ArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem 0;
`;

export const CloseIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
