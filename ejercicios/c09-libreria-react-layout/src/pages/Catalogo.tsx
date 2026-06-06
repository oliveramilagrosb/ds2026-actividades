import { Container, Row, Col } from 'react-bootstrap';
import { CardLibro } from '../components/CardLibro';

const libros = [
  { id: 1, titulo: "Mujercitas", autor: "Louisa May Alcott", imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp" },
  { id: 2, titulo: "Cumbres Borrascosas", autor: "Emily Brontë", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg" },
  { id: 3, titulo: "Frankestein", autor: "Mary Shelley", imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, titulo: "Una Habitacion propia", autor: "Virginia Woolf", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/c4/cc/c4cc89361803b6056e2b392282a553bb.jpg" },
];

export function Catalogo() {
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