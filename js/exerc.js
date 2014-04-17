function add() {
	var valor = document.getElementById("frm");
	var dados = "";
	
for(var i=0;i<valor.length;i++)
  {
  	dados = dados + valor.elements[i].value;
  	//document.write(valor.length);
  }
	document.getElementById("log").innerHTML=dados;
}

	
