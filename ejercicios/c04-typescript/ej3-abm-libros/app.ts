interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

let catalogo: Libro[] = [
    { isbn: "9781", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true, genero: "Ficción" },
    { isbn: "9782", titulo: "Rayuela", autor: "Cortazar", precio: 7000, disponible: false },
    { isbn: "9783", titulo: "Ficciones", autor: "Borges", precio: 4500, disponible: true, genero: "Ficción" }
];

const agregarLibro = (libro: Libro): void => {
    catalogo.push(libro);
    renderizar(catalogo);
};

const eliminarLibro = (isbn: string): void => {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
};      

const validarFormulario = (): Libro | null => {
    const titulo = (document.getElementById('nuevoTitulo') as HTMLInputElement).value.trim();
    const autor = (document.getElementById('nuevoAutor') as HTMLInputElement).value.trim();
    const precio = parseFloat((document.getElementById('nuevoPrecio') as HTMLInputElement).value);
    const disponible = (document.getElementById('nuevoDisponible') as HTMLInputElement).checked;
    const genero = (document.getElementById('nuevoGenero') as HTMLInputElement).value.trim();

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
    const autorInput = (document.getElementById('inputAutor') as HTMLInputElement).value.trim();
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
    const errorForm = document.getElementById('errorForm') as HTMLElement;
    if (nuevoLibro === null) {
        errorForm.textContent = 'Error: Completar titulo, autor y precio (>0).';
    } else {
        errorForm.textContent = '';
        agregarLibro(nuevoLibro);

        (document.getElementById('nuevoTitulo') as HTMLInputElement).value = '';
        (document.getElementById('nuevoAutor') as HTMLInputElement).value = '';
        (document.getElementById('nuevoPrecio') as HTMLInputElement).value = '';
        (document.getElementById('nuevoDisponible') as HTMLInputElement).checked = false;
        (document.getElementById('nuevoGenero') as HTMLInputElement).value = '';
    }
});

renderizar(catalogo);

