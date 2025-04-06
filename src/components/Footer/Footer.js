import React from 'react';
import {FooterContainerStyled} from "./FooterContainerStyled";
import {Col, Row} from "reactstrap";

const Footer = () => {

    return (
        <FooterContainerStyled>
            <Row>
                <Col>Col</Col>
                <Col>Col</Col>
                <Col>Col</Col>
            </Row>
        </FooterContainerStyled>
    )
}

export default Footer;