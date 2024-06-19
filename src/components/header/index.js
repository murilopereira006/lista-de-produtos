import React from 'react';
import { HeaderContainer, Title, Nav, NavLink } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>My App</Title>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
