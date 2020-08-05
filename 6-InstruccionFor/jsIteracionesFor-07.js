function mostrar()
{

	//declarar variables
	let numero;
	let contadorDivisores = 0;
	
	//pido un numero
	numero = parseInt(prompt("Ingrese un numero"));

	//hacer que variable tome valor de 1 a num ingresado

	for( let i = 1; i <= numero ; i++ ){
		//para cada uno de los valores analizo si es par
		//cuento los divisores
		if( numero % i == 0 ){
			contadorDivisores++;
			console.log(i);
		}
	}
	// una vez analizados todos los valores 
	//muesro cantidad de divisores
	console.log("divisores encontrados " + contadorDivisores);


}//FIN DE LA FUNCIÓN