var today = $("#currentDay");
$(today).text(moment().format("dddd, MMMM Do YYYY"));
var currentHour = moment().format("ha");
var container = $(".container");
var discription = $(".discription");

var pastWork = function (past) {
  for (i = 0; i < $(past).length; i++) {
    $(past[i]).removeClass("present");
    $(past[i]).removeClass("future");
    $(past[i]).addClass("past");
  }
};

var futureWork = function (future) {
  for (i = 0; i < $(future).length; i++) {
    $(future[i]).removeClass("past");
    $(future[i]).removeClass("present");
    $(future[i]).addClass("future");
  }
};

var update = function () {
  switch (currentHour) {
    case "9am":
      var future = discription.slice(1);
      var present = discription[0];
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      futureWork(future);
      break;
    case "10am":
      var future = discription.slice(2);
      var present = discription[1];
      var past = discription.slice(0, 1);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "11am":
      var future = discription.slice(3);
      var present = discription[2];
      var past = discription.slice(0, 2);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "12pm":
      var future = discription.slice(4);
      var present = discription[3];
      var past = discription.slice(0, 3);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "1pm":
      var future = discription.slice(5);
      var present = discription[4];
      var past = discription.slice(0, 4);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "2pm":
      var future = discription.slice(0, 5);
      var present = discription[5];
      var past = discription.slice(6);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "3pm":
      var past = discription.slice(0, 6);
      var present = discription[6];
      var future = discription.slice(7);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "4pm":
      var past = discription.slice(0, 1);
      var present = discription[7];
      var future = discription.slice(8);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      futureWork(future);
      break;
    case "5pm":
      var present = discription[8];
      var past = discription.slice(0, 7);
      $(present).removeClass("past");
      $(present).removeClass("future");
      $(present).addClass("present");
      pastWork(past);
      break;
    default:
      pastWork(discription);
  }
};

update();

$(".container").on("click", ".discription", function () {
  var classes = $(this).attr("class");
  var currentText = $(this).text().trim();
  var editText = $("<textarea>").addClass(classes).val(currentText);

  $(this).replaceWith(editText);
  editText.trigger("focus");
});

$(".container").on("blur", ".discription", function () {
  classes = $(this).attr("class");
  var newText = $(this).val().trim();
  var commitText = $("<div>").addClass(classes).text(newText);
  $(this).replaceWith(commitText);
});
