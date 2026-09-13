import { Autor } from "../types/autor.types";

const autores: Autor[] = [
  { id: 1, nombre: "Louisa May Alcott", nacionalidad: "Estados Unidos" },
  { id: 2, nombre: "Emily Brontë", nacionalidad: "Reino Unido" },
  { id: 3, nombre: "Mary Shelley", nacionalidad: "Reino Unido" },
  { id: 4, nombre: "Virginia Woolf", nacionalidad: "Reino Unido" },
  { id: 5, nombre: "Jane Austen", nacionalidad: "Reino Unido" },
  { id: 6, nombre: "Samanta Schweblin", nacionalidad: "Argentina" },
];

let proximoId = 7;

export function findAll(): Autor[] {
  return autores;
}

export function findById(id: number): Autor | undefined {
  return autores.find((autor) => autor.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Autor, "id">): Autor | undefined {
  const i = autores.findIndex((autor) => autor.id === id);
  if (i === -1) return undefined;
  autores[i] = { id, ...datos };
  return autores[i];
}

export function remove(id: number): boolean {
  const i = autores.findIndex((autor) => autor.id === id);
  if (i === -1) return false;
  autores.splice(i, 1);
  return true;
}