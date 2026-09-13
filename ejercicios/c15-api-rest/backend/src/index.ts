import express from "express";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";

declare const process: { env: { PORT?: string } };

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería en Capas — activa" });
});

app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});