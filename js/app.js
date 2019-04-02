'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pikeStore = {
  location: '1st and Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 64,
  avgSalePerHour: 6.3,
  custAvg: [],
  cookies: [],
  totalCookies: 0,
  custCalc: function() {
    for (var i = 0; i < hours.length; i++){
      //generate a random val between min and max
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      console.log(oneHour);
      //put this value into the cust array
      this.custAvg[i] = oneHour;
    }
  },
  cookieCalc: function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    for (var k = 0; k < this.cookies.length; k++) {
      this.totalCookies += this.cookies[k];
    }
    console.log(this.totalCookies);
  }
};

pikeStore.custCalc();
pikeStore.cookieCalc();
pikeStore.totalCalc();

var airportStore = {
  location: 'SeaTac Airport',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgSalePerHour: 1.2,
  custAvg: [],
  cookies: [],
  totalCookies: 0,
  custCalc: function() {
    for (var i = 0; i < hours.length; i++){
      //generate a random val between min and max
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      console.log(oneHour);
      //put this value into the cust array
      this.custAvg[i] = oneHour;
    }
  },
  cookieCalc: function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    for (var k = 0; k < this.cookies.length; k++) {
      this.totalCookies += this.cookies[k];
    }
    console.log(this.totalCookies);
  }
};

airportStore.custCalc();
airportStore.cookieCalc();
airportStore.totalCalc();

var centerStore = {
  location: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgSalePerHour: 3.7,
  custAvg: [],
  cookies: [],
  totalCookies: 0,
  custCalc: function() {
    for (var i = 0; i < hours.length; i++){
      //generate a random val between min and max
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      console.log(oneHour);
      //put this value into the cust array
      this.custAvg[i] = oneHour;
    }
  },
  cookieCalc: function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    for (var k = 0; k < this.cookies.length; k++) {
      this.totalCookies += this.cookies[k];
    }
    console.log(this.totalCookies + 'Capitol Hill Total');
  }
};

centerStore.custCalc();
centerStore.cookieCalc();
centerStore.totalCalc();

var hillStore = {
  location: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgSalePerHour: 2.3,
  custAvg: [],
  cookies: [],
  totalCookies: 0,
  custCalc: function() {
    for (var i = 0; i < hours.length; i++){
      //generate a random val between min and max
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      console.log(oneHour);
      //put this value into the cust array
      this.custAvg[i] = oneHour;
    }
  },
  cookieCalc: function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    for (var k = 0; k < this.cookies.length; k++) {
      this.totalCookies += this.cookies[k];
    }
    console.log(this.totalCookies);
  }
};

hillStore.custCalc();
hillStore.cookieCalc();
hillStore.totalCalc();

var alkiStore = {
  location: 'Alki',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgSalePerHour: 4.6,
  custAvg: [],
  cookies: [],
  totalCookies: 0,
  custCalc: function() {
    for (var i = 0; i < hours.length; i++){
      //generate a random val between min and max
      var oneHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
      console.log(oneHour);
      //put this value into the cust array
      this.custAvg[i] = oneHour;
    }
  },
  cookieCalc: function() {
    for (var j = 0; j < this.custAvg.length; j++){
      var oneHourCookies = Math.ceil(this.custAvg[j] * this.avgSalePerHour);
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    for (var k = 0; k < this.cookies.length; k++) {
      this.totalCookies += this.cookies[k];
    }
    console.log(this.totalCookies);
  }
};

alkiStore.custCalc();
alkiStore.cookieCalc();
alkiStore.totalCalc();

var ulEl = document.getElementById('pike');
console.log(ulEl);
for(var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + pikeStore.cookies[i] + ' cookies';
  ulEl.appendChild(liEl);
}

ulEl = document.getElementById('airport');
console.log(ulEl);
for(var j = 0; j < hours.length; j++) {
  liEl = document.createElement('li');
  liEl.textContent = hours[j] + ': ' + airportStore.cookies[j] + ' cookies';
  ulEl.appendChild(liEl);
}

ulEl = document.getElementById('center');
console.log(ulEl);
for(var k = 0; k < hours.length; k++) {
  liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + centerStore.cookies[k] + ' cookies';
  ulEl.appendChild(liEl);
}

ulEl = document.getElementById('hill');
console.log(ulEl);
for(var l = 0; l < hours.length; l++) {
  liEl = document.createElement('li');
  liEl.textContent = hours[l] + ': ' + hillStore.cookies[l] + ' cookies';
  ulEl.appendChild(liEl);
}

ulEl = document.getElementById('alki');
console.log(ulEl);
for(var m = 0; m < hours.length; m++) {
  liEl = document.createElement('li');
  liEl.textContent = hours[m] + ': ' + alkiStore.cookies[m] + ' cookies';
  ulEl.appendChild(liEl);
}

ulEl = document.getElementById('pike');
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + pikeStore.totalCookies;
console.log(ulEl);
ulEl.appendChild(liEl);

ulEl = document.getElementById('airport');
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + airportStore.totalCookies;
console.log(liEl);
ulEl.appendChild(liEl);

ulEl = document.getElementById('center');
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + centerStore.totalCookies;
console.log(liEl);
ulEl.appendChild(liEl);

ulEl = document.getElementById('hill');
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + hillStore.totalCookies;
console.log(liEl);
ulEl.appendChild(liEl);

ulEl = document.getElementById('alki');
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + alkiStore.totalCookies;
console.log(liEl);
ulEl.appendChild(liEl);
