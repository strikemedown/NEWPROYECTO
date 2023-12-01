window.addEventListener("load",THESTART);

function THESTART(){
	document.getElementById("LNAME").disabled= true;
	document.getElementById("GL").disabled= true;
	document.getElementById("SLC").disabled= true;
	document.getElementById("EMAIL").disabled= true;
	document.getElementById("FNAME").addEventListener("keypress",NOMBRE);
	document.getElementById("LNAME").addEventListener("keypress",APELLIDO)
	document.getElementById("SLC").addEventListener("keypress",PEQUENACOMUNIDADDEAPRENDIZAJE)
	document.getElementById("GL").addEventListener("keypress",GRADO)
	document.getElementById("FNAME").addEventListener("keypress",CORREO)
	
}

function NOMBRE(){
	document.getElementById("LNAME").disabled= false
}

function 