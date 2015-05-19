var DonutShopSuccess = function(dLocation,dMin,dMax, avgSold) {
  this.dLocation = dLocation;
  this.dMin      = dMin;
  this.dMax      = dMax;
  this.avgSold   = avgSold;
}

DonutShopSuccess.prototype.generateRandom = function(dMin, dMax) {
  return Math.floor(Math.random() * (this.dMax - this.dMin +1)) + this.dMin;
}

DonutShopSuccess.prototype.hourlyDonuts = function() {
  var random = this.generateRandom(this.dMin * this.dMax);
  return this.avgSold * random;
  }
}
downtown = new DonutShopSuccess('downtown', 8, 43, 4.5);
caphill  = new DonutShopSuccess('caphill', 4, 37, 2.0);
southlake   = new DonutShopSuccess('southlake', 9, 23, 6.33);
wedgeWood = new DonutShopSuccess('wedgeWood', 2, 28, 1.25);
ballard   = new DonutShopSuccess('ballard', 8, 58, 3.75);

calculateTablehourlyDonutes = function(dLocation){
  var rowposition = document.getElementsByTagName(dlocation, DonutShopSuccess)
  var totalRead = 0
  for (i = 0; i < arrayLenth; i++) {
    var hourRead = dlocation.calculateTablehourlyDonuts();
    totalRead += hourRead

    var newTable = document.createElement('td');
  newTable.textcontent = hourlyRead;
  rowPosition.appendChild(newTable);
}
    var newTable = document.createElement('td');
  newTable.textcontent = totalRead;
  rowPosition.appendChild(newTable);
}

  calculateTablehourlyDonutes(downtown);
  calculateTablehourlyDonutes(caphill);
  calculateTablehourlyDonutes(southlake);
  calculateTablehourlyDonutes(WedgeWood);
  calculateTablehourlyDonutes(ballard);

// console.log(downtownD.dailyDonuts());
// console.log(caphillD.dailyDonuts());
// console.log(southLD.dailyDonuts());
// console.log(wedgeWood.dailyDonuts());
// console.log(ballard.dailyDonuts());
