const btngenerar = document.getElementById('btngenerar');
const inputAltura = document.getElementById('inputAltura');
const contArbol = document.getElementById('resultado');

btngenerar.addEventListener('click', () => {
    const altura = parseInt(inputAltura.value);
    contArbol.innerHTML = "";

    if (isNaN(altura) || altura < 1){
        contArbol.textContent =  "Error: Ingresar un numero valido." 
        return;
    }

    let arbol = "";
    for (let i=1; i <= altura; i++) {
        
        for (let j=0; j < i; j++){
            arbol += "*";
        }
        arbol += "\n";

    } 

    contArbol.textContent = arbol;
});
