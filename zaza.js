window.addEventListener("load",disable);

function disable(){
	document.getElementById("LASTNAME").disabled= true;
	document.getElementById("MIDDLENAME").disabled= true;
	document.getElementById("ID").disabled= true;
	document.getElementById("SLC").disabled= true;
	document.getElementById("LEVELGRADE").disabled= true;
	document.getElementById("EMAILADDRESS").disabled= true;
	document.getElementById("COURSE1").disabled= true;
	document.getElementById("COURSE2").disabled= true;
	document.getElementById("COURSE3").disabled= true;
	document.getElementById("COURSE4").disabled= true;
	document.getElementById("COURSE5").disabled= true;
	document.getElementById("COURSE6").disabled= true;
	document.getElementById("COURSE7").disabled= true;
	document.getElementById("COURSE8").disabled= true;
	document.getElementById("INPUT").disabled= true;
	document.getElementById("GRADE1").disabled= true;
	document.getElementById("GRADE2").disabled= true;
	document.getElementById("GRADE3").disabled= true;
	document.getElementById("GRADE4").disabled= true;
	document.getElementById("GRADE5").disabled= true;
	document.getElementById("GRADE6").disabled= true;
	document.getElementById("GRADE7").disabled= true;
	document.getElementById("GRADE8").disabled= true;
	document.getElementById("SUBMIT").disabled= true;
	THESTART()
}
function THESTART(){
	document.getElementById("NAME").addEventListener("keypress",NAME);
	document.getElementById("LASTNAME").addEventListener("keypress",LASTNAME);
	document.getElementById("ID").addEventListener("keypress",ID);
	document.getElementById("SLC").addEventListener("click",SLC);
	document.getElementById("LEVELGRADE").addEventListener("click",LEVELGRADE);
	document.getElementById("EMAILADDRESS").addEventListener("keypress",EMAILADDRESS);
	document.getElementById("COURSE1").addEventListener("keypress",COURSE1);
	document.getElementById("COURSE2").addEventListener("keypress",COURSE2);
	document.getElementById("COURSE3").addEventListener("keypress",COURSE3);
	document.getElementById("COURSE4").addEventListener("keypress",COURSE4);
	document.getElementById("COURSE5").addEventListener("keypress",COURSE5);
	document.getElementById("COURSE6").addEventListener("keypress",COURSE6);
	document.getElementById("COURSE7").addEventListener("keypress",COURSE7);
	document.getElementById("COURSE8").addEventListener("keypress",COURSE8);
	document.getElementById("INPUT").addEventListener("click", INPUT);
	document.getElementById("GRADE1").addEventListener("keypress",GRADE1);
	document.getElementById("GRADE2").addEventListener("keypress",GRADE2);
	document.getElementById("GRADE3").addEventListener("keypress",GRADE3);
	document.getElementById("GRADE4").addEventListener("keypress",GRADE4);
	document.getElementById("GRADE5").addEventListener("keypress",GRADE5);
	document.getElementById("GRADE6").addEventListener("keypress",GRADE6);
	document.getElementById("GRADE7").addEventListener("keypress",GRADE7);
	document.getElementById("GRADE8").addEventListener("keypress",GRADE8);
	document.getElementById("SUBMIT").addEventListener("click", SUBMIT);
}

function NAME(){
	document.getElementById("LASTNAME").disabled= false;
	document.getElementById("MIDDLENAME").disabled= false;
}

function LASTNAME(){
	document.getElementById("ID").disabled= false;
}

function ID(){
	document.getElementById("SLC").disabled= false;
}

function SLC(){
	document.getElementById("LEVELGRADE").disabled= false;
}

function LEVELGRADE(){
	document.getElementById("EMAILADDRESS").disabled= false;
}

function EMAILADDRESS(){
	document.getElementById("COURSE1").disabled= false;
}

function COURSE1(){
	document.getElementById("COURSE2").disabled= false;
}

function COURSE2(){
	document.getElementById("COURSE3").disabled= false;
}

function COURSE3(){
	document.getElementById("COURSE4").disabled= false;
}

function COURSE4(){
	document.getElementById("COURSE5").disabled= false;
}

function COURSE5(){
	document.getElementById("COURSE6").disabled= false;
}

function COURSE6(){
	document.getElementById("COURSE7").disabled= false;
}

function COURSE7(){
	document.getElementById("COURSE8").disabled= false;
}

function COURSE8(){
	document.getElementById("INPUT").disabled= false;
}

