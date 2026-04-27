"use strict";
let catalogo = [
    { isbn: "9781", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true, genero: "Ficción" },
    { isbn: "9782", titulo: "Rayuela", autor: "Cortazar", precio: 7000, disponible: false },
    { isbn: "9783", titulo: "Ficciones", autor: "Borges", precio: 4500, disponible: true, genero: "Ficción" }
];
const agregarLibro = (libro) => {
    catalogo.push(libro);
    renderizar(catalogo);
};
const eliminarLibro = (isbn) => {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
};
const validarFormulario = () => {
    const titulo = document.getElementById('nuevoTitulo').value.trim();
    const autor = document.getElementById('nuevoAutor').value.trim();
    const precio = parseFloat(document.getElementById('nuevoPrecio').value);
    const disponible = document.getElementById('nuevoDisponible').checked;
    const genero = document.getElementById('nuevoGenero').value.trim();
    if (titulo === '' || autor === '' || isNaN(precio) || precio <= 0) {
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible,
        genero: genero || undefined
    };
};
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
        const boton = document.createElement('button');
        boton.textContent = 'Eliminar';
        boton.addEventListener('click', () => eliminarLibro(libro.isbn));
        item.innerHTML = `
            <strong>${libro.titulo}</strong> por
             ${libro.autor} - $${libro.precio.toFixed(2)} 
             ${libro.disponible ? '(Disponible)' : '(No disponible)'} 
        `;
        item.appendChild(boton);
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
document.getElementById('agregarLibro')?.addEventListener('click', () => {
    const nuevoLibro = validarFormulario();
    const errorForm = document.getElementById('errorForm');
    if (nuevoLibro === null) {
        errorForm.textContent = 'Error: Completar titulo, autor y precio (>0).';
    }
    else {
        errorForm.textContent = '';
        agregarLibro(nuevoLibro);
        document.getElementById('nuevoTitulo').value = '';
        document.getElementById('nuevoAutor').value = '';
        document.getElementById('nuevoPrecio').value = '';
        document.getElementById('nuevoDisponible').checked = false;
        document.getElementById('nuevoGenero').value = '';
    }
});
renderizar(catalogo);
