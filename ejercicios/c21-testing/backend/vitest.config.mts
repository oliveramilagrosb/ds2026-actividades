import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

// Lee el .env del backend (expande ${POSTGRES_USER} como Compose)
const env = loadEnv("test", process.cwd(), "");

export default defineConfig({
  test: {
    env: {
      JWT_SECRET: "secreto-solo-para-tests", // nunca el real
      // Dentro de Docker, Compose ya inyecta DATABASE_URL: se usa tal cual.
      // Desde el host no existe: se toma del .env y "db" pasa a localhost.
      DATABASE_URL:
        process.env.DATABASE_URL ?? env.DATABASE_URL?.replace("@db:", "@localhost:") ?? "",
    },
  },
});
