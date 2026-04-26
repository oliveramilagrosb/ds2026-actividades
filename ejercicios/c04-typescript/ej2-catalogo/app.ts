//Crear app.ts con una interface Libro isbn (string), titulo

//string), autor (string), precio (number) disponible

//// Escribir y tipar estas funciones:

//○ buscarPorAutor(autor: string): Libro[]

//○ librosDisponibles(): Libro[]

//○ precioPromedio(libros: Libro[]): number

//○ renderizar(libros: Libro[]): void → agrega cada libro como en el y actualiza el de stats con la cantidad

//y el promedio.Enganchar los botones:

//○ Filtrar → leer el input y llamar

//renderizar(buscarPorAutor(...)).

//○ Solo disponibles → renderizar(librosDisponibles()).

//○ Ver todos → renderizar(catalogo).

//● Al cargar la página, mostrar todos los libros por defecto.

//● Traspilar: tsc app.ts

//● Abrir en el navegador y probar los tres botones. 

interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "9781", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true, genero: "Ficción" },
    { isbn: "9782", titulo: "Rayuela", autor: "Cortazar", precio: 7000, disponible: false },
    { isbn: "9783", titulo: "Ficciones", autor: "Borges", precio: 4500, disponible: true, genero: "Ficción" }
];

const buscarPorAutor = (autor: string): Libro[] => {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
};

const librosDisponibles = (): Libro[] => {
    return catalogo.filter(libro => libro.disponible);
};

const precioPromedio = (libros: Libro[]): number => {
    if (libros.length === 0) return 0;
    const total = libros.reduce((sum, libro) => sum + libro.precio, 0);   
    return total / libros.length;
};

const renderizar = (libros: Libro[]): void => {
    const listado = document.getElementById('listado') as HTMLUListElement;
    const stats = document.getElementById('stats') as HTMLParagraphElement;

    listado.innerHTML = '';

    libros.forEach(libro => {
        const item = document.createElement('li');
        item.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? 'Disponible' : 'No Disponible'}`;
        listado.appendChild(item);
    });

    stats.textContent = `Total: ${libros.length} - Precio Promedio: $${precioPromedio(libros).toFixed(2)}`;

};

document.getElementById('filtrar')?.addEventListener('click', () => {
    const autorInput = (document.getElementById('inputAutor') as HTMLInputElement).value.trim();
    renderizar(buscarPorAutor(autorInput));
});

document.getElementById('mostrarDisponibles')?.addEventListener('click', () => {
    renderizar(librosDisponibles());
});

document.getElementById('mostrarTodos')?.addEventListener('click', () => {
    renderizar(catalogo);
});

renderizar(catalogo);