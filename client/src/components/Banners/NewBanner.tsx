import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const BannerStyle = styled.div`
        background-image: url('https://i.ibb.co/6Rpv4M73/1-5996.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 65vh;
        display: flex;
        margin: 25px;
    `;

    const BannerWrapper = styled.div`
      width: 100%;
          background-color: rgb(212 134 147);
    `;

    const TitleWrapper = styled.div`
        position: absolute;
        top: 49%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00ffa25e;
        color: #ff5a5a;
        width: 44vh;
    `

    

const NewBanner: React.FC = () => {
    const [screenSize, setScreenSize] = useState<{ width: number; height: number }>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Устанавливаем начальное значение и подписываемся на событие изменения размера окна
        window.addEventListener('resize', handleResize);

        // Очистка события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="banner-wrapper" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
            
            {screenSize.width < 768 ? (
                <Container>
                    <Row className="align-items-center">
                        <BannerWrapper>
                            <BannerStyle />
                        </BannerWrapper>
                        <TitleWrapper>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                Добро пожаловать в мой мир!
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                                Мечтай смело, твори ярко, сияй всегда!
                            </p>
                        </TitleWrapper>

                    </Row>
                </Container>

            ): (
            <Container>
                <Row className="align-items-center">
                    <Col md="6" className="text-center text-md-start">
                        <TitleWrapper style={{  width: '61vh', left: '33%' }}>
                        <h1 style={{ lineHeight: 1, fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px', padding: '15px' }}>
                            Добро пожаловать в мой мир!
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                            Мечтай смело, твори ярко, сияй всегда!
                        </p>
                        </TitleWrapper>
                    </Col>
                    <Col md="6" className="text-center">
                        <img
                            src="https://i.ibb.co/kgthqygp/5K6A2344.jpg"
                            alt="Banner"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>
            )}
        </div>
    );
};

export default NewBanner;