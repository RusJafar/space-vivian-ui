import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contacts from './pages/Contacts';
import TopMenu from './components/TopMenu/topMenu';
import Footer from './components/Footer/Footer';

const AppRouter = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <Router>
            <TopMenu />         
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<>Not found</>} />
                </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;