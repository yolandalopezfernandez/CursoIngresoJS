/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 //definicion de variables
	 let edad;
	 let sexo;
	 let estadoCivil;
	 let sueldoBruto;
	 let legajo;
	 let nacionalidad;

	 edad = parseInt(prompt("Ingrese su edad "));
	 //crear un bucle
	 while(!(edad >= 18 && edad <= 90)){ // edad<18||edad<90||isNAN(edad)
		edad = parseInt(prompt("Edad invalida. Ingrese edad entre 18 y 90 años inclusive "));
	 }
	 document.getElementById("txtIdEdad").value = edad;

	 sexo = prompt("Ingrese su sexo: 'm' para masculino o 'f' para femenino");
	 while(!( sexo == 'm' || sexo == 'f' || sexo == 'F' || sexo == 'M')){
		sexo = prompt("Error. Ingrese su sexo con f ó m");
	 }
	 
	if (sexo == 'f' || sexo == 'F'){
		sexo = "femenino";
	}
	else{
		sexo = "masculino";
	}
	 document.getElementById("txtIdSexo").value = sexo;

	 estadoCivil = parseInt(prompt("Ingrese su estado civil :  1-para soltero, 2-para casados, 3-para divorciados o 4-para viudos"));
	 while(!( estadoCivil >= 1 || estadoCivil <= 4)){
		estadoCivil = parseInt(prompt("Error, ingrese 1-para soltero, 2-para casados, 3-para divorciados o 4-para viudos"));
	 }
	 switch(estadoCivil){
		case estadoCivil = 1:
			estadoCivil = "soltero";
		break;
		case estadoCivil = 2:
			estadoCivil = "casado";
		break;
		case estadoCivil = 3:
			estadoCivil = "divorciado";
		break;
		case estadoCivil = 4:
			estadoCivil = "viudo";
		break;
	 }
	 document.getElementById("txtIdEstadoCivil").value = estadoCivil;

	 sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto"));
	 while( !(sueldoBruto >= 8000 )){
		sueldoBruto = parseFloat(prompt("Invalido. Ingrese sueldo bruto mayor a $8000"));
	 }
	 document.getElementById("txtIdSueldo").value = (` $ ${sueldoBruto}`); 

	 legajo = parseInt(prompt("Ingrese su legajo"));
	while(!(legajo >= 1000 && legajo <= 9999)){
		legajo = parseInt(prompt("Invalido. Ingrese su legajo, numérico de 4 cifras, sin ceros a la izquierda"));
	}
	document.getElementById("txtIdLegajo").value = legajo;

	nacionalidad = prompt(" Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	 while(!( nacionalidad == 'A' || nacionalidad == 'E' ||nacionalidad == 'N' )){
		nacionalidad = prompt(" Invalido. Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	 }

	 if(nacionalidad == 'A'){
		 nacionalidad = "argentino";
	 }
	 else if(nacionalidad == 'E'){
		nacionalidad = "extranjero";
	 }
	 else{
		nacionalidad = "nacionalizado";
	 }
	 document.getElementById("txtIdNacionalidad").value = nacionalidad; 

	 /*
	 let x = "PEPE";
	 x.toLowerCase();*/
	
}
