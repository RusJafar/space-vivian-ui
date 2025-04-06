import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import {Col, Container, Row} from "reactstrap";
import ImageGallery from "../components/GridGallery/GridGellery";
import gallery1Bg from '../imges/svg/symbol-scatter-haikei.svg'

const MainPage = () => {

    return (
        <>
            <TopBanner />
            <Container fluid>
                <Container>
                    <Row>
                        <Col>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Col>
                    </Row>
                </Container>
                <ImageGallery bg={gallery1Bg}/>
            </Container>
        </>
    )
}

export default MainPage;