import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    precio: 48000,
    imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp",
    disponible: true,
    descripcion: "Una Novela clásica que explora el crecimiento y las vidas de cuatro hermanas en Nueva Inglaterra durante el siglo XIX.",
  },
  {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    precio: 52000,
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg",
    disponible: true,
    descripcion: "Una novela gótica que explora la pasión y el conflicto entre los habitantes de un entorno rural aislado.",
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    precio: 46000,
    imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg",
    disponible: true,
    descripcion: "La mítica obra gótica que cuestiona los límites de la ciencia, la creación y la propia condición de la humanidad.",
  },
  {
    titulo: "Una habitación propia",
    autor: "Virginia Woolf",
    precio: 39000,
    imagen: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/269/original/268557_portada_una-habitacion-propia_virginia-woolf_201511262308.jpg",
    disponible: false,
    descripcion: "Un ensayo clave que analiza el rol de las mujeres en la literatura y la necesidad de independencia tanto económica como personal.",
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    precio: 45000,
    imagen: "https://www.llibreriapublics.com/es/imagenes/9788415/978841561878.JPG",
    disponible: true,
    descripcion: "Un gran clásico que narra los choques entre el orgullo de la alta sociedad y los prejuicios de las relaciones humanas.",
  },
  {
    titulo: "Kentukis",
    autor: "Samanta Schweblin",
    precio: 58000,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/029/689/products/kentukis-373f27b266da3b781d17779851793200-1024-1024.webp",
    disponible: true,
    descripcion: "Una novela contemporánea que explora la relación entre la tecnología y la intimidad humana a través de una historia inquietante.",
  },
];

const autores = [
  { nombre: "Louisa May Alcott", nacionalidad: "Estados Unidos" },
  { nombre: "Emily Brontë", nacionalidad: "Reino Unido" },
  { nombre: "Mary Shelley", nacionalidad: "Reino Unido" },
  { nombre: "Virginia Woolf", nacionalidad: "Reino Unido" },
  { nombre: "Jane Austen", nacionalidad: "Reino Unido" },
  { nombre: "Samanta Schweblin", nacionalidad: "Argentina" },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
  console.log("Base de datos poblada con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });