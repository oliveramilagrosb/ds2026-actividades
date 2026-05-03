export {}

interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
 
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const usuarios: Usuario[] = await response.json();
        return usuarios;
    
    } catch (error) {
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
    } catch (error) {
        console.error('Error en main:', error);
    }
}

main();