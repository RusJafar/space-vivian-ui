import React, {useEffect, useState} from "react";
import {SlideContainerStyled, SlideImageMiniStyled, SlideImageStyled} from "./BannerSliderStyled";

import slide_1 from '../../imges/gallaryPhotos/galary-1/photo_2022-01-22_23-12-32-1.jpg'
import slide_2 from '../../imges/gallaryPhotos/galary-1/photo_2022-01-22_23-12-31.jpg'
import slide_3 from '../../imges/gallaryPhotos/galary-1/photo_2022-01-22_23-12-33-1.jpg'
import slide_4 from '../../imges/gallaryPhotos/galary-1/photo_2022-01-22_23-12-33-2.jpg'
import slide_5 from '../../imges/gallaryPhotos/photo_2022-01-23_18-12-20.jpg'
import slide_6 from '../../imges/gallaryPhotos/galary-1/photo_2022-01-22_23-12-33.jpg'



const slides = [
    {id: 1, src: slide_5, alt: "1"},
    {id: 3, src: slide_2, alt: "2"},
    {id: 4, src: slide_3, alt: "2"},
    {id: 5, src: slide_4, alt: "2"},
];


const BannerSlider = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const waitInterval = setInterval(() => {
            setCount(count => count + 1);
        }, 3000)
        return () => clearInterval(waitInterval)
    }, [])

    const imageId = count % slides.length;
    const nextImageId = imageId === slides.length - 1? 0 : imageId + 1;
    const currentImageSrc = slides[imageId].src;
    const currentImageAlt = slides[imageId].alt;

    const nextImage = slides[nextImageId]?.src
    console.log("imageId ", imageId, "nextImageId ", nextImageId)
    return (
        <SlideContainerStyled>
            <SlideImageStyled src={currentImageSrc} alt={currentImageAlt} title={""}/>
            <SlideImageMiniStyled src={nextImage} alt={currentImageAlt} title={""}/>
        </SlideContainerStyled>
    )
}
export default BannerSlider;
