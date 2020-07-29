/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let continuar;
	let numero;
	let promedio;
	let acumulador = 0;
	let contador = 0;

	
	do{ // por lo menos ejecutar una vez uso do-while
		numero = parseInt(prompt("ingrese un numero"));

		acumulador = acumulador + numero; 

		contador++;

		continuar = prompt(" quiere ingresar otro numero ?");
	} while( continuar == 's' );

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	/*let seguir = 's';

	while( seguir == 's' ){
		alert("hola");
		seguir = prompt("quiere que lo vuelva a saludar?");
	}

	alert("entonces ya no lo saludo mas");*/
}