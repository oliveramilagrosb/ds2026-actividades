import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../../context/AuthContext';
import { BusquedaProvider } from '../../context/BusquedaContext';
import type { Usuario, Rol } from '../../types/sesionType';

const cliente = {
  id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE',
} as Usuario;
const admin = {
  id: 1, email: 'admin@libreria.test', nombre: 'Admin', rol: 'ADMIN',
} as Usuario;

function renderHeader(usuario: Usuario | null) {
  const auth = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  };
  return render(
    <MemoryRouter>
      <BusquedaProvider>
        <AuthContext.Provider value={auth}>
          <Header />
        </AuthContext.Provider>
      </BusquedaProvider>
    </MemoryRouter>,
  );
}

describe('Header según el rol', () => {
  it('sin sesión: muestra "Ingresar" y NO ve "Nuevo libro"', () => {
    renderHeader(null);
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('CLIENTE: saluda por nombre, muestra "Salir" y NO ve "Nuevo libro"', () => {
    renderHeader(cliente);
    expect(screen.getByText('Hola, Cliente')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Salir' })).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('ADMIN: ve el link "Nuevo libro"', () => {
    renderHeader(admin);
    expect(screen.getByRole('link', { name: 'Nuevo libro' })).toBeInTheDocument();
  });
});