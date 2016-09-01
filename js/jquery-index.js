$(document).ready(function(){
	/* Mensaje de agradecimiento a los 4 segundos de cargar la web */
	setTimeout('alert("Gracias por su visita")', 4000);
	
	/* Mostrar y esconder los comentarios */
	$("#more").click(function(){
        $("#comentarios").toggle();
    }); 
});