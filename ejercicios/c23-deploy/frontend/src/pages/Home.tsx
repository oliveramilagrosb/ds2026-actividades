import {Container, Row, Col, Spinner, Alert} from 'react-bootstrap';
import { CardLibro } from '../components/CardLibro';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export function Home() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros');

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" style={{ color: '#6f42c1' }} />
        <p className="mt-2 text-muted">Cargando destacados...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">Error al cargar destacados: {error}</Alert>
      </Container>
    );
  }

  const librosDestacados = libros ? libros.slice(0, 4) : [];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold text-center text-lg-start" style={{ color: '#4c1d95'}}>
        Nuestros Libros Destacados
      </h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {librosDestacados.map((libro) => (
          <Col key={libro.id}>
            <CardLibro {...libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}