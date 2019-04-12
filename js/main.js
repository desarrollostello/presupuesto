function mostrar(input) {
	$("#" + input + "-options").toggle();
}

function less(input){
	if ($("#" + input).val() != 0)
	{
		$("#" + input).val(parseInt($("#" + input).val()) - 1);
		if ($("." + input + "-total").val() >= 0){
			$("." + input + "-total").val(parseInt($("." + input + "-total").val()) - 1);

			$("." + input + "-input").val(parseInt($("." + input + "-total").val()));
			$("." + input + "-input-hidden").val(parseInt($("." + input + "-total").val()));
		}

	}
	
}
function more(input){
	$("#" + input).val(parseInt($("#" + input).val()) + 1);
	$("." + input + "-total").val(parseInt($("." + input + "-total").val()) + 1);
	$("." + input + "-input").val(parseInt($("." + input + "-total").val()));
	$("." + input + "-input-hidden").val(parseInt($("." + input + "-total").val()));
}

$(document).ready(function() {

	$("input[name=programa]").click(function () {    
	   // alert("El Programa seleccionado es: " + $('input:radio[name=programa]:checked').val());
	   document.getElementById('programa').value= $(this).val();
    //    alert("El programa seleccionado es: " + $(this).val());
	});
	$("input[name=tripulacion]").click(function () {    
		document.getElementById('tripulacion').value= $(this).val();
		document.getElementById('tripulacion-hidden').value= $(this).val();
	 });


	 $("input[name=modelo]").click(function () {
		document.getElementById('marca_modelo').value= $(this).val();
		document.getElementById('marca_modelo-hidden').value= $(this).val();
	 });

	 $("input[name=banio-radio]").click(function () {  
		document.getElementById('banio').value= $(this).val();
		document.getElementById('banio-hidden').value= $(this).val();
	 });

	 $('[name="tipo-barco[]"]').click(function() {
		var arr = $('[name="tipo-barco[]"]:checked').map(function(){
		  return this.value;
		}).get();
		var str = arr.join(',');
		/*
		Si le pongo arr directamente lo pone con llaves tipo matriz
		Si le pongo str lo pone como texto simple separdos por coma
		*/ 
		$('#tipo_barco').val(JSON.stringify(str));
		$('#tipo_barco-hidden').val(JSON.stringify(arr));
	});


	$("#submit").click(function () {    
		$('#detalles-hidden').val($("#detalles").val());

		$('#nombre_apellido-hidden').val($("#nombre_apellido").val());
		$('#email-hidden').val($("#email").val());
		$('#telefono-hidden').val($("#telefono").val());


		console.log("Tipo de Barco: " + $('#tipo_barco-hidden').val());
		console.log("Cantidad de Personas: " + $('#cant_personas-hidden').val());
		console.log("Cabinas: " + $('#cabinas-hidden').val());
		console.log("Banios: " + $('#banios-hidden').val());
		console.log("Programa: " + $('#programa-hidden').val());
		console.log("Tripulación: " + $('#tripulacion-hidden').val());
		console.log("Tipo Barco: " + $('#tipo_barco-hidden').val());
		console.log("Marca y Modelo: " + $('#marca_modelo-hidden').val());
		console.log("Detalles: " + $('#detalles-hidden').val());
		console.log("Nombre y Apellido: " + $('#nombre_apellido-hidden').val());
		console.log("Email: " + $('#email-hidden').val());
		console.log("Teléfono: " + $('#telefono-hidden').val());
	});


	var ww = document.body.clientWidth;
	if (ww < 767) {
				$('#total').removeClass('row-eq-height');
				$('#total').addClass('row-eq-height-760');
	};

	
});
