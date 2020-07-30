/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	let continuar; // no hace falta xk usamos do-while
	let numero;
	let contadorPositivo = 0;
	let contadorNegativo = 1;
	let flag = 0;

	// mientras el usuario quiera do-while

	do{

		numero = parseInt(prompt("ingrese un numero"));

		//console.log(numero); // azul number negro string

		if ( numero >= 0 ){

			contadorPositivo = contadorPositivo + numero;
		}
		else{
			flag = 1; //para verificar que ingreso negativos
			contadorNegativo = contadorNegativo * numero;
		}

		continuar = prompt(" Desea sumar los positivos y multiplicar los negativos ?")

	}while( continuar == 'n' );

	//verificar el flag
	if( flag == 0){ // no ingresaron negativos
		contadorNegativo = 0;
	}

	document.getElementById("txtIdSuma").value = contadorPositivo;
	document.getElementById("txtIdProducto").value = contadorNegativo;	

	//alert(`la suma es ${contadorPositivo} y la multiplicacion es ${contadorNegativo}`);
}