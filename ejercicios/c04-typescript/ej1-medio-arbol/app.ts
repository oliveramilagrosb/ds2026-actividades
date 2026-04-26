const btngenerar = document.getElementById("btngenerar") as HTMLButtonElement;
const inputAltura = document.getElementById("inputAltura") as HTMLInputElement;
const contArbol = document.getElementById("resultado") as HTMLElement;

btngenerar.addEventListener("click", (): void => {
    const altura: number = parseInt(inputAltura.value);
    contArbol.innerHTML = "";

    if(isNaN(altura) || altura < 1) {
        contArbol.innerHTML = "Por favor, ingrese una altura válida.";
        return;
    }

    let arbol: string = "";
    for (let i: number = 1; i <= altura; i++) {
        for (let j: number = 1; j <= i; j++) {
        arbol += "*"
        }
        arbol += "\n";
    }
    contArbol.textContent = arbol;
});