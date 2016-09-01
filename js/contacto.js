function validarFecha(fecha_pasada){
	var fecha = new String(fecha_pasada);
	
	var dia = new String(fecha.substring(0, fecha.indexOf("/")));
	var mes = new String(fecha.substring(fecha.indexOf("/")+1, fecha.lastIndexOf("/")));
	var anio = new String(fecha.substring(fecha.lastIndexOf("/")+1, fecha.length));
	
	//Comprobaciones del día
	if(isNaN(dia) || parseInt(dia)<1 || parseInt(dia)>31){
		return false;
	}
	
	//Comprobaciones del mes
	if(isNaN(mes) || parseInt(mes)<1 || parseInt(mes)>12){
		return false;
	}
	
	//Comprobaciones del año
	if(isNaN(anio) || anio.length<4 || parseInt(anio)<1900){
		return false;
	}
	
	//Comprobaciones mixtas de día y mes
	if(mes==2 || mes==4 || mes==6 || mes==9 || mes==11){
		if(mes==2 && dia>28 || dia>30)
			return false;
	}
	
	return true;
}

function validar(form){
	
	/* Variables de control */
	var ok; /* Variable para contener el resultado */
	var msg; /* Variable para ir generando el mensaje de error */
	msg='';
	ok="si"; /* Ponemos la variable de ok a valor si */
	
	/* Comprobación del NOMBRE */
	if(document.getElementById("nombre").value == ''){
		ok="no";
		msg = msg + "El campo NOMBRE no puede estar vacio.\n";
	}
	
	/* Comprobación de los APELLIDOS */
	if(document.getElementById("apellidos").value == ''){
		ok="no";
		msg = msg + "El campo APELLIDOS no puede estar vacio.\n";
	}
	
	/* Comprobación de la DIRECCION */
	if(document.getElementById("direccion").value == ''){
		ok="no";
		msg = msg + "El campo DIRECCION no puede estar vacio.\n";
	}
	
	/* Comprobación del TELEFONO */
	if(document.getElementById("telefono").value == ''){
		ok="no";
		msg = msg + "El campo TELEFONO no puede estar vacio.\n";
	}else{
		/* Si no contiene números*/
		if(isNaN(document.getElementById("telefono").value)){
			ok="no";
			msg = msg + "El campo TELEFONO debe contener numeros.\n";
			
		}else{ /* Si los contiene*/
			ok="si";
		}
	}
	
	/* Comprobación del EMAIL */
	if(document.getElementById("email").value == ''){
		ok="no";
		msg = msg + "El campo EMAIL no puede estar vacio.\n";
	}else{
		var email = /^(.+\@.+\..+)$/;
		
		if(!email.exec(document.getElementById("email").value)){
			ok="no";
			msg = msg + "EMAIL no valido.\n";
		}
	}
	
	/* Comprobación de la FECHA */
	if(document.getElementById("fecha").value == ''){
		ok="no";
		msg = msg + "El campo FECHA no puede estar vacio.\n";
	}else{
		if(!validarFecha(document.getElementById("fecha").value)){
			ok="no";
			msg = msg + "FECHA no valida.\n";
		}
	}
	
	/* Comprobación del DNI */
	if(document.getElementById("dni").value == ''){
		ok="no";
		msg = msg + "El campo DNI no puede estar vacio.\n";
	}else{
		var dni = /^\d{8}[A-Z]$/;
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
		if(!dni.exec(document.getElementById("dni").value)){
			ok="no";
			msg = msg + "DNI no válido.\n";
		}else{
			if(document.getElementById("dni").value.charAt(8)!=letras[(document.getElementById("dni").value.substring(0, 8))%23]){
				ok="no";
				msg = msg + "DNI no valido.\n";
			}
		}
	}
	
	/* Comprobación de las OBSERVACIONES */
	if(document.getElementById("observaciones").value == ''){
		ok="no";
		msg = msg + "El campo OBSERVACIONES no puede estar vacio.\n";
	}
	
	
	/* Si no ha ocurrido ningún error enviamos el formulario
	   Si hay errores los mostramos en un mensaje */ 
	if(ok == "si"){
		document.formulario.submit();
	}else{
		alert(msg);
		return false; /* Impide que los datos escritos se borren antes de enviarlo */
	}
}