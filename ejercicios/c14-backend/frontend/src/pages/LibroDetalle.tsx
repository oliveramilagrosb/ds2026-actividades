import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';

export function LibroDetalle() {
    const { id } = useParams<{ id: string }>();

    const { data: libros, loading, error } = useFetch<any[]>('/libros.json');

    if (loading) {
        return (
          <Container className="text-center mt-5">
            <Spinner animation="border" variant="primary" style={{ color: '#6f42c1' }} />
            <p className="mt-2 text-muted">Cargando detalles del libro...</p>
          </Container>
        );
    }

    if (error) {
        return (
          <Container className="mt-4">
            <Alert variant="danger">Error al cargar el detalle: {error}</Alert>
          </Container>
        );
    }

    const libroEncontrado = libros?.find(l => l.id === Number(id));

    
    if (!libroEncontrado) {
      return (
        <Container className="py-5 text-center">
          <div className="p-5 rounded shadow-sm" style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff' }}>
            <h2 style={{ color: '#4c1d95' }} className="fw-bold">Detalle del Libro</h2>
            <p className="mt-3 text-muted">
              Detalle del libro: <strong style={{ color: '#6f42c1' }}>{id}</strong>
            </p>
          </div>
        </Container>
      );
    }

    return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4">
          <div className="p-2 bg-white rounded shadow-sm" style={{ border: '1px solid #e9d5ff' }}>
            <img 
              src={libroEncontrado.imagen} 
              className="img-fluid w-100 rounded" 
              alt={`Portada ${libroEncontrado.titulo}`}
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
        </Col>

        <Col md={7} className="ps-md-5">
          <h1 className="display-4 fw-bold" style={{ color: '#4c1d95' }}>
            {libroEncontrado.titulo}
          </h1>
          <h3 className="text-muted mb-4 fs-4" style={{ fontStyle: 'italic' }}>
            {libroEncontrado.autor}
          </h3>
          <p className="fs-5 text-secondary lead">
            {libroEncontrado.descripcion || "Sin descripción disponible por el momento."}
          </p>
          
          <h2 className="display-5 fw-bold my-4" style={{ color: '#6f42c1' }}>
            ${libroEncontrado.precio}
          </h2>

          <div className="d-grid gap-3 d-md-flex mt-5">
            <Button 
              size="lg" 
              style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
              className="shadow-sm fw-bold"
            >
              Comprar ahora
            </Button>

            <Link 
              to="/catalogo" 
              className="btn btn-outline-primary btn-lg shadow-sm fw-bold"
              style={{ borderColor: '#6f42c1', color: '#6f42c1' }}
            >
              Volver al catálogo
            </Link>
          </div>  
        </Col>
      </Row>
    </Container>          
    );
}