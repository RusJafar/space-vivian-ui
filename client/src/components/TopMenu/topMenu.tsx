import React, { useState } from 'react';
import {

Navbar,
NavbarBrand,
NavbarToggler,
Collapse,
Nav,
NavItem,
NavLink,
Button,
Modal,
ModalBody,
} from 'reactstrap';
import { useScreenSize } from '../../contexts/ScreenSizeContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const MobileHeaderWrapper = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
    `;

 const BrandElement  = () => {
    return (
        <NavbarBrand href="/" className="p-2">
        {/* <img src="https://i.ibb.co/ksKRCQNJ/Turbotext-AI-Image-8465916.png" style={{width: '100%'}} /> */}

            VIVEYA SPACE
        </NavbarBrand>
    )
}

const TopMenu: React.FC = () => {
const { width } = useScreenSize();
const [isDesktopOpen, setIsDesktopOpen] = useState(false);
const [isMobileOpen, setIsMobileOpen] = useState(false);

const toggleDesktopMenu = () => setIsDesktopOpen(!isDesktopOpen);
const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

const Links = () => {
    return (
        <>
            <NavItem className="m-2">
                <Link to="/" onClick={toggleMobileMenu}  style={{color: `${theme.colors.gray}`}}>
                    Домойки
                </Link>
            </NavItem>
            <NavItem className="m-2">
                <Link to="/contacts" onClick={toggleMobileMenu}  style={{color: `${theme.colors.gray}`}}>
                    Контактики
                </Link>
            </NavItem>
        </>
    );
}

return (
    <div>
        {width > 768 ? (
            <Navbar  expand="md" className="d-none d-md-flex" style={{background: `${theme.colors.primary}`}}>
            {BrandElement()}
            <NavbarToggler onClick={toggleDesktopMenu} />
            <Collapse isOpen={isDesktopOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {Links()}
                </Nav>
            </Collapse>
        </Navbar>
        ) : (       
        <MobileHeaderWrapper className="d-md-none">
        {BrandElement()}
        
        <Button outline  onClick={toggleMobileMenu} className="m-2">
             Менюшка
        </Button>
        <Modal isOpen={isMobileOpen} toggle={toggleMobileMenu} fullscreen>
            <ModalBody>
                <Button close onClick={toggleMobileMenu} />
                <Nav vertical className="mt-3">
                {Links()}
                </Nav>
            </ModalBody>
        </Modal>
    </MobileHeaderWrapper>
        )}
    </div>
);
};

export default TopMenu;