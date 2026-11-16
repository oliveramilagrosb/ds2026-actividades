import { describe, it, expect } from "vitest";
import { libroCreateSchema, idParamSchema } from "./libro.validation";

const libroValido = {
  titulo: "Rayuela",
  descripcion: "Novela de Julio Cortázar",
  autorId: 1,
  precio: 7000,
  imagen: "https://example.com/rayuela.jpg",
};

describe("libroCreateSchema", () => {
  it("acepta un libro válido", () => {
    const r = libroCreateSchema.safeParse(libroValido);
    expect(r.success).toBe(true);
  });

  it("rechaza precio negativo", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, precio: -5 });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path).toEqual(["precio"]);
  });

  it("recorta espacios del título", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, titulo: "  Rayuela  " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.titulo).toBe("Rayuela");
  });

  it("rechaza una imagen que no es URL", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, imagen: "no-es-url" });
    expect(r.success).toBe(false);
  });
});

describe("idParamSchema", () => {
  it('convierte el id "42" (string) en el número 42', () => {
    const r = idParamSchema.safeParse({ id: "42" });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.id).toBe(42);
  });

  it("rechaza un id que no es número", () => {
    const r = idParamSchema.safeParse({ id: "abc" });
    expect(r.success).toBe(false);
  });
});