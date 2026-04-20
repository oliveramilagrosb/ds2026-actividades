const inputProducto = document.getElementById('inputProducto');
const btnAgregar = document.getElementById('btnAgregar');
const listaProductos = document.getElementById('listaProductos');
const contadorTexto = document.getElementById('contador');

let cont = 0;

const actualizarContador = () => {
    contadorTexto.textContent = `${cont} productos en la lista`;
};

btnAgregar.addEventListener('click', () => {
    const nombre = inputProducto.value.trim();

    if(nombre == ""){
        alert("ERROR: Ingrese el nombre de un producto.");
        return;
    }

    const nuevoItem = document.createElement('li');

    nuevoItem.innerHTML = `
        ${nombre}
        <button class="btn-eliminar">Eliminar</button>
    `;

    nuevoItem.querySelector('.btn-eliminar').addEventListener('click', () => {
        nuevoItem.remove();
        cont--;
        actualizarContador();
    });

    listaProductos.appendChild(nuevoItem);

    cont++;
    actualizarContador();
    inputProducto.value = "";
});

