import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';       
import { LibroDetalle } from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo.tsx';

const librosIniciales = [
  { id: 1, titulo: "Mujercitas", autor: "Louisa May Alcott", imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp", disponible: true, precio: 15000 },
  { id: 2, titulo: "Cumbres Borrascosas", autor: "Emily Brontë", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg", disponible: true, precio: 12000 },
  { id: 3, titulo: "Frankestein", autor: "Mary Shelley", imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg", disponible: true, precio: 13500 },
  { id: 4, titulo: "Una Habitacion propia", autor: "Virginia Woolf", imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/c4/cc/c4cc89361803b6056e2b392282a553bb.jpg", disponible: true, precio: 9500 },
];

function App() {
  const [libros, setLibros] = useState(librosIniciales);

  const agregarLibro = (nuevo: any) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
      </Routes>
    </Layout>
  );  
}

export default App; 