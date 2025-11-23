import React, { useState } from "react"
import { Button, Col, Container, Row } from "reactstrap"
import styled from "styled-components"
import theme from "../../theme";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { ButtonGrayStyled } from "../../styles/GlobalStyles";
import TelegramApiService from "../../apiService/TelegramApiService";

const FormWrapStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${theme.colors.gray};
    z-index: 1000;
    width: 100%;
    height: 100%;
`;



const CloseButtonStyled = styled.button`
    color: ${theme.colors.primary};
    background: ${theme.colors.gray};
    border-color: red;
    border: solid 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
`;

const InputStyled = styled.input`
    // background: ${theme.colors.primary};
    color: ${theme.colors.gray};
    max-width: 600px;
    font-size: 2em;
`

const TextareaStyled = styled.textarea`
    // background: ${theme.colors.primary};
    color: ${theme.colors.gray};
    max-width: 600px;
    font-size: 2em;
`

export const BirthdayMassageForm: React.ElementType = ({setIsPopupOpen}) => {
    const {width} = useScreenSize()
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setName('');
        setGreeting('');
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setName(e.target.value);
    };
    const handleGreetingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGreeting(e.target.value);
    };

    const handleSendGreeting = async (e: React.FormEvent) => {
        e.preventDefault();
        const massege = `Поздравление от ${name}: ${greeting}`;

        const tgApiService = new TelegramApiService();
        tgApiService.sendMassageToGroup(massege)

        // alert(`Поздравление от ${name}: ${greeting}`);
        handleClosePopup();
    };

    return (
            <FormWrapStyled >
                {width < 789?  (
                    <form onSubmit={handleSendGreeting}>
                    <Container fluid>
                    
                    <Row>
                    <Col style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <CloseButtonStyled 
                                type="button" 
                                onClick={handleClosePopup} 
                            >
                                 X
                            </CloseButtonStyled>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md='6'>
                        <h3>Как тебя зовут?</h3>
                            <InputStyled
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </Col>
    
                        <Col sm='12' md='6'>
                        <h3>Напиши свои пожелания:</h3>
                            <TextareaStyled
                                value={greeting}
                                onChange={(e) => setGreeting(e.target.value)}
                                required
                                style={{ width: '100%', height: '40vh' }}
                            />
                        </Col>
                        <Col md="12" style={{ display: 'flex', justifyContent: 'center'}}>
                            <ButtonGrayStyled type="submit" style={{"color": `"${theme.colors.primary}"`}}>Отправить</ButtonGrayStyled>
                        </Col>
                    </Row>
                    
                    </Container>
                </form>
                ): (
                    <form onSubmit={handleSendGreeting}>
                    <Container >
                    
                    <Row>
                    <Col style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <CloseButtonStyled 
                                type="button" 
                                onClick={handleClosePopup} 
                            >
                                 X
                            </CloseButtonStyled>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3>Как тебя зовут?</h3>
                            <InputStyled
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                                style={{ width: '100%' }}
                            />
                             <h3 className="mt-3" >Напиши свои пожелания:</h3>
                            <TextareaStyled
                                value={greeting}
                                onChange={(e) => setGreeting(e.target.value)}
                                required
                                style={{ width: '100%', height: '40vh' }}
                            />
                        </Col>
    
                        <Col className="mt-3" md="12" style={{ display: 'flex', justifyContent: 'center'}}>
                            <ButtonGrayStyled type="submit" style={{"color": `"${theme.colors.primary}"`}}>Отправить</ButtonGrayStyled>
                        </Col>
                    </Row>
                    
                    </Container>
                </form>
                )}
                
            </FormWrapStyled>
    )
}