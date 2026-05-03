async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}
async function main() {
    try {
        const usuarios = await obtenerUsuarios();
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    }
    catch (error) {
        console.error('Error en main:', error);
    }
}
main();
export {};
