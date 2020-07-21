function mostrar()
{  
	let edad;
	//tomo la edad de la caja de texto y lo asigno a la variable
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad == 15 ) //adentro parentesis condicion
	{	//=== evalua tipo de dato y valor 
		//funcion que se ejecuta si el if es verdadedro
		alert("niña bonita");

	}
	//alert("fin de la funcion");

	/*if(false){ //true me ejecuta siempre el if  

		alert("estoy dentro del if");
	}
	alert("estoy despues del bloque if");
	//false pasa del bloque if y sigue lineas*/
}