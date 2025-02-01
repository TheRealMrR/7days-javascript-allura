

let nombre = prompt('¿Cual es tu nombre?');
let edad = prompt('¿Cuantos años tienes?');
let lenguaje = prompt('¿Que lenguaje de programacion estas estudiando?');

console.log(`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}`)

/*
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.


Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:


1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/
let estudiar = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (estudiar == 1){
    console.log('1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
}else{
    console.log('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}