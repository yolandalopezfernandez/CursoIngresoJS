/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosF;
    let gradosC;

    gradosF = parseFloat(document.getElementById("txtIdTemperatura").value);
    // capturo dato de temperatura que ingresa en la cajd de texto

    gradosC = (gradosF - 32) * 5/9;

    gradosC = gradosC.toFixed(2);

    alert(`${gradosF} Fahrenheit son ${gradosC} centígrados`);
	
}

function CentigradosFahrenheit () 
{
	let gradosF;
    let gradosC;

    gradosC = parseFloat(document.getElementById("txtIdTemperatura").value);
    // capturo dato de temperatura

    gradosF = gradosC / (5/9) + 32;

    gradosF = gradosF.toFixed(2);

    //alert(gradosF);

    alert(`${gradosC}  centígrados son ${gradosF} Fahrenheit `);
	
}
