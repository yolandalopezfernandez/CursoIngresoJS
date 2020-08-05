function mostrar()
{
	//declarar variables
	let numero;
	let contadorPares = 0;
	
	//pido un numero
	numero = parseInt(prompt("Ingrese un numero"));

	//hacer que variable tome valor de 1 a num ingresado

	for( let i = 1; i <= numero ; i++ ){
		//para cada uno de los valores analizo si es par
		//cuento los pares
		if( i % 2 == 0 ){
			contadorPares++;
			console.log(i);
		}
	}
	// una vez analizados todos los valores 
	//muesro cantidad de pares
	console.log("pares encontrados " + contadorPares);

}