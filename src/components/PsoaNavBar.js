import React, { Component } from 'react'
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap';
/**https://react-bootstrap.github.io/components/navbar/ 
 * 
 *               <NavDropdown title="Apps" id="psoa-nav-dropdown">
                <NavDropdown.Item href="#home">Contas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#home">Exit</NavDropdown.Item>
              </NavDropdown>
*/
export default class PsoaNavbar extends Component {
  render() {
    return (
      <header className="header text-center">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#about">PSOA</Navbar.Brand>
          <Navbar.Toggle aria-controls="psoa-navbar-nav" />
          <Navbar.Collapse id="psoa-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#education">Educação</Nav.Link>
              <Nav.Link href="#experience">Experiência</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}