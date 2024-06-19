import React from 'react';
import { HeaderContainer, Title, Nav, NavLink, TitleLink } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <TitleLink href='/'>
                <Title>My App</Title>
            </TitleLink>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
