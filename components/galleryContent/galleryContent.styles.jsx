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

export const GalleryImage = styled.div`
    width: 28rem;
    & > span {
        pointer-events: none;
    }
`;

// export const DisplayedImage = styled.div`
//     position: fixed;
//     z-index: 2;
//     width: 100vw;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.8);
//     /* border: 1px solid red; */
//     display: flex;
//     /* justify-content: center;
//     align-items: center; */
//     & > div {
//         width: 90vw;
//         height: 90vh;
//         margin: 30% auto;
//     }
// `;
