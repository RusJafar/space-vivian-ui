import React from 'react';
import {Col, Row} from "reactstrap";
import { FooterContainerStyled, MobileFooterStyled } from './FooterContainerStyled';
import { useScreenSize } from '../../contexts/ScreenSizeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { width } = useScreenSize();

    return (
        <>
        {width > 768 ? (
            <FooterContainerStyled>
            <Row>
                <Col>Col</Col>
                <Col>Col</Col>
                <Col>Col</Col>
            </Row>
        </FooterContainerStyled>) : (
            <MobileFooterStyled>
                <Row>
                    <Col className="d-flex justify-content-center m-3">
                        ((COL))
                    </Col>
                    <Col className="d-flex justify-content-center m-3">((COL))</Col>
                    <Col className="d-flex justify-content-center m-3">((COL))</Col>
                </Row>
            </MobileFooterStyled>)
        }
        </>
    )
}

export default Footer;