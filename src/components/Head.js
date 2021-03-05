import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand href="/">BOOZE BROS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart">Add to Cart</Nav.Link>
      <Nav.Link href="/userlogin">User Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header;