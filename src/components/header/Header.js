import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../Images/logo/logo-n.png'
import { Badge } from 'antd';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed)

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Navbar className={isActive ?'menu active show':'menu'} expand='md'>
        <NavbarBrand href="/" className="me-auto">
          <img className='logo-h' src={logo} alt='logo Trùm nón'/>
        </NavbarBrand>
        <Nav navbar className="order-md-2 me-4">
          <NavItem>
            <NavLink  className='cart-icon' href='/'>
              <Badge color='#0068C8' count={5}>
                <AiOutlineShoppingCart shape="square" />
              </Badge>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggleNavbar} className="me-2 order-md-3" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Sản phẩm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Liên hệ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Đăng nhập</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}