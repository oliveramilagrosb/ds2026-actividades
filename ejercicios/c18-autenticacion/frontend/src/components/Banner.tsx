import { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";

export const Banner = () => {
    const [mostrarBanner, setMostrarBanner] = useState<boolean>(true);

    return (
        <Container className="mb-4">
            {mostrarBanner ? (
                <Alert variant="info" onClose={() => setMostrarBanner(false)} dismissible style={{ backgroundColor: '#f3e8ff', borderColor: '#d8b4fe', color: '#581c87'}}>
                    <Alert.Heading className="fw-bold">¡Bienvenido a Librería Pixi!</Alert.Heading>
                    <p>La libreria donde encontras los mejores tesoros literarios.</p>
                </Alert>
            ) : (
                <div className="text-end mb-3">
                    <Button variant="link" size="sm" onClick={() => setMostrarBanner(true)} style={{ color: '#6f42c1', textDecoration: 'none' }}>
                        Bienvenidos!
                    </Button>
                </div>
            )}
        </Container>
    );
};      
