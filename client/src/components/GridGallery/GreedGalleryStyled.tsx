import styled from "styled-components";

interface GridGalleryContainerProps {
    galleryBg: string;
}

const GridGalleryContainer = styled.div<GridGalleryContainerProps>`
    background-image: url(${props => props.galleryBg});
    width: 100%;
    height:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `

export {GridGalleryContainer};