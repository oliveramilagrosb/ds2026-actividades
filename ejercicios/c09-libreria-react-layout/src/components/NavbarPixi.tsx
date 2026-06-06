import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavbarPixi = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3" style={{color: '#6f42c1'}}>
                    Librería Pixi
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" active style={{color: '#6f42c1'}}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo" style={{color: '#6f42c1'}}>Catalogo</Nav.Link>
                        <Nav.Link as={Link} to="/contacto" style={{color: '#6f42c1'}}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

        