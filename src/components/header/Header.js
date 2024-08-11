import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../Images/logo/logo-n.png'
import { Badge, Input } from 'antd';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const { items } = useSelector(state => state.cart);

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
        <NavbarBrand href="/cart" className="me-auto">
          <img className='logo-h' src={logo} alt='logo Trùm nón'/>
        </NavbarBrand>
        <Nav navbar className="order-md-2 me-4">
          <NavItem>
            <Link className='cart-icon' to='/cart'>
              <Badge color='#0068C8' count={items.length} overflowCount={10} offset={[10,0]}>
                <AiOutlineShoppingCart shape="square" />
              </Badge>
            </Link>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggleNavbar} className="me-2 order-md-3" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link to="/">Trang chủ</Link>
          </NavItem>
          <NavItem>
            <Link to="/product">Sản phẩm</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Liên hệ</Link>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
  );
}