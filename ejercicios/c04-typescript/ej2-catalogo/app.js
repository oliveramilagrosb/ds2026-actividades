"use strict";
//Crear app.ts con una interface Libro isbn (string), titulo
const catalogo = [
    { isbn: "9781", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true, genero: "Ficción" },
    { isbn: "9782", titulo: "Rayuela", autor: "Cortazar", precio: 7000, disponible: false },
    { isbn: "9783", titulo: "Ficciones", autor: "Borges", precio: 4500, disponible: true, genero: "Ficción" }
];
const buscarPorAutor = (autor) => {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
};
const librosDisponibles = () => {
    return catalogo.filter(libro => libro.disponible);
};
const precioPromedio = (libros) => {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((sum, libro) => sum + libro.precio, 0);
    return total / libros.length;
};
const renderizar = (libros) => {
    const listado = document.getElementById('listado');
    const stats = document.getElementById('stats');
    listado.innerHTML = '';
    libros.forEach(libro => {
        const item = document.createElement('li');
        item.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? 'Disponible' : 'No Disponible'}`;
        listado.appendChild(item);
    });
    stats.textContent = `Total: ${libros.length} - Precio Promedio: $${precioPromedio(libros).toFixed(2)}`;
};
document.getElementById('filtrar')?.addEventListener('click', () => {
    const autorInput = document.getElementById('inputAutor').value.trim();
    renderizar(buscarPorAutor(autorInput));
});
document.getElementById('mostrarDisponibles')?.addEventListener('click', () => {
    renderizar(librosDisponibles());
});
document.getElementById('mostrarTodos')?.addEventListener('click', () => {
    renderizar(catalogo);
});
renderizar(catalogo);
