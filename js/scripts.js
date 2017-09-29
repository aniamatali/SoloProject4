//Constructor
function Pizza(size) {
  this.size = (size);
  this.toppings = [];
}

//Prototype for Pricing
Pizza.prototype.pizzaPrice = function() {

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

    $("#customerName").text(inputtedName);
    $("#pizzaSize").text(size);

  })
})
