import { Container, Row, Col } from 'react-bootstrap';
import { CardLibro } from '../components/CardLibro';

interface CatalogoProps {
  libros: any[];
}

export function Catalogo({ libros }: CatalogoProps) {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold text-center text-lg-start" style={{ color: '#4c1d95'}}>
        Nuestro Catálogo Literario Completo
      </h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {libros.map((libro) => (
          <Col key={libro.id}>
            <CardLibro 
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              imagen={libro.imagen}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}