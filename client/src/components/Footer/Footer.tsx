import React from 'react';
import {Col, Container, Row} from "reactstrap";
import { FooterContainerStyled, MobileFooterStyled } from './FooterContainerStyled';
import { useScreenSize } from '../../contexts/ScreenSizeContext';
import { Link } from 'react-router-dom';
import { FaTelegram, FaFortAwesomeAlt, FaIdCard } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../../theme';
import { IconWrap } from '../Wrapers';

const ButtonStyled = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1em;
    &:hover {
        color: ${theme.colors.gray};
    }
`

// const IconWrap = (Icon: React.ElementType) => {

//     return (
//         <Icon style={{"font-size":"2em"}}/>
//     )
// }

const Footer = () => {
    const { width } = useScreenSize();

    return (
        <>
        {width > 768 ? (
            <FooterContainerStyled>
            <Container>
                <Row>
                    <Col>
                    <h4 style={{color: `${theme.colors.gray}`}}>Навигация</h4>
                        <Link to='/' className="text-decoration-none">
                            <ButtonStyled>
                                {/* <IconWrap Icon={FaFortAwesomeAlt} /> Домойки     */}
                                Домойки
                            </ButtonStyled>
                        </Link>
                        <Link to='/contacts' className="text-decoration-none">
                            <ButtonStyled>
                                {/* <IconWrap Icon={FaTelegram}/> */}
                                Контактики
                            </ButtonStyled>
                        </Link>
                    </Col>
                    <Col>
                        
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </FooterContainerStyled>) : (
            <MobileFooterStyled>
                <Row>
                    <Col className="d-flex justify-content-center p-1">
                        <Link to='/' className="text-decoration-none">
                        <ButtonStyled>
                            < IconWrap Icon={FaFortAwesomeAlt} style={{"fontSize":"2em"}}/>
                            Домойки
                        </ButtonStyled>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center p-1">
                        <Link to='/contacts' className="text-decoration-none">
                        <ButtonStyled>
                            < IconWrap Icon={FaTelegram} style={{"fontSize":"2em"}}/>
                            Контактики
                        </ButtonStyled>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center p-1">
                        <Link to='/contacts' className="text-decoration-none">
                        <ButtonStyled>
                            <IconWrap Icon={FaIdCard} style={{"fontSize":"2em"}}/>
                            Обо мне
                        </ButtonStyled>
                        </Link>
                    </Col>
                </Row>
            </MobileFooterStyled>)
        }
        </>
    )
}

export default Footer;