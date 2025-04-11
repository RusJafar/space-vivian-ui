import styled from "styled-components";

const SlideContainerStyled = styled.div`
    position: relative;
`

const SlideImageStyled = styled.img`
    width: 100%;
    max-width: 380px;
    border-radius: 20px;
    padding: 10px;
    
`

const SlideImageMiniStyled = styled.img`
    width: 12rem;
    position: absolute;
    top: 60%;
    left: 65%;
    border-radius: 27px;
    padding: 20px;
`

export {SlideImageStyled, SlideContainerStyled, SlideImageMiniStyled};
