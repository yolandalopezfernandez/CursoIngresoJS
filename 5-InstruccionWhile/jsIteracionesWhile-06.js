function mostrar()
{	
	let i = 0;
	let acumulador = 0; // sumo los numeros que capturo
	let suma;
	let promedio;
	let numero;
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;

	/*numero1 = parseInt(prompt("ingrese un numero"));
	
	numero2 = parseInt(prompt("ingrese un numero"));
	
	numero3 = parseInt(prompt("ingrese un numero"));
	
	numero4 = parseInt(prompt("ingrese un numero"));
		
	numero5 = parseInt(prompt("ingrese un numero"));*/

	while( i < 5 ){

		numero = parseInt(prompt("ingrese un numero"));
		// numero += parseInt()... numero funciona como acumulador

		acumulador = acumulador + numero; // voy capturando el numero

		i++;
	}

	//suma = numero1 +numero2 + numero3 + numero4 + numero5;
	
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;	
	


	
	

	

	







}