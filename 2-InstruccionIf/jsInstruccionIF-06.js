function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad <= 13) { // condicion 1
		alert(" es niño");
	}
	else if ( edad < 18 ) { 
			// condicion 2 con un if else
			alert(" Es adolescente");
		}
		else if ( edad < 65){ // condicion 3
			alert(" es adulto");
		}
		else { // else solo con la ultima alternativa
			alert(" es Anciano");
		}
	/*else { 
		if ( edad >= 13 && edad <= 17 ) { 
			// condicion 2 con un if else
			alert(" Es adolescente");
		}
		else {
			alert(" es mayor de edad")
	}*/

}//FIN DE LA FUNCIÓN