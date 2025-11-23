import React from "react";
import {Col, Container, Row} from "reactstrap";
import BirthdayBanner from "../components/Banners/BirthdayBanner";
import NewBanner from "../components/Banners/NewBanner.tsx";
import { MainShorGallery } from "../data/galary.ts";
import ImageGallery from "../components/GridGallery/GridGellery.tsx";
import { PageWrapStyled } from "../styles/GlobalStyles.tsx";
import { Helmet } from "react-helmet-async";


const MainPage = () => {

    return (
        <PageWrapStyled>
      <Helmet>
        <title>Viveya Space - сайт обо мне</title>
        <meta name="description" content="Фотографии, танцы и игры с друзьями!" />
      </Helmet>
            <NewBanner />
            <BirthdayBanner/>
            <Container>
                
                <Row>
                <h2>Фоточки</h2>
                       <Col md="12">
                            {ImageGallery({bg: "red", imageDataList: MainShorGallery})}                       
                       </Col>
                </Row>
            </Container>
            <Container>
                <h2>Несколько слов обо мне</h2>
                    <Row>
                        <Col>
                        <p>Привет! Меня зовут Вивиан, и мне 10 лет. Я живу в Москве и учусь в третьем классе. 
                            Учиться бывает непросто, но я стараюсь справляться со всеми заданиями — ведь это помогает 
                            становиться лучше каждый день!</p>

                        <p>Моё главное увлечение — танцы. Я занимаюсь акробатическим рок-н-роллом в клубе «APP Dance» 
                            и выступаю на соревнованиях с программой «Школьницы». Мы с командой репетируем до седьмого пота, 
                            чтобы наши выступления были чёткими и зрелищными. Недавно вошли в  финал на Кубке России — это так вдохновляет! 
                            Если хочешь посмотреть, как мы готовимся, загляни в мой Like: там я иногда выкладываю закулисье тренировок и весёлые моменты с друзьями. </p>

                        <p>А ещё я обожаю создавать короткие видео — придумываю смешные сценки, танцевальные челленджи и даже 
                            снимаю мини-ролики про свою жизнь. Это так здорово придумывать идеи, монтировать и делиться своим творчеством с другими!</p>

                        <p>Когда хочется расслабиться, я играю в Roblox с подругами. Наша любимая игра — Murder Mystery 2. Мы созваниваемся,
                             и пытаемся разгадать, кто же убийца, а кто детектив. А ещё мы  строим невероятные миры в других проектах — например, недавно сделали  мир для паркура! </p>

                        <p>Мечтаю найти новых друзей, которые тоже любят танцы, игры или просто хотят болтать о чём-то интересном. 
                            Давай обменяемся идеями для TikTok или сыграем вместе в Roblox? Буду рада знакомству! 😊</p>
                        </Col>
                    </Row>
            </Container>
        </PageWrapStyled>
    )
}

export default MainPage;