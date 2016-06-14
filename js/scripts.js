//business logic
function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

function resetFields() {
    $("input").val("");
}
BankAccount.prototype.displayBalance = function()
{ return this.firstName + " " + this.lastName  + " your balance is " + "$"+ this.balance + ".00";}

BankAccount.prototype.Transfer = function (transferAmount, transferOption) {
  if (transferOption === "deposit"){
   newAccount.balance += transferAmount;
  }
  else if (transferOption === "withdraw"){
    newAccount.balance -= transferAmount;
  }
  return newAccount.balance;
}

var newAccount;
var balance;

// user interface logic
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    balance = parseInt($("input#balance").val());
    newAccount = new BankAccount(firstName, lastName, balance);
    $("#current-balance h3").text(newAccount.displayBalance());
    $("#new-form").hide();
    $("#transfer-form").show();
    console.log(newAccount);
  });

  $("#transfer-form form").submit(function(event) {
    event.preventDefault();
    transferAmount = parseInt($("input#transferAmount").val());
    transferOption = $("select#transferOption").val();
    newAccount.balance = newAccount.Transfer(transferAmount, transferOption);
    $("#current-balance h3").text(newAccount.displayBalance());
    resetFields();
    console.log(newAccount.balance);
  });
});
