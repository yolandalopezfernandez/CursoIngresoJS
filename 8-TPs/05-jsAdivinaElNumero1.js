/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;// la primera vez q la usa es en comenzar y para escribir
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random()*99 + 1);
  alert(numeroSecreto);
  document.getElementById("txtIdNumero").focus(); // tome foco el elemento
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  flag = 1;
  // incremetno 1 a la variable y le asigno el valor
  //contadorIntentos ++; contadorIntentos += 1;
  //contadorIntentos = contadorIntentos + 1 ; 
  
}

function verificar()
{
  let number ;

  if ( flag == 0 ) { // para bloquear el boton verifiacando si no presiona comenzar 1°
  alert("Primero deber presionar el boton comenzar");
  }
  else {

    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    number = parseInt(document.getElementById("txtIdNumero").value);

    if (numeroSecreto == number){
      alert(`usted es ganador! y en solo ${contadorIntentos} intentos`);
      flag = 0; // para que no apriete verificar de nuevo
      contadorIntentos = 0;
    }
    else if ( numeroSecreto < number){
      alert(" Se paso ...");
    }
    else {
      alert (" Falta ...");
    }
    document.getElementById("txtIdNumero").value = ""; //limpiar
    document.getElementById("txtIdNumero").focus();
  }	
  
}