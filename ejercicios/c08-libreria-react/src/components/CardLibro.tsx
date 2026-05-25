import { useState } from "react";
import { Card, Button } from "react-bootstrap";

interface libroProps {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
}

export const CardLibro = ({titulo, autor, imagen}: libroProps) => {
    const [esFavorito, setEsFavorito] = useState<boolean>(false);

    return (
        <Card className="h-100 shadow-sm text-center" style={{ border: '1px solid #e0d4f7' }}>
            <Card.Img 
                variant="top"
                src={imagen}
                alt={titulo}
                style={{ height: '320px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="fw-bold fs-5" style={{color: '#6f42c1'}}>{titulo}</Card.Title>
                    <Card.Text className="text-muted small">{autor}</Card.Text>
                </div> 
                
                <div className="mt-3 d-flex gap-2 justify-content-center">
                    <Button 
                        variant={esFavorito ? "warning" : "outline-warning"}
                       size="sm"
                       onClick={() => setEsFavorito(!esFavorito)}
                    >
                        {esFavorito ? "⭐En Favoritos" : "☆ Agregar a favoritos"}
                    </Button>

                    <Button variant="outline-primary" size="sm" style={{ borderColor: '#6f42c1', color: '#6f42c1' }}>
                        Ver detalle
                    </Button>
                </div>
            </Card.Body>       
        </Card>
    );
};

