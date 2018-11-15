"use strict";
/*eslint-env browser*/






// Create a function named incomeCalc().

function incomeCalc( ) {
    
// Primary spending
    
var rent = parseFloat(document.getElementById("rent").value);
    
var insurance = parseFloat(document.getElementById("insure").value);
    
var transport = parseFloat(document.getElementById("trans").value);
    
var repair = parseFloat(document.getElementById("repair").value);
    
var coms = parseFloat(document.getElementById("coms").value);
    
var utility = parseFloat(document.getElementById("utility").value);
    
var food = parseFloat(document.getElementById("food").value);

var weekly = parseFloat(document.getElementById("weekly").value);
    
// add up all the above except for weekly into the "subTotal" variable.
    
var subTotal = (rent + insurance + transport + repair + coms + utility + food);

    

// savings section
    
var savingsHolder = document.getElementById("risk");
    
var savings = parseFloat(savingsHolder.value) * subTotal;
    
var retireHolder = document.getElementById("retire");
    
var retire = parseFloat(retireHolder.value) * subTotal;
    
var profit = subTotal * 0.10;
    
// add savings, retire and profit to subTotal and make into variable "total".
    
var total = subTotal + savings + retire + profit;
    

    

    
return document.getElementById("answer").innerHTML = "You need a minimum of " + "&dollar;" + (subTotal * 12).toLocaleString('en', {minimumFractionDigits: 2}) + " anually or " + "&dollar;" + (subTotal/4/weekly).toFixed(2) + " per hour to pay your bills." + "<br><br>" + "You need " + "&dollar;" + (total * 12).toLocaleString('en', {minimumFractionDigits: 2}) + " anually or " + "&dollar;" + (total/4/weekly).toFixed(2) + " per hour to pay bills, have emergency money, save for retirement and have spending money.";
    

    
    
}