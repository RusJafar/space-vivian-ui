import React from 'react';
import {HeaderContainerStyled, ModelNameTitleStyled, HeaderMenuContainer, HeaderMenuItem} from "./HeaderContainerStyled";


const Header = () => {

    return (
        <HeaderContainerStyled>
            <ModelNameTitleStyled>Vivian</ModelNameTitleStyled>
            <HeaderMenuContainer>
                <HeaderMenuItem>2023</HeaderMenuItem>
                <HeaderMenuItem>2024</HeaderMenuItem>
                {/*<HeaderMenuItem>Menu item</HeaderMenuItem>*/}
            </HeaderMenuContainer>
        </HeaderContainerStyled>
    )
}

export default Header;
