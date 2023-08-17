function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function multiplicacion(x, y) {
    return x * y;
}

function division(x, y) {
    return (y !== 0) ? x / y : 'Error';
}

const option = 4;

switch(option) {
    case 1:
        console.log(suma(2, 3));
        break;
    case 2:
        console.log(resta(2, 3));
        break;
    case 3:
        console.log(multiplicacion(2, 3));
        break;
    case 4:
        console.log(division(2, 3));
        break;
    default:
        console.log('Opción no válida');
        break;
}


