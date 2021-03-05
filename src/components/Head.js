import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/cart">Add to Cart</Nav.Link>
      <Nav.Link href="/userlogin">User Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header;