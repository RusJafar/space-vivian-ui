import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './styles/GlobalStyles';
import AppRouter from './Router';
import { ScreenSizeProvider } from './contexts/ScreenSizeContext';
import TopMenu from './components/TopMenu/topMenu';
import Footer from './components/Footer/Footer';
import { HelmetProvider } from 'react-helmet-async';

// className="App"
const GlobalWarapStyled = styled.div`
    background: ${theme.colors.gray}
`


function App() {
    return (
        <ScreenSizeProvider>
            <ThemeProvider theme={theme} >
                
                <GlobalStyles theme={theme} />
                <HelmetProvider>
                    <AppRouter />
                </HelmetProvider>
                

            </ThemeProvider>
        </ScreenSizeProvider>
    );
}

export default App;
