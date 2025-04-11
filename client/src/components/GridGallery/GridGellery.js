import React from "react";
import Gallery from 'react-grid-gallery';

import {GridGalleryContainer} from "./GreedGalleryStyled";

const IMAGES =
    [
        {
            src: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Аврора тур в Мурманской области"
        },{
            src: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Аврора тур в Мурманской области"
        },{
            src: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Аврора тур в Мурманской области"
        }, {
        src: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Аврора тур в Мурманской области"
    }, {
        src: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Аврора тур в Мурманской области"
    }, {
        src: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Аврора тур в Мурманской области"
    }, {
        src: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Аврора тур в Мурманской области"
    }, {
        src: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnail: "https://data.whicdn.com/images/169041971/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Аврора тур в Мурманской области"
    },
    ]


const ImageGallery = ({bg, imageDataList}) => {
    return (
        <GridGalleryContainer galleryBg={bg} className={"gallery h-100"} style={{display: "flow-root"}}>
            <div className="w-100 h-100"><Gallery images={imageDataList} /></div>
        </GridGalleryContainer>
    )
}

export default ImageGallery;