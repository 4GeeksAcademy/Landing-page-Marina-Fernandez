import { Navbar, Container, Nav } from 'react-bootstrap';

const MiNavbar = () => {
  return (
    <Navbar bg="success" variant="dark" className="fw-bold">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#" className="text-white">
          Plantas medicinales
        </Navbar.Brand>

        <Nav className="d-flex flex-row">
          <Nav.Link href="#" className="text-white">Usos</Nav.Link>
          <Nav.Link href="#" className="text-white">Beneficios</Nav.Link>
          <Nav.Link href="#" className="text-white">Conócenos</Nav.Link>
          <Nav.Link href="#" className="text-white">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiNavbar;