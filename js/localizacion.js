/* Variables */
var mapa;
var mostrar_direcciones;
var servicios_rutas = new google.maps.DirectionsService();


function cargarMapa(){
	/* Creación de la ruta en modo texto */
	mostrar_direcciones = new google.maps.DirectionsRenderer();
	
	/* Creación del punto de coordenadas */
	var punto = new google.maps.LatLng(40.4176597, -3.695193300000028);

	/* Creación de las opciones del mapa */
	var opciones = {zoom: 12, center: punto, mapTypeId: google.maps.MapTypeId.ROADMAP};

	/* Creación del mapa */
	mapa = new google.maps.Map(document.getElementById("mapa"), opciones);
	
	/* Creación de la marca visual */
	var marca = new google.maps.Marker({position: punto, map: mapa, title: "Destino"});
	
	/* Creación de la caja de contenido para la marca */
	var caja = new google.maps.InfoWindow({content: "<b>Dirección: </b>Calle de los Madrazo 23, Madrid<br/><b>Código Postal: </b>10054"});
	
	/* Creación del evento */
	google.maps.event.addListener(marca, "click", function(){
		/* Mostramos la caja dentro del mapa (mapa) */
		caja.open(mapa, marca);
	});

	/* Indica el mapa sobre el que vamos a calcular el recorrido */
	mostrar_direcciones.setMap(mapa);
	
	/* Id de la capa DIV que contendrá la ruta escrita para llegar de una localización a otra */
	mostrar_direcciones.setPanel(document.getElementById("ruta"));
}


function calcularRuta(){
	/* Direcciones de partida por defecto */
	var partida = document.getElementById("partida").value;
	
	/* Dirección de destino por defecto */
	var destino = "Calle de los Madrazo 23, Madrid";
	
	/* Creación de las opciones de la ruta haciendo el viaje en coche o en moto (DRIVING)
	En caso de ser caminando utilizaríamos WALKING */
	var opciones = {origin: partida, destination: destino, travelMode: google.maps.DirectionsTravelMode.DRIVING};
	
	/* Búsqueda de la ruta */
	servicios_rutas.route(opciones, function(response, status){
		if(status == google.maps.DirectionsStatus.OK){
			mostrar_direcciones.setDirections(response);
		}
	});
	
}