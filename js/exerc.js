function add() {
	//var  	
 var tempo = document.getElementById('tempo');
 var tipo  = document.getElementById('tipo');
 var data  = document.getElementById('data');
 	
 	//try catch
 	try {
    localStorage.setItem('tempo', tempo.value);
    localStorage.setItem('tipo', tipo.value);
    localStorage.setItem('data', data.value);    
    
    document.getElementById('mytempo').value = localStorage.getItem('tempo');
    document.getElementById('mytipo').value  = localStorage.getItem('tipo');
    document.getElementById('mydata').value = localStorage.getItem('data');    
}
catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
        console.log("Error: Local Storage limit exceeds.");
    }
    else {
        console.log("Error: Saving to local storage.");
    }
  }
}

function saveComplexData() {
    console.log("Saving complex data to local storage.");
    var tempo = document.getElementById('tempo');
	var tipo  = document.getElementById('tipo');
	var data  = document.getElementById('data');
	
	var personObject = new Object();
    personObject.tempo = tempo.value;
    personObject.tipo = tipo.value;
    personObject.data = data.value;
    localStorage.setItem("person", JSON.stringify(personObject));

    console.log("Restoring complex data from local storage.");
    
    var personObject = JSON.parse(localStorage.getItem("person"));
    tempo.value = personObject.tempo;
    tipo.value = personObject.tipo;
    data.value = personObject.data;
}


//remove local storage key
function rm() {
	console.log('Remove key of local Storage.');
	localStorage.removeItem('tempo');
	localStorage.removeItem('tipo');
	localStorage.removeItem('data');
}

//clearing local storage
function limpar() {
	console.log('clearing localStorage.');
	localStorage.clear();
}

//checkout if exists 
function load(){
	console.log("Page loading finished.");
	if (typeof localStorage != "undefined") 
		{console.log("Your browser support web storage.");
		} else{
			console.log("Your browser not support web storage.");
		}
}
