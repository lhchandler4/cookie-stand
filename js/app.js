'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pikeStore = {
  location: '1st and Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 64,
  avgSalePerHour: 6.3,
  custAvg: [],
  cookies: [],
  totalCookies: [],
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
    var sum = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      sum += this.cookies[k];
    }
    console.log(sum);
  }
};

pikeStore.custCalc();

var airportStore = {
  location: 'SeaTac Airport',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgSalePerHour: 1.2,
  custAvg: [],
  cookies: [],
  totalCookies: [],
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
      var oneHourCookies = this.custAvg[j] * this.avgSalePerHour;
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    var sum = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      sum += this.cookies[k];
    }
    console.log(sum);
  }
};

var centerStore = {
  location: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgSalePerHour: 3.7,
  custAvg: [],
  cookies: [],
  totalCookies: [],
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
      var oneHourCookies = this.custAvg[j] * this.avgSalePerHour;
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    var sum = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      sum += this.cookies[k];
    }
    console.log(sum);
  }
};

var hillStore = {
  location: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgSalePerHour: 2.3,
  custAvg: [],
  cookies: [],
  totalCookies: [],
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
      var oneHourCookies = this.custAvg[j] * this.avgSalePerHour;
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    var sum = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      sum += this.cookies[k];
    }
    console.log(sum);
  }
};

var alkiStore = {
  location: 'Alki',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgSalePerHour: 4.6,
  custAvg: [],
  cookies: [],
  totalCookies: [],
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
      var oneHourCookies = this.custAvg[j] * this.avgSalePerHour;
      console.log(oneHourCookies);
      this.cookies[j] = oneHourCookies;
    }
  },
  totalCalc: function() {
    var sum = 0;
    for (var k = 0; k < this.cookies.length; k++) {
      sum += this.cookies[k];
    }
    console.log(sum);
  }
};

var ulEl = document.getElementById('pike');
console.log(ulEl);
for(var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i];
  ulEl.appendChild(liEl);
}
