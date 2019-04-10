
function mostrar(input) {
	$("#" + input + "-options").toggle();
}

function less(input){
	if ($("#" + input).val() != 0)
	{
		$("#" + input).val(parseInt($("#" + input).val()) - 1);
		if ($("." + input + "-total").val() >= 0){
			$("." + input + "-total").val(parseInt($("." + input + "-total").val()) - 1);
		}

	}
	
}
function more(input){
	$("#" + input).val(parseInt($("#" + input).val()) + 1);
	$("." + input + "-total").val(parseInt($("." + input + "-total").val()) + 1);
}

$(document).ready(function() {
	$('.containercheck-programa').click(function() {
		alert($("input:checkbox:checked").val());
		document.getElementById('programa').value= 'pepe';
		
	});
	
});
