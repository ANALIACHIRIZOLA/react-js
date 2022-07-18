import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
export default function Header () {
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Cianita Tienda Holistica</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sahumerios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bombitas Defumacion</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Perlas Aromaticas</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contacto</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}