import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';

const listaLibros = [
  { id: 1, titulo: "Mujercitas", autor: "Louisa May Alcott", imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp", precio: 15000, descripcion: "Una Novela clásica que explora el crecimiento y las vidas de cuatro hermanas en Nueva Inglaterra durante el siglo XIX." },
  { id: 2, titulo: "Cumbres Borrascosas", autor: "Emily Brontë", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg", precio: 18500, descripcion: "Una tormentosa historia de amor, venganza y pasiones desatadas en los sombríos páramos de Yorkshire." },
  { id: 3, titulo: "Frankestein", autor: "Mary Shelley", imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg", precio: 16000, descripcion: "La mítica obra gótica que cuestiona los límites de la ciencia, la creación y la propia condición de la humanidad." },
  { id: 4, titulo: "Una Habitacion propia", autor: "Virginia Woolf", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/c4/cc/c4cc89361803b6056e2b392282a553bb.jpg", precio: 14000, descripcion: "Un ensayo clave que analiza el rol de las mujeres en la literatura y la necesidad de independencia tanto económica como personal." },
];

export function LibroDetalle() {
    const { id } = useParams<{ id: string }>();

    const libroEncontrado = listaLibros.find(l => l.id === Number(id));

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
            {libroEncontrado.descripcion}
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
