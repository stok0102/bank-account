//business logic
function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}
function Transfer(balance){
  if (transferOption === "deposit"){
   balance += transferAmount;
  }
  else if (transferOption === "withdraw"){
    balance -= transferAmount;
  }
  return balance;
}

function resetFields() {
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#new-deposit").val("");
    $("input#new-transfer").val("");
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
    $("#current-balance h3").text("$" + balance + ".00")
    $("#new-form").hide();
    $("#transfer-form").show();
    console.log(newAccount);
  });

  $("#transfer-form form").submit(function(event) {
    event.preventDefault();
    transferAmount = parseInt($("input#transferAmount").val());
    transferOption = $("select#transferOption").val();
    balance = Transfer(balance);
    $("#current-balance h3").text("$" + balance + ".00")
  });
});
