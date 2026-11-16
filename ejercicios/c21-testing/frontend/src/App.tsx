import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import Login from './pages/Login';
import { LibroNuevo } from './pages/LibroNuevo';
import { SinPermiso } from './pages/SinPermiso';
import { PrivateRoute } from './components/PrivateRoute';
import { BusquedaProvider } from './context/BusquedaContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BusquedaProvider>
        <Layout>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sin-permiso" element={<SinPermiso />} />

            {/* Rutas privadas */}
            <Route element={<PrivateRoute rol="ADMIN" />}>
              <Route path="/libros/nuevo" element={<LibroNuevo />} />
            </Route>
          </Routes>
        </Layout>
      </BusquedaProvider>
    </AuthProvider>
  );
}

export default App;