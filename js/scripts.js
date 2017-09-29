//Constructor
function Pizza(size) {
  this.size = (size);
}







$(document).ready(function() {
  // alert("test");
  $("#formOne").submit(function(event) {


    event.preventDefault();
    var inputtedName = $("#yourName").val();
    alert(inputtedName);
    var size = $("#size").val();
    alert(size);
  })
})
