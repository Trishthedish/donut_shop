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



