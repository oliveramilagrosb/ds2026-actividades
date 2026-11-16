import { describe, it, expect } from "vitest";
import { loginSchema, registroSchema } from "./auth.validation";

describe("loginSchema", () => {
  it("acepta credenciales con formato válido", () => {
    const r = loginSchema.safeParse({ email: "cliente@libreria.test", password: "x" });
    expect(r.success).toBe(true);
  });

  it("rechaza un email con formato inválido", () => {
    const r = loginSchema.safeParse({ email: "no-es-mail", password: "x" });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path).toEqual(["email"]);
  });

  it("rechaza una contraseña vacía", () => {
    const r = loginSchema.safeParse({ email: "cliente@libreria.test", password: "" });
    expect(r.success).toBe(false);
  });
});

describe("registroSchema", () => {
  it("una contraseña débil acumula los tres errores", () => {
    const r = registroSchema.safeParse({
      nombre: "Ana",
      email: "ana@libreria.test",
      password: "corta",
    });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues.map((i) => i.message)).toHaveLength(3);
  });

  it("acepta una contraseña con 8+ caracteres, mayúscula y número", () => {
    const r = registroSchema.safeParse({
      nombre: "Ana",
      email: "ana@libreria.test",
      password: "Segura1234",
    });
    expect(r.success).toBe(true);
  });
});