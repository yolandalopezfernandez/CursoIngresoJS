function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	// levanto el dato de la caja de opcion

	if ( edad < 18 && estadoCivil != "Soltero") { //"soltero" es string
		alert(" es muy pequeño para No ser soltero");
	}
	


}//FIN DE LA FUNCIÓN