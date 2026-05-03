form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        errorEl.textContent = 'Por favor, ingresa un término de búsqueda.';
        resultadosDiv.innerHTML = '';
        return;
    }
    errorEl.textContent = '';
    loadingEl.style.display = 'block';
    resultadosDiv.innerHTML = '';
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`Error en la búsqueda: ${response.statusText}`);
        }
        const data = await response.json();
        const libros = data.docs;
        if (libros.length === 0) {
            errorEl.textContent = 'No se encontraron resultados.';
            return;
        }
        libros.forEach(libro => {
            const card = document.createElement('div');
            card.className = 'libro-card';
            const autor = libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido';
            const año = libro.first_publish_year ? libro.first_publish_year : 'Año desconocido';
            card.innerHTML = `
                <h3>${libro.title}</h3>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Año de publicación:</strong> ${año}</p>
            `;
            resultadosDiv.appendChild(card);
        });
    }
    catch (error) {
        errorEl.textContent = "Error en la conexión con la API.";
    }
    finally {
        loadingEl.style.display = 'none';
    }
});
export {};
