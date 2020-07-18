/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = parseFloat(document.getElementById("txtIdImporte").value);
	//caprturo el dato de la caja de texto
	
	descuento = importe * 0.25;  // calculo el descuento
	
	resultado =  importe - descuento; //resultado 
	
	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
	//le asigno el valor de la variable resultado a la caja de texto de txtIdResultado 
	
}
