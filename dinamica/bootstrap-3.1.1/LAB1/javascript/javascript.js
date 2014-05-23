
function inserir()
{
var x = document.getElementById("Aprender");
var option = document.createElement("option");
option.text = $('#nome').val();
x.add(option);
$('#nome').val('');
}

function remover()
{
var x = document.getElementById("Aprender");
var y = document.getElementById("Aprendido");
x.remove(x.selectedIndex);
y.remove(y.selectedIndex);
}

function selectAll(selectBox,selectAll) { 
    // have we been passed an ID 
    if (typeof selectBox == "string") { 
        selectBox = document.getElementById(selectBox);
    } 
    // is the select box a multiple select box? 
    if (selectBox.type == "select-multiple") { 
        for (var i = 0; i < selectBox.options.length; i++) { 
             selectBox.options[i].selected = selectAll; 
        } 
    }
}

function trocaSelect(selectFrom,selectTo,swapAll) {
	if (typeof(selectFrom) == "string") {
		availableitems = document.getElementById(selectFrom);
	}
	if (typeof(selectTo) == "string") {
		selecteditems= document.getElementById(selectTo);
	}
	for (var i = 0; i < availableitems.length; i++) {
		if (availableitems.options[i].selected || swapAll) {  
			selecteditems.options[selecteditems.options.length] = new Option(availableitems.options[i].text);
			selecteditems.options[selecteditems.options.length-1].value = availableitems.options[i].value;
			availableitems.options[i].selected = false;
		  	availableitems.options[i] = null;
			i--;
		}
	}
}
