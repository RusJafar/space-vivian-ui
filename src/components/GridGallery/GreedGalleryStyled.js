import styled from "styled-components";

const GridGalleryContainer = styled.div`
    background-image: url(${props => props.galleryBg});
    width: 100%;
    height:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `

export {GridGalleryContainer};