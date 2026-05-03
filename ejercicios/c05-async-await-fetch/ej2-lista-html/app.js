const API_URL = "https://jsonplaceholder.typicode.com/users";
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error-message");
const userListEl = document.getElementById("user-list");
async function obtenerUsuarios() {
    loadingEl.style.display = "block";
    errorEl.textContent = "";
    userListEl.innerHTML = "";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        const usuarios = await response.json();
        usuarios.forEach(({ name, email }) => {
            const li = document.createElement("li");
            li.textContent = `${name} (${email})`;
            userListEl.appendChild(li);
        });
    }
    catch (error) {
        errorEl.textContent = "Error al cargar los usuarios.";
        errorEl.style.color = "red";
    }
    finally {
        loadingEl.style.display = "none";
    }
}
obtenerUsuarios();
export {};
