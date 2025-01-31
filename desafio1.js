/*Esto causa algunos comportamientos extraños,
 como todos estos ejemplos a continuación que retornan true:*/

 

console.log( false == '0' );

console.log( null == undefined );

console.log( " \t\r\n" == 0 );

console.log( ' ' == 0 );


//Lo cual no tiene necesariamente mucho sentido.
/*(Puedes probar todo esto yendo a tu navegador, haciendo clic con el botón derecho, 
eligiendo la opción “Inspeccionar” y la pestaña “Consola”. En esa pestaña, basta con copiar 
y pegar cada una de las líneas anteriores para confirmar que todas realmente retornan true).

Por lo tanto, tu tarea de hoy es reescribir el código a continuación para que imprima 
la información de manera correcta, que tenga sentido y sin errores:
*/
 

let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'




if (numeroUn == stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

}

 

if ( numeroTreinta === stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}

 

if (numeroDiez == stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}