$(document).ready(function () {
	$('#txtphone').mask('(00) 0000-0000');
	$('#txtphone_lab').mask('(00) 0000-0000');
});

function checkPronvincia() {
	var object = event.target;

	console.log(event.target.value);

	$.get("json\buenos-aires.json", function (data) {
		console.log("Martin");
	});

		//console.log($(event.target).children(":first").data('ort'));

		switch (event.target.value) {
			case "caba": 				
				$("#cmbLocGbaDiv").hide();
				$("#txtLocOtroDiv").hide();
				$("#cmbLocCabaDiv").show('slow'); 
				break;
			case "gba": 
				$("#cmbLocCabaDiv").hide(); 
				$("#txtLocOtroDiv").hide();
				$("#cmbLocGbaDiv").show('slow');				
				break;
			case "otro": 
				$("#cmbLocCabaDiv").hide();
				$("#cmbLocGbaDiv").hide();
				$("#txtLocOtroDiv").show('slow'); 
				
				 
				break;
			case "" :
				$("#cmbLocCabaDiv").hide('slow'); 
				$("#cmbLocGbaDiv").hide('slow');
				$("#txtLocOtroDiv").hide('slow'); 	
		}	
}

function checkPronvinciaLab() {
	var object = event.target;

	console.log(event.target.value);

	$.get("json\buenos-aires.json", function (data) {
		console.log("Martin");
	});

		//console.log($(event.target).children(":first").data('ort'));

		switch (event.target.value) {
			case "caba": 				
				$("#cmbLocGbaDiv_lab").hide();
				$("#txtLocOtroDiv_lab").hide();
				$("#cmbLocCabaDiv_lab").show('slow'); 
				break;
			case "gba": 
				$("#cmbLocCabaDiv_lab").hide(); 
				$("#txtLocOtroDiv_lab").hide();
				$("#cmbLocGbaDiv_lab").show('slow');				
				break;
			case "otro": 
				$("#cmbLocCabaDiv_lab").hide();
				$("#cmbLocGbaDiv_lab").hide();
				$("#txtLocOtroDiv_lab").show('slow');  
				break;
			case "" :
				$("#cmbLocCabaDiv_lab").hide('slow'); 
				$("#cmbLocGbaDiv_lab").hide('slow');
				$("#txtLocOtroDiv_lab").hide('slow'); 	
		}	
}

function checkMatricula() {

	switch(event.target.value){
		case "si": 
			$("#numMat").show('slow');
			$("#hosp").show('slow');
			break;
		case "no":
		case "":
			$("#numMat").hide('slow');
			$("#hosp").hide('slow');
	}

}

function validarForm() {
	var first = false;
	var percent = 0;
	var error = false;

	try {
		if (document.getElementById('txtNombre').value == "") {
			error = true;
			document.getElementById('txtNombre').setAttribute('class', 'form-control is-invalid');
		} else {
			percent += 10;
			//Con JQuery
			$('#txtNombre').removeClass('is-invalid').addClass('is-valid');
		}

		if (document.getElementById('txtApellido').value == "") {
			$('#txtApellido').addClass('is-invalid');
			error = true;
		} else {
			percent += 10;
			$('#txtApellido').removeClass('is-invalid').addClass('is-valid');
		}

		if (document.getElementById('txtDni').value == ""
			|| !Number(document.getElementById('txtDni').value)) {
			$('#txtDni').addClass('is-invalid');
			error = true;
		} else {
			percent += 10;
			$('#txtDni').removeClass('is-invalid').addClass('is-valid');
		}

		if ($('#cmbProvincia').val() == "") {
			$('#cmbProvincia').addClass('is-invalid');
			error = true;
		} else {
			percent += 10;
			$('#cmbProvincia').removeClass('is-invalid').addClass('is-valid');
		}

		if (document.getElementById('txtEmail').value.indexOf("@") < 0
			|| document.getElementById('txtEmail').value.indexOf(".") < 0
			|| document.getElementById('txtEmail').value.length < 4) {
			$('#txtEmail').addClass('is-invalid');
			error = true;
		} else {
			percent += 20;
			$('#txtEmail').removeClass('is-invalid').addClass('is-valid');
		}

		if ($('#txtphone').val() == "") {
			error = true;
			$('#txtphone').addClass('is-invalid');
		} else {
			percent += 20;
			$('#txtphone').removeClass('is-invalid').addClass('is-valid');
		}

		if (!$("#chkTerms").is(':checked')) {

			$('#chkTerms').parents(".form-check:first").addClass('wobble animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				$(this).removeClass('wobble animated');
			});
		}

		$(".progress-bar").css('width', percent + '%');

		return false;

	} catch (e) {
		console.log(e);
	}

	return error ? false : true;





}

