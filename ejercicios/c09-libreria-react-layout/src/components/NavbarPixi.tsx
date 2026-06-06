import {Navbar, Container, Nav} from 'react-bootstrap';

export const NavbarPixi = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-3" style={{color: '#6f42c1'}}>
                    Librería Pixi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" active style={{color: '#6f42c1'}}>Inicio</Nav.Link>
                        <Nav.Link href="#">Catalogo</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

        