var today = document.getElementById("currentDay");
today.innerText = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("ha");
var container = document.querySelector(".container");

$(".discription").click(function () {
  var currentText = $(this).text().trim();
  var editText = $("<textarea>")
    .addClass("discription col-xl-10")
    .val(currentText);
  $(this).replaceWith(editText);
  editText.trigger("focus");
});

$(".discription").blur(function () {
  console.log("replace function ran!");
  var newText = $(this).val().trim();
  var commitText = $("<div>")
    .addClass("discription col-xl-10 past")
    .text(newText);

  $(this).replaceWith(commitText);
});

console.log($(".discription"));
