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

const MobileHeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;
    `;

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
                <Link to="/" onClick={toggleMobileMenu}>
                    Домойки
                </Link>
            </NavItem>
            <NavItem className="m-2">
                <Link to="/contacts" onClick={toggleMobileMenu}>
                    Контактики
                </Link>
            </NavItem>
        </>
    );
}

return (
    <div>
        {width > 768 ? (
            <Navbar color="light" light expand="md" className="d-none d-md-flex">
            <NavbarBrand href="/">Brand</NavbarBrand>
            <NavbarToggler onClick={toggleDesktopMenu} />
            <Collapse isOpen={isDesktopOpen} navbar>
                <Nav className="ml-auto" navbar>
                {Links()}
                </Nav>
            </Collapse>
        </Navbar>
        ) : (       
        <MobileHeaderWrapper className="d-md-none">
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