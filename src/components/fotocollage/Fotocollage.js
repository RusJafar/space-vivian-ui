import {Col, Container, Row} from "reactstrap";
import meduzaStiker from "../../imges/gallaryPhotos/stikers/meduza.png";
import {ImageStyled} from "../components24/img/ImgStyled";
import React from "react";
import slide_1 from "../../imges/gallaryPhotos/gallery_24/2024-04-21_11.05.02.jpg";


const Fotocollage =() => {

    return (
        <Row>
            <Col md="2">
               <Row>
                   <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                   <Col md="5"> <ImageStyled src={slide_1} alt=""/></Col>
                   <Col md="2"> </Col>
                   <Col md="8"> </Col>
                   <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
               </Row>
            </Col>
            <Col md="2">
                <Row>
                    <Col md="6"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="6"></Col>
                    <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                </Row>
            </Col>
            <Col md="2">
                <Row>
                    <Col md="2"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="6"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                </Row>
            </Col>
            <Col md="2">
                <Row>
                    <Col md="2"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="6"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                </Row>
            </Col>
            <Col md="2">
                <Row>
                    <Col md="2"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="6"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                </Row>
            </Col>
            <Col md="2">
                <Row>
                    <Col md="2"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="6"> <ImageStyled src={slide_1} alt=""/></Col>
                    <Col md="4"> <ImageStyled src={slide_1} alt=""/></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Fotocollage;
