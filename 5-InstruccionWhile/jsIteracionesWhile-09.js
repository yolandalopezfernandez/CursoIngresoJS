/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let continuar;
	let numero;
	let max;
	let min;
	let flag = 0;


	do{
		numero = parseInt(prompt(" Ingrese un numero"));

		if( flag == 0 || numero > max ){ //reconocer es la primera vez
			max = numero;
		}
		if( flag == 0 || numero < min){
			min = numero;
			flag = 1;
		}
		continuar = prompt(" desea ingresar otro numero");
	
	} while ( continuar == 's' );

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
	

}