function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (! ( edad >= 13 && edad <= 17 )) { 
		// if (! ( edad >= 13 && edad <= 17 )) si no estoy dentro del rango
		// ( edad < 13 || edad > 17 ) es verdadera para edad fuera del rango
		alert(" No es adolescente");
	}

}//FIN DE LA FUNCIÓN