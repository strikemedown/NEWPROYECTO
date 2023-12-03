window.addEventListener("load",THESTART);

function THESTART(){
	document.getElementById("APELLIDO").disabled= true;
	document.getElementById("SEGUNDONOMBRE").disabled= true;
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").disabled= true;
	document.getElementById("NIVELDEGRADO").disabled= true;
	document.getElementById("DIRECCIONDECORREOELECTRONICO").disabled= true;
	document.getElementById("ENTREGAR").disabled= true;
	document.getElementById("NOMBRE").addEventListener("keypress",NOMBRE);
	document.getElementById("APELLIDO").addEventListener("keypress",APELLIDO);
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").addEventListener("keypress",PEQUENACOMUNIDADDEAPRENDIZAJE);
	document.getElementById("NIVELDEGRADO").addEventListener("keypress",NIVELDEGRADO);
	document.getElementById("DIRECCIONDECORREOELECTRONICO").addEventListener("keypress",DIRECCIONDECORREOELECTRONICO);
	document.getElementById("ENTREGAR").addEventListener("click", ENTREGAR)
}

function NOMBRE(){
	document.getElementById("APELLIDO").disabled= false;
	document.getElementById("SEGUNDONOMBRE").disabled= false;
}

function APELLIDO(){
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").disabled= false;
}

function PEQUENACOMUNIDADDEAPRENDIZAJE(){
	document.getElementById("NIVELDEGRADO").disabled= false;
}

function NIVELDEGRADO(){
	document.getElementById("DIRECCIONDECORREOELECTRONICO").disabled= false;
}

function DIRECCIONDECORREOELECTRONICO(){
	document.getElementById("ENTREGAR").disabled= false;
}

function ENTREGAR(){
	NOMBRE= document.getElementById("NOMBRE").value;
	SEGUNDONOMBRE= document.getElementById("SEGUNDONOMBRE").value;
	APELLIDO= document.getElementById("APELLIDO").value;
	PEQUENACOMUNIDADDEAPRENDIZAJE= document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").value;
	NIVELDEGRADO= document.getElementById("NIVELDEGRADO").value;
	DIRECCIONDECORREOELECTRONICO= document.getElementById("DIRECCIONDECORREOELECTRONICO").value;
	
	document.getElementById("NOMBRE1").textContent= NOMBRE;
	document.getElementById("SEGUNDONOMBRE1").textContent= SEGUNDONOMBRE+".";
	document.getElementById("APELLIDO1").textContent= APELLIDO;
	document.getElementById("NIVELDEGRADO1").textContent= NIVELDEGRADO+"th";
	document.getElementById("DIRECCIONDECORREOELECTRONICO1").textContent= DIRECCIONDECORREOELECTRONICO;
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE1").textContent= PEQUENACOMUNIDADDEAPRENDIZAJE;
}
