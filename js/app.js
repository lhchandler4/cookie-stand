'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//Here is an array to hold all of the stores
var allStores = [];
//An variable to hold the hour totals
var hourTotal = [];
//Here is to access the table in the DOM
var storeTable = document.getElementById('stores');
//Here is the variable for the form
var storeForm = document.getElementById('store-form');

//A constructor for the store objects
function Store(location, minCustomerPerHour, maxCustomerPerHour, avgSalePerHour){
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgSalePerHour = avgSalePerHour;
  this.custAvg = [];
  this.cookies = [];
  this.totalCookies = 0;
  this.custCalc = function() {
    for (var i = 0; i < hours.length; i++){
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      // console.log(oneHour);
      this.custAvg[i] = oneHour;
    }
  };
  this.cookieCalc = function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      this.cookies[j] = oneHourCookies;}
    // console.log(oneHourCookies);
  };
  this.totalCalc = function() {
    let total = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      // this.totalCookies += this.cookies[k];
      total += this.cookies[k];
    }
    return total;
  };
  allStores.push(this);
}

//Store Instances
new Store('1st and Pike', 23, 64, 6.3);
new Store('SeaTac Airport', 3 , 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

console.table(allStores);


function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].custCalc();
    allStores[i].cookieCalc();
    // allStores[i].totalCalc();
    allStores[i].render();
  }
}

//Building the table
Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.cookies.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookies[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  // tdEl.textContent = this.totalCookies;
  tdEl.textContent = this.totalCalc();
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};


//Making the Headers for the Table
function makeaHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i <= hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

//Making the bottom row of totals
function makeFooterRow() {
  hourTotal = [];
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hour Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var totalPerHour = 0;
    for (var k = 0; k < allStores.length; k++) {
      console.log(allStores[k].cookies[i]);
      console.log('total/hour', totalPerHour);
      //   totalPerHour += allStores[k].cookies[i];
      // }
      totalPerHour = allStores[k].cookies[i] + totalPerHour;
    }
    hourTotal.push(totalPerHour);
    trEl.appendChild(thEl);
  }
  for (var m = 0; m < hours.length; m++) {
    thEl = document.createElement('td');
    thEl.textContent = hourTotal[m];
    console.log('Hour Total',thEl.textContent);
    trEl.appendChild(thEl);
  }
  //Final Total
  var finalTotal = 0;
  for (var n = 0; n < hourTotal.length; n++) {
    finalTotal += hourTotal[n];
    console.log('final total', finalTotal);
  }
  thEl = document.createElement('th');
  thEl.textContent = finalTotal;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

makeaHeaderRow();
renderAllStores();
makeFooterRow();

//Event Handler for new location submissions
function handleNewLocationSubmit(event) {
  console.log('log of event.target.location.value', event.target.location.value);
  event.preventDefault();
  var storeLocation = event.target.location.value;
  var minCustomerPerHour = Number(event.target.minCustomerPerHour.value);
  var maxCustomerPerHour = Number(event.target.maxCustomerPerHour.value);
  var avgSalePerHour = Number(event.target.avgSalePerHour.value);
  new Store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgSalePerHour);
  allStores[allStores.length - 1].custCalc();
  allStores[allStores.length - 1].cookieCalc();
  event.target.location.value = null;
  event.target.minCustomerPerHour.value = null;
  event.target.maxCustomerPerHour.value = null;
  event.target.avgSalePerHour.value = null;
  document.getElementById('stores').innerHTML = '';

  makeaHeaderRow();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  // renderAllStores();
  makeFooterRow();

}

//Event listener for new location submissions
storeForm.addEventListener('submit', handleNewLocationSubmit);


