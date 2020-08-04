/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//pedir dato

	let clave = 750
	let flag = 0;

	clave = prompt("ingrese el numero clave");
	
	//valido dato
	while(	clave != "utn750" ){

		if (flag == 0){
		//pisar el valor de la clave para evaluarlo
		clave = prompt("ingrese clave");
		flag = 1;
		}
		else{
			clave = prompt("clave invalida. Reingrese clave");
		}
	}

	alert("clave valida")

	
	
}//FIN DE LA FUNCIÓN
