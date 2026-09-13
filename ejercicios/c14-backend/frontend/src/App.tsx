import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';       
import { LibroDetalle } from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo.tsx';


function App() {
  const [libros, setLibros] = useState<any[]>([]);

  const agregarLibro = (nuevo: any) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
      </Routes>
    </Layout>
  );  
}

export default App; 