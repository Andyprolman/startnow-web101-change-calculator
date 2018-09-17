

var salePrice = document.getElementById('amount-due').value;
var amountPaid = document.getElementById('amount-received').value;
var change = amountPaid - salePrice

// function to get amount of dollars
function getDollars(){
    var salePrice = document.getElementById('amount-due').value;
    var amountPaid = document.getElementById('amount-received').value;
    var change = amountPaid - salePrice;
    var dollars = Math.floor(change);
    document.getElementById('dollars-output').innerHTML = dollars;
}

// function get amount of quarters
function getQuarters(){
    var salePrice = document.getElementById('amount-due').value;
    var amountPaid = document.getElementById('amount-received').value;
    var change = amountPaid - salePrice;
    var dollars = Math.floor(change);
    var quarters = Math.floor((change - dollars)/.25)
    document.getElementById('quarters-output').innerHTML = quarters;


}

// function to get amount of dimes
function getDimes(){
    var salePrice = document.getElementById('amount-due').value;
    var amountPaid = document.getElementById('amount-received').value;
    var change = amountPaid - salePrice;
    var dollars = Math.floor(change);
    var quarters = Math.floor((change - dollars)/.25);
    var dimes = Math.floor((change-dollars-(quarters*.25))/.10);
    document.getElementById('dimes-output').innerHTML = dimes;

}
// function to get amount of nickels
function getNickels(){
    var salePrice = document.getElementById('amount-due').value;
    var amountPaid = document.getElementById('amount-received').value;
    var change = amountPaid - salePrice;
    var dollars = Math.floor(change);
    var quarters = Math.floor((change - dollars)/.25);
    var dimes = Math.floor((change-dollars-(quarters*.25))/.10);
    var coin = change - dollars;
    var nickels = Math.floor((coin-(quarters*.25)-(dimes*.10))/.05);
    document.getElementById('nickels-output').innerHTML = nickels;

}

function getPennies(){
    var salePrice = document.getElementById('amount-due').value;
    var amountPaid = document.getElementById('amount-received').value;
    var change = amountPaid - salePrice;
    var dollars = Math.floor(change);
    var quarters = Math.floor((change - dollars)/.25);
    var dimes = Math.floor((change-dollars-(quarters*.25))/.10);
    var coin = change - dollars;
    var nickels = Math.floor((coin-(quarters*.25)-(dimes*.10))/.05);
    var pennies = Math.round((coin-(quarters*.25)-(dimes*.10)-(nickels*.05))/.01);
    document.getElementById('pennies-output').innerHTML = pennies;
}

// function to get change amount
function calculateChange(salePrice, amountPaid){
    salePrice = document.getElementById('amount-due').value;
    amountPaid = document.getElementById('amount-received').value;
    change = amountPaid - salePrice;
    document.getElementById('change-amount').innerHTML = `Your change is ${change} dollars!`;
    getDollars();
    getQuarters();
    getDimes();
    getNickels();
    getPennies();
    

}
// calculate button
    document.getElementById('calculate-change').onclick = function(){
        calculateChange();
    }