function INPUT(){
	document.getElementById("GRADE1").disabled= false;
	document.getElementById("CLASS1").textContent= document.getElementById("COURSE1").value;
	document.getElementById("CLASS2").textContent= document.getElementById("COURSE2").value;
	document.getElementById("CLASS3").textContent= document.getElementById("COURSE3").value;
	document.getElementById("CLASS4").textContent= document.getElementById("COURSE4").value;
	document.getElementById("CLASS5").textContent= document.getElementById("COURSE5").value;
	document.getElementById("CLASS6").textContent= document.getElementById("COURSE6").value;
	document.getElementById("CLASS7").textContent= document.getElementById("COURSE7").value;
	document.getElementById("CLASS8").textContent= document.getElementById("COURSE8").value;
}

function GRADE1(){
	document.getElementById("GRADE2").disabled= false;
}

function GRADE2(){
	document.getElementById("GRADE3").disabled= false;
}

function GRADE3(){
	document.getElementById("GRADE4").disabled= false;
}

function GRADE4(){
	document.getElementById("GRADE5").disabled= false;
}

function GRADE5(){
	document.getElementById("GRADE6").disabled= false;
}

function GRADE6(){
	document.getElementById("GRADE7").disabled= false;
}

function GRADE7(){
	document.getElementById("GRADE8").disabled= false;
}

