import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { BirthdayMassageForm } from '../forms/BirthdayMassegeForm';
import { useScreenSize } from '../../contexts/ScreenSizeContext';
import theme from '../../theme';
import { ButtonGrayStyled, ButtonPrimaryStyled } from '../../styles/GlobalStyles';

interface BirthdayBannerProps {
    days: number;
    hours: string;
    minutes: string;
    seconds: string;
}

const ImageBall = styled.div`
    background-image: url('https://i.ibb.co/gbNw1vL3/3d-render-of-chrome.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    animation: pulse 3s infinite;


    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const TitleStyle = styled.h2`
    font-size: 6vh;
    font-weight: bold;
    color: #ff5a5a;
    text-align: center;
    margin-top: 0vh;
    `;

const Digit = styled.span<{ digit: string }>`
    font-size: 1rem;
    font-weight: bold;
    color: ${({ digit }) => {
        switch (digit) {
            case '0': return '#FF5733'; // Red-orange
            case '1': return '#33FF57'; // Green
            case '2': return '#3357FF'; // Blue
            case '3': return '#FF33A1'; // Pink
            case '4': return '#A133FF'; // Purple
            case '5': return '#FFD133'; // Yellow
            case '6': return '#33FFF5'; // Cyan
            case '7': return '#FF8C33'; // Orange
            case '8': return '#8C33FF'; // Violet
            case '9': return '#33FF8C'; // Lime
            default: return '#000'; // Fallback to black
        }
    }};`;

const Popup = styled.div`
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000`;

const InfoWrap = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
`;

const DayToBirth = styled.h3`
    color: ${theme.colors.primaryRich};
    font-size: 13vh;
    position: absolute;
    top: 36%;
    left: 40%;
    width: 150px;
`

const BirthdayBanner: React.FC = () => {
    const targetDate = new Date(new Date().getFullYear(), 3, 24, 23,59); // April 24 (month is 0-indexed)
    const [timeLeft, setTimeLeft] = useState<BirthdayBannerProps>();
    const {width} = useScreenSize()

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            // if (now > targetDate) {
                
            // }
            let difference = targetDate.getTime() - now.getTime();
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            if(days < 0) {
                targetDate.setFullYear(targetDate.getFullYear() + 1); // Move to next year if the date has passed
                 difference = targetDate.getTime() - now.getTime();
                 days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
            }
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            const formattedTimeLeft: BirthdayBannerProps = {
                days: Number.parseInt(String(days).padStart(1, '0')),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            };
            setTimeLeft(formattedTimeLeft);
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial calculation

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };



    return (
    
        <>
            {width < 789? (
                <Container fluid style={{ background: 'linear-gradient(183deg, #484646,rgb(255, 255, 255))', padding: '20px', }}> 
                    <Row style={{position: "relative"}}>
                        <ImageBall />
                        <DayToBirth>{
                              (timeLeft?.days || 0)  > 0 ? timeLeft?.days : '🎉 🎁 🎂'
                            }</DayToBirth>
                    </Row>
                    <Row>
                    
                    
                    

                    {((timeLeft?.days || 0) < 10) && ((timeLeft?.days || 0) > 0) &&  (
                        <Row>
                            <Col md="6" className="text-center text-md-start">
                    
                            <TitleStyle>дней до моего Дня рождения!</TitleStyle>
                            </Col>
                            <Col md="6"  className="text-center text-md-end">
                                <h5>24 апреля 2024 года</h5>
                                <h3>Мне исполнится 10 лет!</h3>
                            </Col>
                                <Col sm='12' md='6' className="text-center text-md-end">
                                <ButtonGrayStyled onClick={handleOpenPopup}>Поздравить!</ButtonGrayStyled>
                                {isPopupOpen && <BirthdayMassageForm setIsPopupOpen={setIsPopupOpen} />}
                            </Col>
                        </Row>
                    )}
                    {(timeLeft?.days || 0)  === 0 &&  (
                        <Row>
                        <Col md="6" className="text-center text-md-start">
                
                        <TitleStyle>У меня сегодня День рождения!</TitleStyle>
                        </Col>
                        <Col md="6"  className="text-center text-md-end">
                            <h3>Мне исполнится 10 лет!</h3>
                        </Col>
                            <Col sm='12' md='6' className="text-center text-md-end">
                            <ButtonGrayStyled onClick={handleOpenPopup}>Поздравить!</ButtonGrayStyled>
                            {isPopupOpen && <BirthdayMassageForm setIsPopupOpen={setIsPopupOpen} />}
                        </Col>
                    </Row>
                    )}
                    {(timeLeft?.days || 0)  > 10 &&  (
                        <Row>
                        <Col md="6" className="text-center text-md-start">
                
                        <TitleStyle>Днюха не скоро😔 Но я очень жду</TitleStyle>
                        </Col>
                    </Row>
                    )}
                    
                    </Row>
                    </Container>

            ): (
                <Container fluid style={{ background: `linear-gradient(256deg, ${theme.colors.gray},rgb(114, 114, 114))`, padding: '20px', }}> 
                 <Row>
                    <Col md='6' style={{position: "relative"}}>
                        <ImageBall/>
                        <DayToBirth style={{ width: '100%', top: '37%', left: `45%`}}>
                        {
                             (timeLeft?.days || 0)  > 0 ? timeLeft?.days : '🎉 🎁 🎂'
                            }
                        </DayToBirth>
                    </Col>
                    {((timeLeft?.days || 0) < 10) && ((timeLeft?.days || 0) > 0) &&  (
                        <Col md="6" >
                        <TitleStyle>У меня скоро День рождения!</TitleStyle>
                        <InfoWrap>
                        <h3>Осталось {timeLeft?.days} дней!</h3>
                        <p>24 апреля 2024 года</p>
                        <h3>Мне исполнится 10 лет!</h3>
                        <ButtonPrimaryStyled onClick={handleOpenPopup}>Поздравить!</ButtonPrimaryStyled>
                        {isPopupOpen && <BirthdayMassageForm setIsPopupOpen={setIsPopupOpen} />}
                        </InfoWrap>
                    </Col>
                    )}
                    {(timeLeft?.days || 0)  === 0 &&  (
                        <Col md="6" >
                        <TitleStyle>У меня сегодня День рождения!</TitleStyle>
                        <InfoWrap>
                        <p>24 апреля 2024 года</p>
                        <h3>Мне 10 лет!</h3>
                        <ButtonPrimaryStyled onClick={handleOpenPopup}>Поздравить!</ButtonPrimaryStyled>
                        {isPopupOpen && <BirthdayMassageForm setIsPopupOpen={setIsPopupOpen} />}
                        </InfoWrap>
                    </Col>
                    )}
                    {(timeLeft?.days || 0)  > 10 &&  (
                        <Col md="6" >
                        <TitleStyle>Днюха не скоро😔 Но я очень жду</TitleStyle>
                        <InfoWrap>
                        <h3>Осталось {timeLeft?.days} дней!</h3>
                        
                        </InfoWrap>
                    </Col>
                    )}
                    </Row>
                    <Row>
                    
                    
   
                    <Col sm='12' md='6' className="text-center text-md-end">
                        
                    </Col>
                    </Row>
                    </Container>
            )}
            
            </>
    );
};

export default BirthdayBanner;