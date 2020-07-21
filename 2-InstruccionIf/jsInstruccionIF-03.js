function mostrar()
{
	
	let edad;

	 edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 18 ) {

		alert(" Mayor de edad");
	}
	else {// no necesita condicion se ejecuta cuando if/else es falso
		alert(" Menor de edad");
	}
}//FIN DE LA FUNCIÓN