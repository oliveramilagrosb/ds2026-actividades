import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { Login } from './pages/Login';
import LibroNuevo from './pages/LibroNuevo';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevo" element={<LibroNuevo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;