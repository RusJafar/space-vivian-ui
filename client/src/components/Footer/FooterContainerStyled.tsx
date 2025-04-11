import styled from "styled-components";
import baseTheme from "../../theme";


const FooterContainerStyled = styled.footer`
    width: 100%;
    background: ${baseTheme.colors.primary};
`

const MobileFooterStyled = styled.footer`
    width: 100%;
    background: ${baseTheme.colors.primary};
    position: fixed;
    bottom: 0;
    `

export {FooterContainerStyled, MobileFooterStyled};
