//Constructor
function Pizza(size) {
  this.size = (size);
  this.toppings = [];
}

//Prototype for Pricing
Pizza.prototype.pizzaPrice = function() {
  if (this.size === "Small") {
    return (5);
  }
}








$(document).ready(function() {
  // alert("test");
  $("#formOne").submit(function(event) {


    event.preventDefault();
    var inputtedName = $("#yourName").val();
    var size = $("#size").val();

    var pizza = new Pizza(size);


    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = $(this).val();
      console.log(toppings);
      pizza.toppings.push(toppings);
    });
    console.log(pizza.toppings.length);
    for (var index = 0; index < pizza.toppings.length; index += 1) {
      $("#toppingsPizza").append("<li>" + pizza.toppings[index] + "</li>")
    }
    $("#customerName").text(inputtedName);
    $("#pizzaSize").text(size);
    console.log(pizza);

    alert(pizza.pizzaPrice())
  })
})
