import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import * as motion from "motion/react-client";

interface BirthdayBannerProps {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const ImageBall = styled.div`
    background-image: url('https://i.ibb.co/gbNw1vL3/3d-render-of-chrome.png');
    background-size: cover;
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
    font-size: 2rem;
    font-weight: bold;
    color: #ff5a5a;
    text-align: center;
    margin-top: 5px;
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

const BirthdayBanner: React.FC = () => {
    const targetDate = new Date(new Date().getFullYear(), 3, 24); // April 24 (month is 0-indexed)
    const [timeLeft, setTimeLeft] = useState<BirthdayBannerProps>();

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            if (now > targetDate) {
                targetDate.setFullYear(targetDate.getFullYear() + 1); // Move to next year if the date has passed
            }
            const difference = targetDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            const formattedTimeLeft: BirthdayBannerProps = {
                days: String(days).padStart(2, '0'),
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
    const [name, setName] = useState('Рудд');
    const [greeting, setGreeting] = useState('');

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setName('');
        setGreeting('');
    };
    
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleSendGreeting = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/greeting');
        } catch (error) {
            console.error('Error:', error);
        }

        alert(`Поздравление от ${name}: ${greeting}`);
        handleClosePopup();
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setName(e.target.value);
    };
    const handleGreetingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGreeting(e.target.value);
    };

    return (
        <Container fluid style={{ background: 'linear-gradient(183deg, rgb(255 255 255), #d0fff2)', padding: '20px', borderRadius: '10px' }}>
             <Row>
             <ImageBall />
             </Row>
            <Row>
            
            <Col md="6" className="text-center text-md-start">
                <TitleStyle>У меня скоро День рождения!</TitleStyle>
            </Col>
            <Col md="6"  className="text-center text-md-end">
            Осталось {(() => {
                const digits = timeLeft?.days.split('').map((digit, index) => (
                    <Digit key={index} digit={digit}>{digit}</Digit>
                ));
                return <>{digits}</>;
                })()} дней {' '} 
                 {(() => {
                const digits = timeLeft?.hours.split('').map((digit, index) => (
                    <Digit key={index} digit={digit}>{digit}</Digit>
                ));
                return <>{digits}</>;
                })()} часов {' '} 
                {(() => {
                const digits = timeLeft?.minutes.split('').map((digit, index) => (
                    <Digit key={index} digit={digit}>{digit}</Digit>
                ));
                return <>{digits}</>;
                })()} минут {' '} 
                {(() => {
                const digits = timeLeft?.seconds.split('').map((digit, index) => (
                    <Digit key={index} digit={digit}>{digit}</Digit>
                ));
                return <>{digits}</>;
                })()} секунд                 
                
            <h5>24 апреля 2024 года</h5>
            <h3>Мне исполнится 10 лет!</h3>
            </Col>
            <Col sm='12' md='6' className="text-center text-md-end">
                <Button onClick={handleOpenPopup}>Поздравить!</Button>
                {isPopupOpen && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                        width: '100%',
                        height: '100%', 
                    }}>
                        <form onSubmit={handleSendGreeting}>
                            <Row>
                                <Col  style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button 
                                        type="button" 
                                        onClick={handleClosePopup} 
                                    >
                                         X
                                    </Button>
                                </Col>
                                <Col sm='12'>
                                    <h3>Как тебя зовут?</h3>
                                </Col>
                                <Col sm='12'>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        required
                                        style={{ width: '100%' }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='12'>
                                    <h3>Напиши свои пожелания:</h3>
                                </Col>
                                <Col sm='12'>
                                    <textarea
                                        value={greeting}
                                        onChange={(e) => setGreeting(e.target.value)}
                                        required
                                        style={{ width: '100%', height: '40vh' }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit">Отправить</Button>
                            
                        </form>
                    </div>
                )}
            </Col>
            </Row>
        </Container>
    );
};

export default BirthdayBanner;