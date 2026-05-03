export {};

const API_URL = "https://jsonplaceholder.typicode.com/users";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const loadingEl = document.getElementById("loading") as HTMLParagraphElement;
const errorEl = document.getElementById("error-message") as HTMLParagraphElement;
const userListEl = document.getElementById("user-list") as HTMLUListElement;

async function obtenerUsuarios() {
    loadingEl.style.display = "block";
    errorEl.textContent = "";
    userListEl.innerHTML = "";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        
        const usuarios: Usuario[] = await response.json();
        
        usuarios.forEach(({ name, email }) => {

            const li = document.createElement("li");
            li.textContent = `${name} (${email})`;
            userListEl.appendChild(li);
        });

    } catch (error) {
        errorEl.textContent = "Error al cargar los usuarios.";
        errorEl.style.color = "red";
    } finally {
        loadingEl.style.display = "none";
    }   
}

obtenerUsuarios();