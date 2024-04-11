/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var b=num.toString();
  var c=b.length%2;
  if(c==0){
  var bandera=true;
  for(var aux=0;aux<b.length/2;aux++){
  if(b[aux]!==b[b.length-(1+aux)]){
      bandera=false;
  }
  }
  return bandera;
  } else if(c!==0){
  var bandera=true;
  for(var aux=0;aux<Math.floor(b.length/2);aux++){
      if(b[aux]!==b[b.length-(1+aux)]){
          bandera=false;
      }    
  }
  return bandera;
  }
}
// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico