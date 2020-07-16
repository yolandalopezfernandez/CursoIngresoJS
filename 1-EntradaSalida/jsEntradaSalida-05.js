/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;
    // le asigno a la variable nombre el valor de ingresado en la caja de texto
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	alert("usted se llama " + nombre + " y tiene " + edad + " años ");
	//otra manera nueva
	//alert(`Usted se llama ${nombre} y tiene ${edad} años`);
	// utilizo mas para concatenar
}


