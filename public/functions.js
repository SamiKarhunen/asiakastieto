function tokaFunktio(){
	$.get('/toka', function(data){
		var tieto = data
		var dropdown = document.getElementById("MyList");
		var x;
		var out = "";
		for ([x] in tieto) {
			out += dropdown[dropdown.length] = new Option(tieto[x].name);
	          }
	});
}


function List() {
	var selectBox = document.getElementById("MyList");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById("namebox").value = selectedValue;
 


   }


