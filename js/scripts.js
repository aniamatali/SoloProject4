//BACKEND
//Constructor
function Pizza(size) {
  this.size = (size);
  this.toppings = [];
}

//Prototype for Pricing
Pizza.prototype.pizzaPrice = function() {
  if (this.size === "Small") {
    return (this.toppings.length + 5);
  } else if (this.size === "Medium") {
    return (this.toppings.length + 10);
  } else if (this.size === "Large") {
    return (this.toppings.length + 15);
  }
}

//FRONTEND
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#yourName").val();
    var size = $("#size").val();

    var pizza = new Pizza(size);

    //Pushes the value of all input checked to the empty array
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = $(this).val();
      pizza.toppings.push(toppings);
    });

    $("#toppingsPizza").empty();
    //Appends the array one by one
    for (var index = 0; index < pizza.toppings.length; index += 1) {
      $("#toppingsPizza").append("<li>" + pizza.toppings[index] + "</li>")
    }
    $("#customerName").text(inputtedName);
    $("#pizzaSize").text(size);

    //Applies the prototype function to the pizza object to calculate the price
    $("#pizzaPrice").text("$ " + pizza.pizzaPrice());

    $("#reset").click(function() {
     location.reload();
   })

  });


})
