import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import baseTheme from "./theme";
import MainPage24 from "./pages/MainPage24";

const AppStyled = styled.div`
    background: ${baseTheme.colors.cotton};
    width: 100%;
`

function App() {
    return (
        <AppStyled className="App">
            <MainPage24 />
        </AppStyled>
    );
}

export default App;
