import React from "react";
import TopBanner from "../components/Banners/TopBanner.tsx";
import {Col, Container, Row} from "reactstrap";
import BirthdayBanner from "../components/Banners/BirthdayBanner";
import NewBanner from "../components/Banners/NewBanner.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { ScreenSizeProvider } from "../contexts/ScreenSizeContext.tsx";
import TopMenu from "../components/TopMenu/topMenu.tsx";


const MainPage = () => {

    return (
        <>

            <NewBanner />
            <BirthdayBanner/>
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
            </Container>
        </>
    )
}

export default MainPage;