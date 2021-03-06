import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--lightBlue) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}
.nav-link:hover{
    color:var(--mainDark) !important;
}
`
class Navbar extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk*/}
            <Link to='/about'>
                <i className="nav-link navbar-brand fas fa-home"></i>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/' className="nav-link">Desserts
                    </Link>
                </li>
                
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;