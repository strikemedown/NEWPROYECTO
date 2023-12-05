window.addEventListener("load",THESTART);

function THESTART(){
	document.getElementById("APELLIDO").disabled= true;
	document.getElementById("SEGUNDONOMBRE").disabled= true;
	document.getElementById("NUMERODEOSIS").disabled= true;
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").disabled= true;
	document.getElementById("NIVELDEGRADO").disabled= true;
	document.getElementById("DIRECCIONDECORREOELECTRONICO").disabled= true;
	document.getElementById("ENTREGAR").disabled= true;
	document.getElementById("CURSO1").disabled= true;
	document.getElementById("CURSO2").disabled= true;
	document.getElementById("CURSO3").disabled= true;
	document.getElementById("CURSO4").disabled= true;
	document.getElementById("CURSO5").disabled= true;
	document.getElementById("CURSO6").disabled= true;
	document.getElementById("CURSO7").disabled= true;
	document.getElementById("CURSO8").disabled= true;
	document.getElementById("ENTREGAR2").disabled= true;
	document.getElementById("NOMBRE").addEventListener("keypress",NOMBRE);
	document.getElementById("APELLIDO").addEventListener("keypress",APELLIDO);
	document.getElementById("NUMERODEOSIS").addEventListener("keypress",NUMERODEOSIS);
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").addEventListener("keypress",PEQUENACOMUNIDADDEAPRENDIZAJE);
	document.getElementById("NIVELDEGRADO").addEventListener("keypress",NIVELDEGRADO);
	document.getElementById("DIRECCIONDECORREOELECTRONICO").addEventListener("keypress",DIRECCIONDECORREOELECTRONICO);
	document.getElementById("ENTREGAR").addEventListener("click", ENTREGAR)
	document.getElementById("CURSO1").addEventListener("keypress",CURSO1);
	document.getElementById("CURSO2").addEventListener("keypress",CURSO2);
	document.getElementById("CURSO3").addEventListener("keypress",CURSO3);
	document.getElementById("CURSO4").addEventListener("keypress",CURSO4);
	document.getElementById("CURSO5").addEventListener("keypress",CURSO5);
	document.getElementById("CURSO6").addEventListener("keypress",CURSO6);
	document.getElementById("CURSO7").addEventListener("keypress",CURSO7);
	document.getElementById("CURSO8").addEventListener("keypress",CURSO8);
	document.getElementById("ENTREGAR2").addEventListener("click",ENTREGAR2);
}

function NOMBRE(){
	document.getElementById("APELLIDO").disabled= false;
	document.getElementById("SEGUNDONOMBRE").disabled= false;
}

function APELLIDO(){
	document.getElementById("NUMERODEOSIS").disabled= false;
}

function NUMERODEOSIS(){
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
	document.getElementById("CURSO1").disabled= false;
	NOMBRE= document.getElementById("NOMBRE").value;
	SEGUNDONOMBRE= document.getElementById("SEGUNDONOMBRE").value;
	APELLIDO= document.getElementById("APELLIDO").value;
	NUMERODEOSIS= document.getElementById("NUMERODEOSIS").value;
	PEQUENACOMUNIDADDEAPRENDIZAJE= document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE").value;
	NIVELDEGRADO= document.getElementById("NIVELDEGRADO").value;
	DIRECCIONDECORREOELECTRONICO= document.getElementById("DIRECCIONDECORREOELECTRONICO").value;
	
	document.getElementById("NOMBRE1").textContent= NOMBRE;
	document.getElementById("SEGUNDONOMBRE1").textContent= SEGUNDONOMBRE+".";
	document.getElementById("APELLIDO1").textContent= APELLIDO;
	document.getElementById("NUMERODEOSIS1").textContent= NUMERODEOSIS;
	document.getElementById("NIVELDEGRADO1").textContent= NIVELDEGRADO;
	document.getElementById("DIRECCIONDECORREOELECTRONICO1").textContent= DIRECCIONDECORREOELECTRONICO;
	document.getElementById("PEQUENACOMUNIDADDEAPRENDIZAJE1").textContent= PEQUENACOMUNIDADDEAPRENDIZAJE;
}

function CURSO1(){
	document.getElementById("CURSO2").disabled= false;
}

function CURSO2(){
	document.getElementById("CURSO3").disabled= false;
}

function CURSO3(){
	document.getElementById("CURSO4").disabled= false;
}

function CURSO4(){
	document.getElementById("CURSO5").disabled= false;
}

function CURSO5(){
	document.getElementById("CURSO6").disabled= false;
}

function CURSO6(){
	document.getElementById("CURSO7").disabled= false;
}

function CURSO7(){
	document.getElementById("CURSO8").disabled= false;
}

function CURSO8(){
	document.getElementById("ENTREGAR2").disabled= false;
}

function ENTREGAR2(){
	CURSO1= document.getElementById("CURSO1").value;
	CURSO2= document.getElementById("CURSO2").value;
	CURSO3= document.getElementById("CURSO3").value;
	CURSO4= document.getElementById("CURSO4").value;
	CURSO5= document.getElementById("CURSO5").value;
	CURSO6= document.getElementById("CURSO6").value;
	CURSO7= document.getElementById("CURSO7").value;
	CURSO8= document.getElementById("CURSO8").value;
	
	document.getElementById("CURSO11").textContent= CURSO1;
	document.getElementById("CURSO22").textContent= CURSO2;
	document.getElementById("CURSO33").textContent= CURSO3;
	document.getElementById("CURSO44").textContent= CURSO4;
	document.getElementById("CURSO55").textContent= CURSO5;
	document.getElementById("CURSO66").textContent= CURSO6;
	document.getElementById("CURSO77").textContent= CURSO7;
	document.getElementById("CURSO88").textContent= CURSO8;
}
