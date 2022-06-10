import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, Button, Row, Col } from 'reactstrap';
import '../supports/SbStyle.css'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { SubMenuMen, SubMenuWomen } from './SubMenu';

// import LogoBlack from '../supports/images/seaborn101-black.png'
// import LogoWhite from '../supports/images/seaborn101-white.png'

class NavbarSb extends Component {
    render() {
        return (
            <Navbar container sticky='top' className='sb-bg-dark py-0'>
                <Nav className='d-block d-lg-none'>
                    <NavItem>
                        <NavLink to="/" className="sb-link px-2 py-3">
                            <SearchOutlinedIcon sx={{fontSize : 24}} />
                        </NavLink>
                    </NavItem>
                </Nav>

                <NavbarBrand href='/' className='text-white me-0'>SEABORN101</NavbarBrand>

                <Nav className='d-none d-lg-flex'>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <NavLink to="/">NEW</NavLink>
                        </span>
                    </NavItem>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <span>MEN</span>
                        </span>
                        <SubMenuMen />
                    </NavItem>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <span>WOMAN</span>
                        </span>
                        <SubMenuWomen />
                    </NavItem>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <NavLink to="/">BRANDS</NavLink>
                        </span>
                    </NavItem>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <NavLink to="/">ABOUT</NavLink>
                        </span>
                    </NavItem>
                    <NavItem className='sb-nav-item'>
                        <span className='sb-nav-item-child'>
                            <NavLink to="/">SALE</NavLink>
                        </span>
                    </NavItem>
                </Nav>

                <Nav className='align-items-center'>
                    <NavItem className='d-none d-lg-block'>
                        <NavLink to="/" className="sb-link px-2 py-3">
                            <SearchOutlinedIcon sx={{fontSize : 24}} />
                        </NavLink>
                    </NavItem>

                    <NavItem className='d-none d-lg-block'>
                        <NavLink to="account/login" className="sb-link px-2 py-3">
                            <PersonOutlineOutlinedIcon sx={{fontSize : 24}} />
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <Button 
                            className='sb-btn-transparent sb-btn-rm-shadow px-2 py-3'
                            onClick={this.props.cartOnClick}
                        >
                            <ShoppingCartOutlinedIcon sx={{fontSize : 24}} className="text-white" />
                        </Button>
                    </NavItem>

                    <NavItem className='d-block d-lg-none'>
                        <Button 
                            className='sb-btn-transparent sb-btn-rm-shadow px-2 py-3'
                            onClick={this.props.burgerOnClick}
                        >
                            <MenuOutlinedIcon sx={{fontSize : 24}} className='text-white' />
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavbarSb;