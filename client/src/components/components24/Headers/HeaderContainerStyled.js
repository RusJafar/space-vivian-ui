import styled from "styled-components";
import BaseTheme from '../../theme'
import baseTheme from "../../theme";


const HeaderContainerStyled = styled.header`
    width: 100%;
    background: ${baseTheme.colors.black};
    display: flex;
    justify-content: space-around;
    
`

const ModelNameTitleStyled = styled.span`
    color: ${baseTheme.colors.yellow};
    font-size: 26px;
`

const HeaderMenuContainer = styled.div`
    display: flex;
    
`

const HeaderMenuItem = styled.div`
    padding: 5px;
    color: white;
`



export {HeaderContainerStyled, ModelNameTitleStyled, HeaderMenuContainer, HeaderMenuItem};