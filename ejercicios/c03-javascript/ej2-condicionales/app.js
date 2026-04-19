const clasificarNota = (nota) => {
    if ( nota < 4 ) return "Desaprobado";
    if ( nota >= 4 && nota < 8) return "Aprobado";
    if ( nota >= 8 ) return "Promocionado";
}

const diaDeLaSemana = (numero) => {
    switch (numero) {
        case 1: 
            return "Lunes";
        
        case 2:
            return "Martes";

        case 3:
            return "Miercoles";

        case 4:
            return "Jueves";

        case 5:
            return "Viernes"

        case 6:
            return "Sabado (fin de semana)";

        case 7:
            return "Domigno (fin de semana)";

        default:
            return "Dia invalido";
    }
};

console.log("Test Notas");
console.log(clasificarNota(2));
console.log(clasificarNota(6.5));
console.log(clasificarNota(8));

console.log("Test Dias");
console.log(diaDeLaSemana(1))
console.log(diaDeLaSemana(6))
console.log(diaDeLaSemana(11))