function validarFormPaso1() {
	
	var percent = 0;
	var error = false;
	var nombre = document.getElementById("nom"); 
	try {
		if (nombre.value == "") {
			error = true;
			nombre.setAttribute('class', 'form-control is-invalid');
		} else {
			$('#nom').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if ($('#ape').value == "") {
			$('#ape').addClass('is-invalid');
			error = true;
		} else {
			$('#ape').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("cmbTipoDni").value == ""){
			error = true;
			document.getElementById("cmbTipoDni").setAttribute("class", "form-control is-invalid");
		} else {
			$('#cmbTipoDni').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("dni").value == ""){
			error = true;
			document.getElementById("dni").setAttribute("class", "form-control is-invalid");
		} else {
			$('#dni').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("ntte").value == "" || isNaN(document.getElementById("numTmte"))){
			error = true;
			document.getElementById("ntte").setAttribute("class", "form-control is-invalid");
		} else {
			$('#ntte').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("cmbNac").value == ""){
			error = true;
			document.getElementById("cmbNac").setAttribute("class", "form-control is-invalid");
		} else {
			$('#cmbNac').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("cmbGen").value == ""){
			error = true;
			document.getElementById("cmbGen").setAttribute("class", "form-control is-invalid");
		} else {
			$('#cmbGen').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}

		if (document.getElementById("fecNac").value == ""){
			error = true;
			document.getElementById("fecNac").setAttribute("class", "form-control is-invalid");
		} else {
			$('#fecNac').removeClass('is-invalid').addClass('is-valid');
			percent += 12.5;
		}
		
		$(".progress-bar").css('width', percent + '%');

	} catch (e) {
		console.log(e);
	}

	if(!error){
		$("#paso1").hide();
		$("#paso2").show('slow');
	}  
}

function validarFormPaso2() {
	
	var percent = 0;
	var error = false;

	try {
		if (document.getElementById('txtCalle').value == "") {
			error = true;
			document.getElementById('txtCalle').setAttribute('class', 'form-control is-invalid');
		} else {
			//Con JQuery
			$('#txtCalle').removeClass('is-invalid').addClass('is-valid');
			percent += 25;
		}
		

		if (document.getElementById('txtAltura').value == "") {
			$('#txtAltura').addClass('is-invalid');
			error = true;
		} else {
			$('#txtAltura').removeClass('is-invalid').addClass('is-valid');
			percent += 25;
		}
		if (document.getElementById("txtDto").value == ""){
			error = true;
			document.getElementById("txtDto").setAttribute("class", "form-control is-invalid");
		} else {
			$('#txtDto').removeClass('is-invalid').addClass('is-valid');
			percent += 25;
		}

		if (document.getElementById("cmbProv").value == ""){
			error = true;
			document.getElementById("cmbProv").setAttribute("class", "form-control is-invalid");
		} else {
			$('#cmbProv').removeClass('is-invalid').addClass('is-valid');
			percent += 25;
		}
			
		$(".progress-bar").css('width', percent + '%');

	} catch (e) {
		console.log(e);
	}

	if(!error){
		$("#paso2").hide();
		$("#paso3").show('slow');
	}

}

function validarFormPaso3(){
	
	var percent = 0;
	var error = false;

	try {
		if (document.getElementById('txtphone').value == "") {
			error = true;
			document.getElementById('txtphone').setAttribute('class', 'form-control is-invalid');
		} else {
			//Con JQuery
			$('#txtphone').removeClass('is-invalid').addClass('is-valid');
			percent += 33;
		}

		if (document.getElementById('txtEmail').value == "") {
			$('#txtEmail').addClass('is-invalid');
			error = true;
		} else {
			$('#txtEmail').removeClass('is-invalid').addClass('is-valid');
			percent += 33;
		}

		if (document.getElementById("git").value == ""){
			error = true;
			document.getElementById("git").setAttribute("class", "form-control is-invalid");
		} else {
			$('#git').removeClass('is-invalid').addClass('is-valid');
			percent += 34;
		}
		
		$(".progress-bar").css('width', percent + '%');

		
	} catch (e) {
		console.log(e);
	}

	if(!error){
		$("#paso3").hide();
		$("#paso4").show('slow');
	}  
}

function validarFormPaso4() {

    var percent = 0;
    var error = false;
	
    try {
        if (document.getElementById('txtCalleLab').value == "") {
            error = true;
            document.getElementById('txtCalleLab').setAttribute('class', 'form-control is-invalid');
        } else {
            //Con JQuery
            $('#txtCalleLab').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
        if (document.getElementById('txtAlturaLab').value == "") {
            $('#txtAlturaLab').addClass('is-invalid');
            error = true;
        } else {
            $('#txtAlturaLab').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
        if (document.getElementById("txtDtoLab").value == "") {
            error = true;
            document.getElementById("txtDtoLab").setAttribute("class", "form-control is-invalid");
        } else {
            $('#txtDtoLab').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
        if (document.getElementById("cmbProv_lab").value == "") {
            error = true;
            document.getElementById("cmbProv_lab").setAttribute("class", "form-control is-invalid");
        } else {
            $('#cmbProv_lab').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
        if (document.getElementById("txtphone_lab").value == "" ) {
            error = true;
            document.getElementById("txtphone_lab").setAttribute("class", "form-control is-invalid");
        } else {
            $('#txtphone_lab').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
        if (document.getElementById("mat").value == "") {
            error = true;
            document.getElementById("mat").setAttribute("class", "form-control is-invalid");
        } else {
            $('#mat').removeClass('is-invalid').addClass('is-valid');
            percent += 16.6;
        }
		if($('#mat').value == "si"){
			if (document.getElementById("numMat").value == "") {
				error = true;
				document.getElementById("numMat").setAttribute("class", "form-control is-invalid");
			} else {
				$('#numMat').removeClass('is-invalid').addClass('is-valid');
				percent += 0.4;
			}
		}	

        $(".progress-bar").css('width', percent + '%');

    } catch (e) {
        console.log(e);
    }

    if (!error) {
        $("#paso4").hide();
        $("#paso5").show('slow');
    }
}

function volverPaso1(){
	$('#paso2').hide();
	$('#paso1').show('slow');
}
function volverPaso2(){
	$('#paso3').hide();
	$('#paso2').show('slow');
}
function volverPaso3(){
	$('#paso4').hide();
	$('#paso3').show('slow');
}
function volverPaso4(){
	$('#paso5').hide();
	$('#paso4').show('slow');
}


