var DonutShop = function(dLocation,dMin,dMax, avgSold) {
	this.dLocation = dLocation;
	this.dMin      = dMin;
	this.dMax      = dMax;
	this.avgSold   = avgSold;
};

DonutShop.prototype.generateRandom = function(dMin, dMax) {
	return Math.floor(Math.random() * (this.dMax - this.dMin +1)) + this.dMin;
};

DonutShop.prototype.hourlyDonuts = function() {
	var random = this.generateRandom(this.dMin * this.dMax);
	return this.avgSold * random;
};

var allDonutShops = [];
allDonutShops.push(new DonutShop('downtown', 8, 43, 4.5));
allDonutShops.push(new DonutShop('caphill', 4, 37, 2.0));
allDonutShops.push(new DonutShop('southlake', 9, 23, 6.33));
allDonutShops.push(new DonutShop('wedgeWood', 2, 28, 1.25));
allDonutShops.push(new DonutShop('ballard', 8, 58, 3.75));

var tbl = document.getElementById('tbl');

//makes this program scalable, you wont have to change it to accomodate changes in the array (in this case: shops)//
var idx = 0;
var tData;
while(idx < allDonutShops.length) {
	var tRow = document.createElement('tr');
	var tData = document.createElement('td');
	tData.innerHTML = allDonutShops[idx].dLocation;
	tRow.appendChild(tData);
	console.log(allDonutShops[idx].dLocation);
	var hours = 13;
	var count = 0;
	var sumTotal = 0;
	while(count < hours + 1){
		var tData = document.createElement('td');
		var x = allDonutShops[idx].hourlyDonuts();
		x = Math.floor(x);
		tData.innerHTML = x;
		tRow.appendChild(tData);
		sumTotal = sumTotal + x;  //in future use +=s
		count ++;
	}
	console.log(sumTotal);
	sumTotal= Math.floor(sumTotal);
	tData.innerHTML = sumTotal;
	tRow.appendChild(tData);
	tbl.appendChild(tRow);
	idx ++;
}

//began writing new code//
// Creates a new DonutShop object with the user
// supplied data from the input tags.

function AddStore(name, open, close)
  this.name = name;
  this.open = open;
  this.close = close;
}

AddStore.Potlocation_input.prototype.addNewLocation= function(dLocation,dMin,dMax,avgSold, this.open, this.close) {
  this[dLocation.toLowerCase()] = new Shop(dLocation,dMin, dMax, avgSold, this.open, this.close);
}

//class name? calls for all add stores to objects and writes to table. Do I need to make "write all shops to write all donut Shops"
AddStore.class_name.prototype.writeAllShops = function(tbl) {
  for (i in this) {
    if (this[i] instanceof Shop) {
      this[i].writeToTable(tbl);
    }
  }

}
AddStore.prototype.writeAllShops= function() {
  var main, newSection,locationTable, tRow, tData, newTh, newText,newForm, locationInput, minCustInput, maxCustInput, avgPurchInput, newButton;
  main = document.querySelector("main");

  newSection = document.createElement("section");
  newSection.id = this.name + "tbl";

  locationTable = document.createElement("tbl");
  locationTable.id = this.name;

  newH2 = document.createElement("h2");
  newText = document.createTextNode(this.name);
  newH2 = appendChild(newText);
  newSection.appendChild(newText);

  tRow = document.createElement("th");
  newText = document.createTextNode("location");
  newTh.appendChild(newText);
  tRow.appendChild(newTh);

  for (var = 0; i < this.close - this.open; i ++) {

    newTH = document.createElement("th");

    if (this.open + i < 12 ) {
      newText = document.createTextNode((this.open + i) + ":00 am");
    }
    else if (this.open + i === 12) {
      newText = document.createTextNode((this.open + i - 12) ":00 pm");
    }

    newTh.appendChild(newText);
    tRow.appendChild(newTh);
  }

  newTh = document.createElement("th");
  newText = document.createElement("total");
  newTh.appendChild(newText);
  tRow.appendChild(newTh);

  locationTable.appendChild(tRow);
  newSection.appendChild(locationTable);

  newForm = document.createElement("form");
  locationInput = document.createElement("input");
  locationInput.id = this.name + "location_input";
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("placeholder","Location");
  newForm.appendChild(locationInput);

  minCustInput = document.createElement("input")
  minCustInput.id = this.name + "min_cust_input";
  minCustInput.setAttribute("type","number");
  minCustInput.setAttribute("placeholder","Min Custom / Hour")

  maxCustInput = document.createElement("input");
  maxCustInput.id = this.name + "max_cust_input";
  maxCustInput.setAttribute("type","number");
  maxCustInput.setAttribute("placeholder", "Max Custom / Hour");

  avgPurchInput = document.createElement("input");
  avgPurchInput.id = this.name + "avg_purch_input";
  avgPurchInput.setAttribute("type", "number");
  avgPurchInput.setAttribute("placeholder", "Avg Purch / Custom");
  newForm.appendChild(avgPurchInput);

  newButtom = document.createElment("button");
  newButtom.id = this.name + "button";

  newText = document.createTextNode(this.name + "Shop");
  newButton.appendChild(newText);
  newForm.appendChild(newButton);

  newSection.appendChild(newForm);
  main.appendChild(newSection);

}

// time to add event listener?


