import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

describe.skip("POST /api/auth/login (con DB)", () => {
  it("credenciales del seed → 200 con token y usuario sin passwordHash", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Cliente1234" });
    expect(res.status).toBe(200);
    expect(res.body.token).toEqual(expect.any(String));
    expect(res.body.usuario).toMatchObject({ email: "cliente@libreria.test", rol: "CLIENTE" });
    expect(res.body.usuario).not.toHaveProperty("passwordHash");
  });

  it("password incorrecta → 401", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Incorrecta1" });
    expect(res.status).toBe(401);
  });

  it("mail que no existe → el MISMO 401 que con password incorrecta", async () => {
    const mal = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Incorrecta1" });
    const inexistente = await request(app)
      .post("/api/auth/login")
      .send({ email: "nadie@libreria.test", password: "Cliente1234" });
    expect(inexistente.status).toBe(401);
    expect(inexistente.body).toEqual(mal.body);
  });
});