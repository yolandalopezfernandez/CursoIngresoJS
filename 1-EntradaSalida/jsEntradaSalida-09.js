/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	let sueldo;
	let nuevosueldo;
	let aumento; //porcentaje que aumenta
	// para calcular el nuevo sueldo sueldo + aumento

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	
	aumento = sueldo * 0.1; // 0 antes de la derecha es redundante o sea .1
	
	nuevosueldo = aumento + sueldo; 
	// le asigno el valor del nuevo sueldo a la cja de texto de abajo
	document.getElementById("txtIdResultado").value = nuevosueldo.toFixed(2); 
	//limitar cantidad de decimales toFixed
	
}
