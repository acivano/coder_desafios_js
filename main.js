/* 
Incripción de alumnos a una clase con cupo finito
*/
let cupo = parseInt(prompt('Ingrese el cupo del curso'));

if (cupo <= 0) {
    console.log('No hay cupo disponible');
}else if (cupo > 0){
    console.log(`El cupo es: ${cupo}`);
}
let continua = 'S';


for (let index = 1; (index <= cupo && continua != 'N') ; index++) {
    continua= prompt('Desea inscribir un nuevo alumno? S / N').toUpperCase();

    switch (continua.toUpperCase()) {
        case 'S':
            let nombre = prompt('Ingrese nombre y apellido');
            console.log(`${index}- ${nombre}`);
            break;
        case 'N':
            console.log('Finalizó la inscripcón.');
            break;
        default:
            console.log('El caracter es invalido.');
            index--;
            break;
    }

};
if (continua.toUpperCase() == 'S' && cupo > 0) {
    console.log('Se llenó el cupo. Muchas gracias!');
};