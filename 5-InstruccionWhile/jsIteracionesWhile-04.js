/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	// si el dato es valido while( (numero < 0 || numero > 9 || isNaN(numero) ))
	// si el dato no es valido !(numero >= 0 && numero <= 9 )

	while( !(numero >= 0 && numero <= 9 )){

		numero = parseInt(prompt(" numero no valido.Ingrese otro numero"));
	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN