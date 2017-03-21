$(document).ready(function () {
	 new WOW().init();
	// SKILLBARS

	

	// MENU DESAPARECER Y APARECER

	$(".menu-margin").on("click", function(){
	 	
		// SI ESTA EN PEQUEÑO OCULTALO SINO NO HAGAS NADA

	 	if ( $(window).width() <= 768 ) {
	 		console.log("Esta en chiquito");
	 		$("#myNavbar").hide(400);
	 	}

		

	});


	$("#home-nav").on("click", function(){
	 	$("#myNavbar").toggle(400)
	});

	

});

