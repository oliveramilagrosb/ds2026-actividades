import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import type { Rol } from '../types/sesionType';
import Spinner from 'react-bootstrap/Spinner';


export function PrivateRoute({ rol }: { rol?: Rol }) {
  const { usuario, cargando } = useAuth();

  // 1. ¿ya sé quién sos?
  if (cargando) return <Spinner animation="border" />;
  // 2. ¿sos alguien? (401)
  if (!usuario) return <Navigate to="/login" replace />;
  // 3. ¿podés? (403)
  if (rol && usuario.rol !== rol) return <Navigate to="/sin-permiso" replace />;

  return <Outlet />;
}