const numeros = [11, 7 , 21, 77, 58, 1, 7, 19];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for(const num of numeros) {
    suma += num;
    if(num > mayor){
        mayor = num;
    }

    if(num < menor){
        menor = num;
    }
}

const promedio = suma / numeros.length;

console.log("Resultados");
console.log(`Array: [${numeros}]`);
console.log(`Suma total ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Numero mayor: ${mayor}`);
console.log(`Numero menor: ${menor}`);

const generarAsteriscos = (n) => {
    let resultado = "";
    for (let i=0; i < n; i++){
        resultado += "*";
    }

    return resultado;
}

console.log("Test Asteriscos");
console.log(`generarAsteriscos(5): ${generarAsteriscos(5)}`);
console.log(`generarAsteriscos(10): ${generarAsteriscos(10)}`);
