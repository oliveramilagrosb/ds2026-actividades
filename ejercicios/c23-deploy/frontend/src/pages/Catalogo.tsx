import { Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import { CardLibro } from '../components/CardLibro';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro'; // Importamos el tipo

export function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros');
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" style={{ color: '#6f42c1' }}/>
        <p className="mt-2 text-muted">Cargando catálogo...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">¡Ups! Algo falló al cargar los libros: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold text-center text-lg-start" style={{ color: '#4c1d95'}}>
        Nuestro Catálogo Literario
      </h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {libros && libros.map((libro) => (
          <Col key={libro.id}>
            <CardLibro {...libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

