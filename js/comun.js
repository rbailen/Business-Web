/* Activación del módulo de trabajo con feeds RSS */
google.load("feeds", "1");

/* Cargar las últimas dos noticias de algún RSS en la sección de últimas noticias */
function cargarRSS(){
	/* Lectura del fichero que deseamos consultar (noticias de economía de Expansión) */
	var feed = new google.feeds.Feed("http://expansion.feedsportal.com/rss/economia.xml");
	
	feed.load(function(resultado){
		if(!resultado.error){
			var capa = document.getElementById("categories");
			var ul = document.createElement("ul");
			
			for(var i=0; i<2; i++){
				var noticia = resultado.feed.entries[i];
				
				var li = document.createElement("li");
				
				ul.appendChild(li);
				li.appendChild(document.createTextNode(noticia.title));
				capa.appendChild(ul);
			}
		}
	});
}




/* Cargar portfolio con AJAX */
function cargarPortfolio (numero){
	var objHttp = null;

	// Creamos una instancia del objeto XMLHTTPRequest
	if(window.XMLHttpRequest){ //Mozilla, Chrome, Safari
		objHttp = new XMLHttpRequest();
	}else{ //Internet Explorer
		objHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	//Abrimos un canal asíncrono con el servidor
	objHttp.open("GET", "portfolio/" + "imagen" + ".html", true);

	//Función que se ejecutará al cambiar el estado del objeto
	objHttp.onreadystatechange = function(){
		if(objHttp.readyState == 4){
			if(objHttp.readyState == 4){
				if(numero == 1){
					document.getElementById("portfolio1").innerHTML = objHttp.responseText;
				}else if (numero == 2){
					document.getElementById("portfolio2").innerHTML = objHttp.responseText;
				}else if (numero == 3){
					document.getElementById("portfolio3").innerHTML = objHttp.responseText;
				}else if (numero ==4){
					document.getElementById("portfolio4").innerHTML = objHttp.responseText;
				}else if (numero == 5){
					document.getElementById("portfolio5").innerHTML = objHttp.responseText;
				}
			}
		}
	}

	//Da comienzo a la conexión
	objHttp.send(null);
}




/* Cargar página vacía con AJAX */
function cargarPaginaVacia (numero){
	var objHttp = null;

	// Creamos una instancia del objeto XMLHTTPRequest
	if(window.XMLHttpRequest){ //Mozilla, Chrome, Safari
		objHttp = new XMLHttpRequest();
	}else{ //Internet Explorer
		objHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	//Abrimos un canal asíncrono con el servidor
	objHttp.open("GET", "portfolio/" + "blanco" + ".html", true);

	//Función que se ejecutará al cambiar el estado del objeto
	objHttp.onreadystatechange = function(){
		if(objHttp.readyState == 4){
			if(objHttp.readyState == 4){
				if(numero == 1){
					document.getElementById("portfolio1").innerHTML = objHttp.responseText;
				}else if (numero == 2){
					document.getElementById("portfolio2").innerHTML = objHttp.responseText;
				}else if (numero == 3){
					document.getElementById("portfolio3").innerHTML = objHttp.responseText;
				}else if (numero ==4){
					document.getElementById("portfolio4").innerHTML = objHttp.responseText;
				}else if (numero == 5){
					document.getElementById("portfolio5").innerHTML = objHttp.responseText;
				}
			}
		}
	}

	//Da comienzo a la conexión
	objHttp.send(null);
}