function GRADE8(){
	document.getElementById("SUBMIT").disabled= false;
}
function help(){
	THESTART()
}
function SUBMIT(){
	var grade= document.getElementById("LEVELGRADE").selectedIndex
	
	var slc= document.getElementById("SLC").selectedIndex
	switch(slc){
		case 1: 
			slc="HSSE";
			break;
		case 2:
			slc="Pre-Med";
			break;
		case 3:
			slc="Theatre";
			break;
		case 4:
			slc="Humanities";
			break;
		case 5:
			slc="Law";
			break;
		case 6:
			slc="TOT";
			break;
		case 7:
			slc="Global Citizens";
			break;
		default:
			slc="N/A"
			alert("Not a SLC.")
	}
	
	switch(grade){
		case 1: 
			grade="9";
			break;
		case 2:
			grade="10";
			break;
		case 3:
			grade="11";
			break;
		case 4:
			grade="12";
			break;
		default:
			grade="N/A"
			alert("Not a grade level.");
	}
	
	document.getElementById("NAME1").textContent= document.getElementById("NAME").value;
	document.getElementById("MIDDLENAME1").textContent= document.getElementById("MIDDLENAME").value+".";
	document.getElementById("LASTNAME1").textContent= document.getElementById("LASTNAME").value;
	document.getElementById("ID1").textContent= document.getElementById("ID").value;
	document.getElementById("LEVELGRADE1").textContent= grade;
	document.getElementById("SLC1").textContent= slc;
	document.getElementById("EMAILADDRESS1").textContent= document.getElementById("EMAILADDRESS").value;
	document.getElementById("COURSE11").textContent= document.getElementById("COURSE1").value;
	document.getElementById("COURSE22").textContent= document.getElementById("COURSE2").value;
	document.getElementById("COURSE33").textContent= document.getElementById("COURSE3").value;
	document.getElementById("COURSE44").textContent= document.getElementById("COURSE4").value;
	document.getElementById("COURSE55").textContent= document.getElementById("COURSE5").value;
	document.getElementById("COURSE66").textContent= document.getElementById("COURSE6").value;
	document.getElementById("COURSE77").textContent= document.getElementById("COURSE7").value;
	document.getElementById("COURSE88").textContent= document.getElementById("COURSE8").value;
	
	var st= document.getElementById("GRADE1").value;
	var nd= document.getElementById("GRADE2").value;
	var rd= document.getElementById("GRADE3").value;
	var th4= document.getElementById("GRADE4").value;
	var th5= document.getElementById("GRADE5").value;
	var th6= document.getElementById("GRADE6").value;
	var th7= document.getElementById("GRADE7").value;
	var th8= document.getElementById("GRADE8").value;
	
	document.getElementById("1st").textContent= st;
	document.getElementById("2nd").textContent= nd;
	document.getElementById("3rd").textContent= rd;
	document.getElementById("4th").textContent= th4;
	document.getElementById("5th").textContent= th5;
	document.getElementById("6th").textContent= th6;
	document.getElementById("7th").textContent= th7;
	document.getElementById("8th").textContent= th8;
	
	switch(true){
	    case parseInt(st) >= 97:
	        LETTER = "A+";
	        break;
	    case parseInt(st) >= 93:
	        LETTER = "A";
	        break;
	    case parseInt(st) >= 90:
	        LETTER = "A-";
	        break;
	    case parseInt(st) >= 87:
	        LETTER = "B+";
	        break;
	    case parseInt(st) >= 83:
	        LETTER = "B";
	        break;
	    case parseInt(st) >= 80:
	        LETTER = "B-";
	        break;
	    case parseInt(st) >= 77:
	        LETTER = "C+";
	        break;
	    case parseInt(st) >= 73:
	        LETTER = "C";
	        break;
	    case parseInt(st) >= 70:
	        LETTER = "C-";
	        break;
	    case parseInt(st) >= 67:
	        LETTER = "D+";
	        break;
	    case parseInt(st) >= 65:
	        LETTER = "D";
	        break;
	    default:
	        LETTER = "F";
	}
	document.getElementById("lg1").textContent = LETTER;
	
	switch(true){
		case parseInt(nd) >= 97:
	        LETTER = "A+";
	        break;
	    case parseInt(nd) >= 93:
	        LETTER = "A";
	        break;
	    case parseInt(nd) >= 90:
	        LETTER = "A-";
	        break;
	    case parseInt(nd) >= 87:
	        LETTER = "B+";
	        break;
	    case parseInt(nd) >= 83:
	        LETTER = "B";
	        break;
	    case parseInt(nd) >= 80:
	        LETTER = "B-";
	        break;
	    case parseInt(nd) >= 77:
	        LETTER = "C+";
	        break;
	    case parseInt(nd) >= 73:
	        LETTER = "C";
	        break;
	    case parseInt(nd) >= 70:
	        LETTER = "C-";
	        break;
	    case parseInt(nd) >= 67:
	        LETTER = "D+";
	        break;
	    case parseInt(nd) >= 65:
	        LETTER = "D";
	        break;
	    default:
			LETTER = "F";
	}
	document.getElementById("lg2").textContent = LETTER;
	
	switch(true){
		case parseInt(rd) >= 97:
	        LETTER = "A+";
	        break;
	    case parseInt(rd) >= 93:
	        LETTER = "A";
	        break;
	    case parseInt(rd) >= 90:
	        LETTER = "A-";
	        break;
	    case parseInt(rd) >= 87:
	        LETTER = "B+";
	        break;
	    case parseInt(rd) >= 83:
	        LETTER = "B";
	        break;
	    case parseInt(rd) >= 80:
	        LETTER = "B-";
	        break;
	    case parseInt(rd) >= 77:
	        LETTER = "C+";
	        break;
	    case parseInt(rd) >= 73:
	        LETTER = "C";
	        break;
	    case parseInt(rd) >= 70:
	        LETTER = "C-";
	        break;
	    case parseInt(rd) >= 67:
	        LETTER = "D+";
	        break;
	    case parseInt(rd) >= 65:
	        LETTER = "D";
	        break;
	    default:
	        LETTER = "F";
	}
	document.getElementById("lg3").textContent = LETTER;
	
	switch(true){
		case parseInt(th4) >= 97:
	        LETTER = "A+";
	        break;
	    case parseInt(th4) >= 93:
	        LETTER = "A";
	        break;
	    case parseInt(th4) >= 90:
	        LETTER = "A-";
	        break;
	    case parseInt(th4) >= 87:
	        LETTER = "B+";
	        break;
	    case parseInt(th4) >= 83:
	        LETTER = "B";
	        break;
	    case parseInt(th4) >= 80:
	        LETTER = "B-";
	        break;
	    case parseInt(th4) >= 77:
	        LETTER = "C+";
	        break;
	    case parseInt(th4) >= 73:
	        LETTER = "C";
	        break;
	    case parseInt(th4) >= 70:
	        LETTER = "C-";
	        break;
	    case parseInt(th4) >= 67:
	        LETTER = "D+";
	        break;
	    case parseInt(th4) >= 65:
	        LETTER = "D";
	        break;
	    default:
	        LETTER = "F";
	 }
	 document.getElementById("lg4").textContent = LETTER;
	
	 switch(true){
		 case parseInt(th5) >= 97:
	         LETTER = "A+";
	         break;
	     case parseInt(th5) >= 93:
	        LETTER = "A";
	        break;
	     case parseInt(th5) >= 90:
	         LETTER = "A-";
	         break;
	     case parseInt(th5) >= 87:
	         LETTER = "B+";
	         break;
	     case parseInt(th5) >= 83:
	         LETTER = "B";
	         break;
	     case parseInt(th5) >= 80:
	         LETTER = "B-";
	         break;
	     case parseInt(th5) >= 77:
	         LETTER = "C+";
	         break;
	     case parseInt(th5) >= 73:
	         LETTER = "C";
	         break;
	     case parseInt(th5) >= 70:
	         LETTER = "C-";
	         break;
	     case parseInt(th5) >= 67:
	         LETTER = "D+";
	         break;
	     case parseInt(th5) >= 65:
	         LETTER = "D";
	         break;
	     default:
	         LETTER = "F";
	 }
	 document.getElementById("lg5").textContent = LETTER;
	
	 switch (true) {
	     case parseInt(th6) >= 97:
	         LETTER = "A+";
	         break;
	     case parseInt(th6) >= 93:
	         LETTER = "A";
	         break;
	     case parseInt(th6) >= 90:
	         LETTER = "A-";
	         break;
	     case parseInt(th6) >= 87:
	         LETTER = "B+";
	         break;
	     case parseInt(th6) >= 83:
	         LETTER = "B";
	         break;
	     case parseInt(th6) >= 80:
	         LETTER = "B-";
	         break;
	     case parseInt(th6) >= 77:
	         LETTER = "C+";
	         break;
	     case parseInt(th6) >= 73:
	         LETTER = "C";
	         break;
	     case parseInt(th6) >= 70:
	         LETTER = "C-";
	         break;
	     case parseInt(th6) >= 67:
	         LETTER = "D+";
	         break;
	     case parseInt(th6) >= 65:
	         LETTER = "D";
	         break;
	     default:
	         LETTER = "F";
	 }
	 document.getElementById("lg6").textContent = LETTER;
	
	 switch (true) {
	     case parseInt(th7) >= 97:
	         LETTER = "A+";
	         break;
	     case parseInt(th7) >= 93:
	         LETTER = "A";
	         break;
	     case parseInt(th7) >= 90:
	         LETTER = "A-";
	         break;
	     case parseInt(th7) >= 87:
	         LETTER = "B+";
	         break;
	     case parseInt(th7) >= 83:
	         LETTER = "B";
	         break;
	     case parseInt(th7) >= 80:
	         LETTER = "B-";
	         break;
	     case parseInt(th7) >= 77:
	         LETTER = "C+";
	         break;
	     case parseInt(th7) >= 73:
	         LETTER = "C";
	         break;
	     case parseInt(th7) >= 70:
	         LETTER = "C-";
	         break;
	     case parseInt(th7) >= 67:
	         LETTER = "D+";
	         break;
	     case parseInt(th7) >= 65:
	         LETTER = "D";
	         break;
	     default:
	         LETTER = "F";
	 }
	 document.getElementById("lg7").textContent = LETTER;
	
	 switch (true) {
	     case parseInt(th8) >= 97:
	         LETTER = "A+";
	         break;
	     case parseInt(th8) >= 93:
	         LETTER = "A";
	         break;
	     case parseInt(th8) >= 90:
	         LETTER = "A-";
	         break;
	     case parseInt(th8) >= 87:
	         LETTER = "B+";
	         break;
	     case parseInt(th8) >= 83:
	         LETTER = "B";
	         break;
	     case parseInt(th8) >= 80:
	         LETTER = "B-";
	         break;
	     case parseInt(th8) >= 77:
	         LETTER = "C+";
	         break;
	     case parseInt(th8) >= 73:
	         LETTER = "C";
	         break;
	     case parseInt(th8) >= 70:
	         LETTER = "C-";
	         break;
	     case parseInt(th8) >= 67:
	         LETTER = "D+";
	         break;
	     case parseInt(th8) >= 65:
	         LETTER = "D";
	         break;
	     default:
	         LETTER = "F";
	 }
	 document.getElementById("lg8").textContent = LETTER;
	
	var GPA1=st/100*4;
	var GPA2=nd/100*4;
	var GPA3=rd/100*4;
	var GPA4=th4/100*4;
	var GPA5=th5/100*4;
	var GPA6=th6/100*4;
	var GPA7=th7/100*4;
	var GPA8=th8/100*4;
	
	THEFINALE=(GPA1+GPA2+GPA3+GPA4+GPA5+GPA6+GPA7+GPA8)/8;
	document.getElementById("GPA").textContent= THEFINALE;
}
