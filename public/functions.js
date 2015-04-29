var asiakas
function getCustomers(){
	$.get('/toka', function(data){
		tieto = data
		asiakas = data
		var dropdown = document.getElementById("MyList");
		var x;
		var out = "";
		for ([x] in tieto) {
			out += dropdown[dropdown.length] = new Option(tieto[x].name);
	          }
	});
}


function detailedInfo() {
	var selectBox = document.getElementById("MyList");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById("namebox").value = selectedValue;
    document.getElementById("addressbox").value = asiakas[selectBox.selectedIndex -1].address;
    document.getElementById("phonebox").value = asiakas[selectBox.selectedIndex -1].phone;
    document.getElementById("emailbox").value = asiakas[selectBox.selectedIndex -1].email;
    document.getElementById("idbox").value = asiakas[selectBox.selectedIndex -1].idnumber;
   }

function Clear(){
	document.getElementById("customerform").reset();
}
