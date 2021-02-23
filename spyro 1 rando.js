/* This part would set a lower bound to be the actual balloonist
requirements. For sake of balance, I removed it for the meantime.
Feel free to suggest viable solutions.

var balloongems = [0, 1200, 1200, 1200, 6000];
var balloondragons = [10, 10, 10, 50, 50];
var ballooneggs = [0, 0, 5, 5, 5];

*/
var balloongems = [0, 0, 0, 0, 0];
var balloondragons = [0, 0, 0, 0, 0];
var ballooneggs = [0, 0, 0, 0, 0];
var maxgems = [1000, 3000, 5500, 8000, 10500];
var maxdragons = [16, 32, 46, 58, 74];
var maxeggs = [2, 5, 12, 12, 12, 12];
var reqtype = 0;
var amount = 0;
var reqtypefinal = new Array();
var amountfinal = new Array();
function generate() {
	var i = 0;
	do {
		reqtype = Math.random();
		if (reqtype >= 0.8) {
			reqtypefinal[i] = "Gems";
			amountfinal[i] = amountfunc(0, i);
		} else if (reqtype >= 0.6) {
			reqtypefinal[i] = "Dragons";
			amountfinal[i] = amountfunc(1, i);
		} else if (reqtype >= 0.4) {
			reqtypefinal[i] = "Eggs";
			amountfinal[i] = amountfunc(2, i);
		} else if (reqtype >= 0.2) {
			reqtypefinal[i] = "Vortex";
			amountfinal[i] = "";
		} else {
			reqtypefinal[i] = "Boss";
			amountfinal[i] = "";
		}
		i++;
	} while (i < 5);
	document.getElementById("resulttable").innerHTML = "<tr><td>Artisans</td><td>" + amountfinal[0] + " " + reqtypefinal[0] + "</td></tr><tr><td>Peace Keepers</td><td>" + amountfinal[1] + " " + reqtypefinal[1] + "</td></tr><tr><td>Magic Crafters</td><td>" + amountfinal[2] + " " + reqtypefinal[2] + "</td></tr><tr><td>Beast Makers</td><td>" + amountfinal[3] + " " + reqtypefinal[3] + "</td></tr><tr><td>Dream Weavers</td><td>" + amountfinal[4] + " " + reqtypefinal[4] + "</td></tr>"
}
function amountfunc(type, world) {
	if (type == 0) {
		var randominterval = (maxgems[world] - balloongems[world]);
		return Math.floor(Math.random()*randominterval+balloongems[world]);
	}
	if (type == 1) {
		var randominterval = (maxdragons[world] - balloondragons[world]);
		return Math.floor(Math.random()*randominterval+balloondragons[world]);
	}
	if (type == 2) {
		var randominterval = (maxeggs[world] - ballooneggs[world]);
		return Math.floor(Math.random()*randominterval+ballooneggs[world]);
	}
}
