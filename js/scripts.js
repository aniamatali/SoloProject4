$(document).ready(function() {
  // alert("test");
  $("#formOne").submit(function(event) {


    event.preventDefault();
    var inputtedName = $("#yourName").val();
    alert(inputtedName);
  })
})
