/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;
	genero = prompt("ingrese f ó m .");

	while(!( genero == 'm' || genero == 'f' || genero == 'F' || genero == 'M')){

		genero = prompt("Error. ingrese f ó m .");
	}

	if (genero == 'f' || genero == 'F'){
		genero = "femenino";
	}
	else{
		genero = "masculino";
	}
	document.getElementById("txtIdSexo").value = genero;
	
}//FIN DE LA FUNCIÓN