import React from "react";
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import ImageGallery from "../components/GridGallery/GridGellery";

import slide_1 from '../imges/gallaryPhotos/gallery_24/2024-04-21_11.05.02.jpg'
import slide_3 from '../imges/gallaryPhotos/gallery_24/2024-04-21_11.06.10.jpg'
import Stiker2024 from '../imges/gallaryPhotos/stikers/2024-sticker.png';
import slide_4 from '../imges/gallaryPhotos/gallery_24/2024-04-21_11.06.50.jpg';
import face from '../imges/gallaryPhotos/gallery_24/87.jpg'
// import stepsImage from '../imges/gallaryPhotos/gallery_24/5K6A2344.jpg'
import meduzaStiker from '../imges/gallaryPhotos/stikers/meduza.png';
import delphinStiker from '../imges/gallaryPhotos/stikers/delphin.png';

import {ImageStyled} from "../components/components24/img/ImgStyled";
import styled from "styled-components";
import Fotocollage from "../components/fotocollage/Fotocollage";

const winter =
    [
        {
            src: slide_1,
            thumbnail: slide_1,
            thumbnailWidth: 230,
            thumbnailHeight: 320,
            caption: "Аврора тур в Мурманской области"
        },
        {
            src: slide_3,
            thumbnail: slide_3,
            thumbnailWidth: 230,
            thumbnailHeight: 320,
            caption: "Аврора тур в Мурманской области"
        },
        {
            src: slide_4,
            thumbnail: slide_4,
            thumbnailWidth: 230,
            thumbnailHeight: 320,
            caption: "Аврора тур в Мурманской области"
        }
    ]

const TextColoredStyle = styled.div({
    /* межстрочное расстояние */
    // "line-height": 1,
    /* подключаем сетку */
    // "display": "grid",
    /* ставим содержимое в центр */
    // "place-items": "center"
});

const ColoredTextStyled = styled.h5({
    /* настраиваем внешний вид шрифта */
    "font-family": "sans-serif",
    // "font-size": "15vw",
    "font-weight": "900",
    "width": "-webkit-min-content",
    "margin": "auto",
    /* переводим все буквы в заглавные */
    "text-transform": "uppercase",
    /* делаем цветные полосы по тексту */
    "background": "linear-gradient(90deg, rgba(131,58,180,1) 9%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 62%)",
    /* обрезаем фон по контуру букв */
    "background-clip": "text",
    "-webkit-background-clip": "text",
    /* делаем заголовок прозрачным, чтобы был виден цветной фон */
    "color": "transparent"
});


const MainPage24 = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="4" xs="6">
                        <ImageStyled src={face} alt=""/>
                    </Col>
                    <Col xs="6" className="d-sm-block d-md-none d-lg-none p-3">
                        <Row>
                            <Col xs="4">Ранее</Col>
                            <Col md="2" xs="4">2022</Col>
                            <Col md="2" xs="4">2023</Col>
                            <Col md="6" xs="12">
                                <ImageStyled src={Stiker2024} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="8">
                        <Row className="d-none d-lg-flex align-items-center">
                            <Col md="3" className="d-flex align-middle">
                                <Row>
                                    <Col className="colored">
                                        <div>
                                            <ColoredTextStyled>2023</ColoredTextStyled>
                                        </div>
                                    </Col>
                                    {/*<Col>2023</Col>*/}
                                </Row>
                            </Col>
                            <Col md="6">
                                <ImageStyled src={Stiker2024} alt=""/>
                            </Col>
                            <Col md="3" className="d-flex align-middle">
                                <Row>
                                    <Col>
                                        <div><ColoredTextStyled>Портфолио</ColoredTextStyled></div>
                                    </Col>
                                    {/*<Col>2023</Col>*/}
                                </Row>
                            </Col>
                        </Row>
                        <h1>Привет, <br/> меня зовут Вивиан!</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum.
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container fluid>
                <Container>
                    <Row>
                        <h2>Модельное портфолио</h2>
                        <Col></Col>
                        <Col md="2"><ImageStyled src={meduzaStiker} alt=""/></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>
            <hr/>
            <Container fluid>
                <Container>
                    <Row>
                        <Col md="4" xs="6"><ImageStyled src={meduzaStiker} alt=""/></Col>
                        <Col md="4">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of
                                Lorem Ipsum.
                            </p>
                        </Col>
                        {/* <Col md="4"><ImageStyled src={stepsImage} alt=""/> </Col> */}
                    </Row>
                </Container>
                <hr/>
                <Container className="m-5">
                    <Row className="d-lg-flex align-items-center">
                        <Col>
                            <ImageGallery imageDataList={winter}/>
                        </Col>
                        <Col>
                            <h3>Зима 2024</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="m-5">
                    <Row className="d-lg-flex align-items-center">
                        <Col>
                            <h3>Весна 2024</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                            </p>
                        </Col>
                        <Col>
                            <ImageGallery imageDataList={winter}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Fotocollage />
            </Container>
            <Container fluid style={{background: "linear-gradient(to right, #74ebd5, #acb6e5)"}}>
                <Container>
                    <Row className="p-5">
                        <Col className="d-flex justify-content-evenly">
                            <div className="w-auto">
                                <h6>Мои контакты:</h6>
                                <ul className="p-3">
                                    <li>Telegram</li>
                                    <li>Like</li>
                                </ul>
                            </div>
                        </Col>
                        <Col><ImageStyled src={delphinStiker} alt=""/></Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default MainPage24;