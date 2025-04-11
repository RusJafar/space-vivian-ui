import styled from "styled-components";
import theme from "../../theme";


const TopBannerContainerStyled = styled.div`
   width: 100%;
   max-width: 100%;
    height: 700px;
    background-image: url(${p => p.bg});
    background-position: center;
    display: flex;
    z-index:1;
   `
const TopBannerBgStyled = styled.div`
   position: absolute;
   width: 100%;
   
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const TopBannerRow = styled.div`
   z-index: 1;
   display: flex;
   width: 100%
`

const TopBannerDescription = styled.div`
    width: 100%;
    height: 100%;
    color: ${theme.colors.yellow};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TopBannerColumn = styled.div`
    padding: 2em;
    width:100%;
    color: ${theme.colors.gray}
`
export {TopBannerContainerStyled, TopBannerBgStyled, TopBannerRow, TopBannerColumn, TopBannerDescription};

