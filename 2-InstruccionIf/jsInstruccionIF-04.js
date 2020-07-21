function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 13 && edad <= 17 ) { // dentro del rango
		// al reves if ( ! (edad < 13 || edad > 17) ) fuera de rango
		alert(" Es adolescente");
	}

	/*if ( edad >= 13) { // abarco inicio de rango

		if( edad <= 17){ // abarco fin del rango

			alert(" Es adolescente");
		}
	}*/

}//FIN DE LA FUNCIÓN