import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

const categorias = [
  { nombre: "Novela" },
  { nombre: "Gótico" },
  { nombre: "Ensayo" },
  { nombre: "Clásico" }
];

const autores = [
  { nombre: "Louisa May Alcott", nacionalidad: "Estados Unidos" },
  { nombre: "Emily Brontë", nacionalidad: "Reino Unido" },
  { nombre: "Mary Shelley", nacionalidad: "Reino Unido" },
  { nombre: "Virginia Woolf", nacionalidad: "Reino Unido" },
  { nombre: "Jane Austen", nacionalidad: "Reino Unido" },
  { nombre: "Samanta Schweblin", nacionalidad: "Argentina" }
];

const libros = [
  {
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    precio: 48000,
    imagen: "https://www.penguinlibros.com/ar/6770661-large_default/mujercitas-los-mejores-clasicos.webp",
    descripcion: "Una Novela clásica que explora el crecimiento y las vidas de cuatro hermanas en Nueva Inglaterra durante el siglo XIX.",
    disponible: true,
    cats: ["Novela", "Clásico"]
  },
  {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    precio: 52000,
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/20/cd/20cdac0ea4964e2c22146bb9c22be1da.jpg",
    descripcion: "Una novela gótica que explora la pasión y el conflicto entre los habitantes de un entorno rural aislado.",
    disponible: true,
    cats: ["Novela", "Gótico"]
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    precio: 46000,
    imagen: "https://m.media-amazon.com/images/I/81rmMj42+mL._AC_UF1000,1000_QL80_.jpg",
    descripcion: "La mítica obra gótica que cuestiona los límites de la ciencia, la creación y la propia condición de la humanidad.",
    disponible: true,
    cats: ["Novela", "Gótico"]
  },
  {
    titulo: "Una habitación propia",
    autor: "Virginia Woolf",
    precio: 39000,
    imagen: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/269/original/268557_portada_una-habitacion-propia_virginia-woolf_201511262308.jpg",
    descripcion: "Un ensayo clave que analiza el rol de las mujeres en la literatura y la necesidad de independencia tanto económica como personal.",
    disponible: false,
    cats: ["Ensayo"]
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    precio: 45000,
    imagen: "https://www.llibreriapublics.com/es/imagenes/9788415/978841561878.JPG",
    descripcion: "Un gran clásico que narra los choques entre el orgullo de la alta sociedad y los prejuicios de las relaciones humanas.",
    disponible: true,
    cats: ["Novela", "Clásico"]
  },
  {
    titulo: "Kentukis",
    autor: "Samanta Schweblin",
    precio: 58000,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/029/689/products/kentukis-373f27b266da3b781d17779851793200-1024-1024.webp",
    descripcion: "Una novela contemporánea que explora la relación entre la tecnología y la intimidad humana a través de una historia inquietante.",
    disponible: true,
    cats: ["Novela"]
  }
];

const usuarios = [
  { email: "admin@libreria.test", nombre: "Admin", rol: "ADMIN" as const, password: "Admin1234" },
  { email: "cliente@libreria.test", nombre: "Cliente", rol: "CLIENTE" as const, password: "Cliente1234" }
];

async function main() {
  await prisma.autor.createMany({ data: autores, skipDuplicates: true });
  await prisma.categoria.createMany({ data: categorias, skipDuplicates: true });

  for (const { autor, cats, ...datos } of libros) {
    const existe = await prisma.libro.findFirst({ where: { titulo: datos.titulo } });
    if (existe) continue;
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) }
      }
    });
  }

  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash: await bcrypt.hash(password, 10) }
    });
  }
}

main()
  .then(() => console.log("Seed listo"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());