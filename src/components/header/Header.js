import React, {useContext, useState} from 'react'
import { AppContext } from '../../AppContext'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link} from 'react-router-dom'

export default function Header() {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  const {cart} = useContext(AppContext)
  return (
    <div>
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/product">Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Link to="/cart">Cart <span>{cart.length}</span></Link>
      </Navbar>
      </div>
    </div>
  )
}
