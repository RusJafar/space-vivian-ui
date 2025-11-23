import React, {useState} from "react";
import { GridGalleryContainer } from "./GreedGalleryStyled";
import { Gallery } from "react-grid-gallery";
import { Modal } from "reactstrap";
import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight, FaRegWindowClose } from "react-icons/fa";
import { IconWrap } from "../Wrapers";


const PreviousButtonStyled = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
`;
const NextButtonStyled = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
`;

const CloseButtonStyled = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
    &:hover {
        background-color: rgba(255, 0, 0, 0.5);
    }`



interface ImageGalleryProps {
    bg: string;
    imageDataList: Array<{ src: string; thumbnail: string; thumbnailWidth: number; thumbnailHeight: number }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ bg, imageDataList }) => {

    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const [imagePreviewIndex, setImagePreviewIndex] = useState(0);

    const handleModalOpen = () => {
        
        setPreviewOpen(true);
    }
    
    const closeModal = () => {
        setPreviewOpen(false);
    }

    const showPreviousImage = () => {
        setImagePreviewIndex((prevIndex) => (prevIndex - 1 + imageDataList.length) % imageDataList.length);
    }

    const showNextImage = () => {
        setImagePreviewIndex((prevIndex) => (prevIndex + 1) % imageDataList.length);
    }

    const currentImage = imageDataList[imagePreviewIndex];

    return (
        <GridGalleryContainer galleryBg={bg} style={{ display: "flow-root" }}>
            <Gallery
            images={imageDataList.map(image => ({
                ...image,
                width: image.thumbnailWidth,
                height: image.thumbnailHeight
            }))}
            margin={1}
            enableImageSelection={false}
            onClick={(index) => {
                console.log(index);
                setImagePreviewIndex(index);
                handleModalOpen();
            }}
            />
            <Modal 
            onClose={closeModal} 
            isOpen={isPreviewOpen} 
            style={{ maxWidth: "55vh", margin: "auto", padding: "20px" }}
            scrollable={false}
            >
                <img src={currentImage.src} alt="Selected" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                <CloseButtonStyled onClick={closeModal}>
                    <IconWrap Icon={FaRegWindowClose} style={{ color: "white" }} />
                </CloseButtonStyled>
                <PreviousButtonStyled onClick={showPreviousImage}>
                    <IconWrap Icon={FaArrowCircleLeft} style={{ color: "white" }} />
                    </PreviousButtonStyled>
                <NextButtonStyled onClick={showNextImage}>
                    <IconWrap Icon={FaArrowCircleRight} style={{ color: "white" }} />
                </NextButtonStyled>
            </Modal>
        </GridGalleryContainer>
    )
}

export default ImageGallery;