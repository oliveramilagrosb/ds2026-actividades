import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
  disponible: boolean;
  descripcion: string;
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    precio: 48000,
    imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp",
    disponible: true,
    descripcion: "Una Novela clásica que explora el crecimiento y las vidas de cuatro hermanas en Nueva Inglaterra durante el siglo XIX.",
  },
  {
    id: 2,
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    precio: 52000,
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg",
    disponible: true,
    descripcion: "Una novela gótica que explora la pasión y el conflicto entre los habitantes de un entorno rural aislado.",
  },
  {
    id: 3,
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    precio: 46000,
    imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg",
    disponible: true,
    descripcion: "La mítica obra gótica que cuestiona los límites de la ciencia, la creación y la propia condición de la humanidad.",
  },
  {
    id: 4,
    titulo: "Una habitación propia",
    autor: "Virginia Woolf",
    precio: 39000,
    imagen: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/269/original/268557_portada_una-habitacion-propia_virginia-woolf_201511262308.jpg",
    disponible: false,
    descripcion: "Un ensayo clave que analiza el rol de las mujeres en la literatura y la necesidad de independencia tanto económica como personal.",
  },
  {
    id: 5,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    precio: 45000,
    imagen: "https://www.llibreriapublics.com/es/imagenes/9788415/978841561878.JPG",
    disponible: true,
    descripcion: "Un gran clásico que narra los choques entre el orgullo de la alta sociedad y los prejuicios de las relaciones humanas.",
  },
  {
    id: 6,
    titulo: "Kentukis",
    autor: "Samanta Schweblin",
    precio: 58000,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/029/689/products/kentukis-373f27b266da3b781d17779851793200-1024-1024.webp",
    disponible: true,
    descripcion: "Una novela contemporánea que explora la relación entre la tecnología y la intimidad humana a través de una historia inquietante.",
  },
];

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de Librería Pixi funcionando correctamente" });
});


app.get("/libros", (req, res) => {
  const { disponible } = req.query;

  if (disponible === undefined) {
    return res.json(libros);
  }

  const esDisponible = disponible === "true";
  const filtrados = libros.filter((libro) => libro.disponible === esDisponible);
  return res.json(filtrados);
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});