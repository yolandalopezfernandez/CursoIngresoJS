function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	// levanto el dato de la caja de opcion

	if ( edad >= 18 && estadoCivil == "Soltero") { //"soltero" es string
		// que no sea enor  !(edad < 18)
		alert(" Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN