/* Cargar pestañas con AJAX */
function cargarTabs (numero){
	var objHttp = null;

	// Creamos una instancia del objeto XMLHTTPRequest
	if(window.XMLHttpRequest){ //Mozilla, Chrome, Safari
		objHttp = new XMLHttpRequest();
	}else{ //Internet Explorer
		objHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	//Abrimos un canal asíncrono con el servidor
	objHttp.open("GET", "tabs/" + "contenido" + numero + ".html", true);

	//Función que se ejecutará al cambiar el estado del objeto
	objHttp.onreadystatechange = function(){
		if(objHttp.readyState == 4){
			/* Se aplica solamente al primer elemento de la lista devuelta con elementos que contienen la clase "text" */
			document.getElementsByClassName("text")[0].innerHTML = objHttp.responseText;
		}
	}

	//Da comienzo a la conexión
	objHttp.send(null);
}