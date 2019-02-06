//import { NgModule } from '@angular/core';

function keyPress (event) {
	key = event.which;
}

function generate () {
		factor0 = Math.floor(Math.random()*10)+1;
		factor1 = Math.floor(Math.random()*10)+1;
		product = factor0 * factor1;

		document.getElementById('factor0').innerHTML = factor0;
		document.getElementById('factor1').innerHTML = factor1;
	}

	function correct() {
		var input = document.getElementById('input').value;
		var alert = document.getElementById("alert");
		
		if (input == product) {
			generate();
			document.getElementById("input").innerHTML = null;
			document.getElementById("alert").innerHTML = null;
		}
		
		else {
			document.getElementById("alert").innerHTML = "Svaret var inkorrekt, är jag rädd. Ge inte upp, försök igen!";
		}
	}

generate();