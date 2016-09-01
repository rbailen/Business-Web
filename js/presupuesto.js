function calcularTotal(){
	var suma = 0;
	var num = 0;
	var total = 0;

	/* Opción seleccionada del select */
	var opcion = document.getElementById("tipo").selectedIndex;

	if(opcion == 1){
		suma +=500;
	}else if (opcion == 2){
		suma +=1000;
	}else if (opcion == 3){
		suma +=1500;
	}
	
	/* Plazo introducido */
	var plazo = document.getElementById("plazo").value;

	if(plazo == 1){
		suma+= - 0.05 * suma;
	}else if (plazo == 2){
		suma+= - 0.1 * suma;
	}else if (plazo == 3){
		suma+= - 0.15 * suma;
	}else if (plazo == 4){
		suma+= - 0.2 * suma;
	}
	
	/* Número de checkboxes seleccionados */
	var form = document.getElementById('presupuesto');
    for(var i=0; i< form.length; i++){
        if(form[i].name.substr(0,8) == 'valor1' && form[i].checked){
			num++;
         }
    }

    total = suma + num *400;
	
	document.getElementById("total").value = total + " €";
	
}