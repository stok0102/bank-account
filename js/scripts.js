//business logic
function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}


function resetFields() {
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#new-deposit").val("");
    $("input#new-transfer").val("");
}



// user interface logic
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var balance = parseInt($("input#balance").val());
    var newAccount = new BankAccount(firstName, lastName, balance);
    debugger;
    console.log(newAccount);
  });


  $("form#transfer").submit(function(event) {
    event.preventDefault();
    console.log($("form input:radio").val());
  });
});
