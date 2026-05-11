interface LibroOL {
    title: string;
    author_name?: string[];
    cover_i?: number;
}

const form = document.getElementById('busqueda-form') as HTMLFormElement;
const input = document.getElementById('buscador') as HTMLInputElement;
const resultadosDiv = document.getElementById('resultados') as HTMLDivElement;
const errorEl = document.getElementById('error-msg') as HTMLParagraphElement;
const loadingEl = document.getElementById('loading') as HTMLParagraphElement;

form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();
    const query: string = input.value.trim();

    if (!query) {
        errorEl.textContent = 'Por favor, ingresá un término de búsqueda.';
        resultadosDiv.innerHTML = '';
        return;
    }

    errorEl.textContent = '';
    loadingEl.style.display = 'block';
    resultadosDiv.innerHTML = '';

    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`);
        
        if (!response.ok) {
            throw new Error(`Error en la búsqueda: ${response.statusText}`);
        }

        const data = await response.json();
        const libros: LibroOL[] = data.docs;

        if (libros.length === 0) {
            errorEl.textContent = 'No se encontraron resultados en Pixi.';
            return;
        }

        libros.forEach((libro: LibroOL) => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const autor: string = libro.author_name ? libro.author_name.join(', ') : 'Autora desconocida';
            const portadaId = libro.cover_i;
            const imagenUrl: string = portadaId 
                ? `https://covers.openlibrary.org/b/id/${portadaId}-L.jpg` 
                : 'https://via.placeholder.com/400x600?text=Sin+Portada';

            col.innerHTML = `
                <div class="card h-100 shadow-sm card-pixi">
                    <img src="${imagenUrl}" class="card-img-top card-img-pixi" alt="${libro.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold titulo-pixi">${libro.title}</h5>
                        <p class="card-text text-muted small">${autor}</p>
                        <a href="libro.html" class="btn btn-sm btn-pixi">Ver detalle</a>
                    </div>
                </div>
            `;
            resultadosDiv.appendChild(col);
        });
    } catch (error) {
        errorEl.textContent = "Error en la conexión con la API.";
        console.error(error);
    } finally {
        loadingEl.style.display = 'none';
    }
});


const formContacto = document.getElementById('contacto-form') as HTMLFormElement;

if (formContacto) {
    formContacto.onsubmit = (e: SubmitEvent) => {
        e.preventDefault(); 
        
        alert("¡Mensaje enviado con éxito! ✨ Gracias por contactarte con Librería Pixi.");
        
        formContacto.reset();
        return false;
    };
}