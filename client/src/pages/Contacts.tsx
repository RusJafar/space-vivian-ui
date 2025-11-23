import React, { useEffect, useState } from 'react';
import theme from '../theme';
import { ButtonPrimaryStyled, PageWrapStyled } from '../styles/GlobalStyles';
import styled from 'styled-components';
import TelegramApiService from '../apiService/TelegramApiService';
import { Col, Row } from 'reactstrap';
import { useScreenSize } from '../contexts/ScreenSizeContext';
import { Helmet } from 'react-helmet-async';

const ContactsWrap = styled.div`
    padding: 20px;
    background: ${theme.colors.gray};
`

const FormStyled = styled.form`
    maxWidth: '400px'
    marginTop: '20px'
`

interface Question  {
    question: string,
    options: string[],
    correctAnswer: string
}

const Contacts: React.FC = () => {
     const { width } = useScreenSize();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [startQuiz, setStartQuiz] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [count, setCount] = useState(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const tgApiService = new TelegramApiService();
        const text = `Сообщение с страницы Контакты от ${name}: ${message}`;
        tgApiService.sendMassageToGroup(text);

        // alert(`Поздравление от ${name}: ${greeting}`);
    };

    const handleNameChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleMassegeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }


    

    const quizQuestions: Question[] = [
        {
            question: "Как расшифровывается аббревиатура названия игры в Roblox 'MM2' ?",
            options: ["Мurder Mystery 2", "Магия Мира 2", "Морская Миссия 2"],
            correctAnswer: "Мurder Mystery 2"
        },
        {
            question: "Сколько ног у паука?",
            options: ["6", "8", "10"],
            correctAnswer: "8"
        },
        {

            question: "Какой падеж Кого? Что?",
            options: ["Именительный", "Дательный", "Винительный"],
            correctAnswer: "Винительный"
        },
        {
            question: "Что происходит с водой при замерзании?",
            options: ["Она становится легче",  "Она становится тяжелее", "Ничего не меняется"],
            correctAnswer: "Она становится легче"
        },
        {
            question: "Сколько игроков в футбольной команде на поле?",
            options: ["10",  "11", "12"],
            correctAnswer: "11"
        },
        {
            question: "Как называется первый ход в шахматах?",
            options: ["Рокировка",  "Дебют", "Миттельшпиль"],
            correctAnswer: "Дебют"
        },
        {
            question: "Что такое байт?",
            options: ["8 бит",  "4 бита", "16 бит"],
            correctAnswer: "8 бит"
        },
        {
            "question": "Кто написал картину «Чёрный квадрат»?",
            "options": [
                "Пабло Пикассо",
                "Казимир Малевич",
                "Винсент Ван Гог"
            ],
            "correctAnswer": "Казимир Малевич"
        },
        {
            "question": "Как называется самая известная сказка о царе Салтане?",
            "options": [
                "«Сказка о золотом петушке»",
                "«Сказка о царе Салтане»",
                "«Сказка о рыбаке и рыбке»"
            ],
            "correctAnswer": "«Сказка о царе Салтане»"
        },
        {
            "question": "Какой музыкальный инструмент называют «королём инструментов»?",
            "options": [
                "Фортепиано",
                "Скрипка",
                "Орган"
            ],
            "correctAnswer": "Орган"
        }
    ];

    useEffect(() => {
        generateQuestionsSet();
    }, [startQuiz]);

    // let questionsSet: Question[] = [];
    const [questions, setQuestions] = useState<Question[]>([]);

    const generateQuestionsSet = () => {
        setQuestions([]);
        console.log('Questions set generated' + JSON.stringify(questions));
        
        let count = 3;
        let questionsList: Question[] = new Array(...quizQuestions);
        let questionsResult: Question[] = [];
        for(let i = 0; i <= count; i++) {
            const randomIndex = Math.floor(Math.random() * questionsList.length);
            console.log(randomIndex);  
            questionsResult.push(questionsList[randomIndex]);    
            questionsList = questionsList.filter(q => q.question !== questionsList[randomIndex].question )
            console.log(questions);       
            count--;
        }
        setQuestions(questionsResult);
    };

    const handleAnswer = (answer: string) => {
        if(questions.length === 0) {
            throw new Error('Question set is empty');           
        }
        const question = questions[currentQuestion];
        if (answer === question.correctAnswer) {
            setIsCorrect(true);
            setCount(count + 1);
            setCurrentQuestion(currentQuestion + 1);
            console.log(`Correct! ${question.question} - ${answer}`);
            console.log(`Count: ${count}`);
            console.log(`Current Question: ${currentQuestion}`);
            
            
            if (count === questions.length) {
                setShowContacts(true);
            } 
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setIsCorrect(false);
        }
    };

    const handleStartQuiz = () => {
        setStartQuiz(true);
    }

    const restartQuiz = () => {
        setStartQuiz(false);
        setCurrentQuestion(0);
        setIsCorrect(false);
        setCount(1);
        setShowContacts(false);
    };


    return (
        <PageWrapStyled>
                  <Helmet>
                    <title>Viveya Space - Контактики</title>
                    <meta name="description" content="Напиши мне сообщение и узнай мои контакты!" />
                  </Helmet>
            <h1>Напиши мне собщение</h1>
            {/* <p></p> */}
            <Row>
                <Col sm='12' md='6'>
                    <FormStyled  onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Представтесь пожалуйста:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                onChange={handleNameChange}
                            />
                        </div>
                    
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Твое сообщение для меня:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                onChange={handleMassegeChange}
                            ></textarea>
                        </div>
                        <ButtonPrimaryStyled type="submit" style={{width: '100$%', maxWidth: '500px'}}>
                            Отправить
                        </ButtonPrimaryStyled>  
                    </FormStyled>
                </Col>
                <Col sm='12' md='6'>
                    <h2>Контактная информация</h2>
                    <p>Чтобы увидеть контакты придется ответить на несколько вопросов 😃.</p>
                    {!startQuiz ? (
                        <ButtonPrimaryStyled
                        onClick={handleStartQuiz}>
                            Показать контакты
                    </ButtonPrimaryStyled>
                    ) : (
                        <>
                            {currentQuestion + 1 <= questions.length ? (
                                <Row>
                                    <h4  style={{lineHeight: '4vh'}}>{questions[currentQuestion].question}</h4>
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <Col>
                                        <ButtonPrimaryStyled
                                            key={index}
                                            onClick={() => handleAnswer(option)}
                                            // style={{
                                            //     display: 'block',
                                            //     marginBottom: '10px',
                                            //     padding: '10px',
                                            //     // backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral'
                                            // }}
                                        >
                                            {option}
                                        </ButtonPrimaryStyled>
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                               showContacts ? (
                                <div>
                                <p>Roblox: ViviZav</p>
                                <p>Like: @1053152361</p>
                            </div>
                               ) : (
                                <>
                                <h4>Это фиаско! 😔</h4>
                                <p>Ответьте на вопросы ПРАВИЛЬНО, чтобы увидеть контактную информацию.</p>
                                <ButtonPrimaryStyled
                                    onClick={restartQuiz}>Попробовать снова</ButtonPrimaryStyled>
                                    </>
                               )
                            )}
                        </>)}
                </Col>
                {width > 768 ? ( <Col md='12' style={{height: '35vh'}}></Col> ) : ( <></>  )} 
            </Row>
        </PageWrapStyled>
    );
};

export default Contacts;