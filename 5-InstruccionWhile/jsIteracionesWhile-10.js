/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 

	let numero;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorPares = 0;
	let contadorCeros = 0;
	let continuar;
	let acumuladorPositivo = 0; //sumar
	let acumuladorNegativo = 0;
	let promedioPositivo = 0;
	let promedioNegativo = 0;
	let diferencia;
	//generar bucle do-while

	do{
		//pedir un numero
		numero = parseInt(prompt("Ingrese un numero"));
		
		//analizar el signo del numero y actuar en consecuencia
		if(  numero < 0 ){
			//negativos
			acumuladorNegativo += numero; // sumar acumular
			contadorNegativos++; // contar
		}
		else if( numero == 0 ){
			//ceros
			contadorCeros++; //contarlos
		}
		else{
			//positivos
			acumuladorPositivo += numero;
			contadorPositivos++;
		}
		// analizar si es par 

		if( numero % 2 == 0 ){
			contadorPares++; //contador sumar
		}

		continuar = prompt("quiere ingresar otro numero?");
	} while (continuar == 's');

	// hacer los calculos que necesitan los datos
	//conseguidos en el bucle
	if( contadorPositivos > 0 ){ 
	promedioPositivo = acumuladorPositivo / contadorPositivos;
	}
	if ( contadorNegativos > 0){
	promedioNegativo = acumuladorNegativo / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;
	//mostrar resultados
	console.log("la suma de negativos es :"+ acumuladorNegativo);
	console.log("Suma de los positivos" + acumuladorPositivo );
	console.log("Cantidad de positivos" + contadorPositivos );
	console.log("Cantidad de negativos" + contadorNegativos);
	console.log("Cantidad de ceros" + contadorCeros);
	console.log("Cantidad de números pares" + contadorPares);
	console.log("Promedio de positivos" + promedioPositivo);
	console.log("Promedios de negativos" + promedioNegativo);
	console.log("Diferencia entre positivos y negativos" + diferencia);
	
}