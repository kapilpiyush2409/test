$(document).ready(function() {
var inputVal1 = document.getElementById("1").val();
var inputVal2 = document.getElementById("2").val();
var inputVal3 = document.getElementById("3").val();
var markup = "<tr><td>" + inputVal1 + "</td><td>" +
    +inputVal2 + "</td><td>" + inputVal3 + "</td></td> <input type = 'button' value='Delete'>";
$("table tbody").append(markup);
});

});