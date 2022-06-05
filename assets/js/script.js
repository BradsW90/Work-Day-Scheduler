var today = $("#currentDay");
$(today).text(moment().format("dddd, MMMM Do YYYY"));
var currentHour = moment().format("ha");
var container = $(".container");
var discription = $(".discription");
var theDay = moment().format("dddd");

//Handle changing elements classes when behind current time
var pastWork = function (past) {
  for (i = 0; i < $(past).length; i++) {
    $(past[i]).removeClass("present");
    $(past[i]).removeClass("future");
    $(past[i]).addClass("past");
  }
};

//Handle changing elements classes when ahead current time
var futureWork = function (future) {
  for (i = 0; i < $(future).length; i++) {
    $(future[i]).removeClass("past");
    $(future[i]).removeClass("present");
    $(future[i]).addClass("future");
  }
};

//calls and updates entire page
var update = function () {
  var savedArray = JSON.parse(localStorage.getItem(theDay));
  //if called storage doesnt exist clear previous day storage
  if (!savedArray) {
    localStorage.clear();
  }
  //if array returned true set text to elements
  if (savedArray) {
    for (i = 0; i < savedArray.length; i++) {
      $(discription[i]).text(savedArray[i]);
    }
  }
  //current hour in range splits array and updates elements with correct classes
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
      var past = discription.slice(0, 5);
      var present = discription[5];
      var future = discription.slice(6);
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
    //if outside of range puts all elements as past
    default:
      pastWork(discription);
  }
};

//call on page load
update();

//event listener to change div to textarea
$(".container").on("click", ".discription", function () {
  //check to see if clicked element is already textarea and returns if true
  if ($(this).prop("nodeName").trim() === "TEXTAREA") {
    return;
  }

  //gets classes of clicked element
  var classes = $(this).attr("class");
  //grabs any text existing in element
  var currentText = $(this).text().trim();
  //creates textarea element and gives it clicked elements classes and text
  var editText = $("<textarea>").addClass(classes).val(currentText);

  //replace clicked element with new element
  $(this).replaceWith(editText);
  //focuses on textarea for blur event
  editText.trigger("focus");
});

//event listener to change textarea back to div
$(".container").on("blur", ".discription", function () {
  //grabs textarea classes
  classes = $(this).attr("class");
  //grabs textarea text
  var newText = $(this).val().trim();
  //creates div and gives it the classes and text
  var commitText = $("<div>").addClass(classes).text(newText);

  //changes textarea with new div
  $(this).replaceWith(commitText);
});

//event listener for all buttons
$(".saveBtn").on("click", function () {
  //makes array of the clicked buttons siblings
  var sibling = $(this).siblings();

  //checks to see if any text exists in text field if false returns
  if (!$(sibling[1]).text().trim()) {
    return;
  }

  //trys to pull local storage
  var saved = localStorage.getItem(theDay);

  //if pulled local storage was null create prepped array and save text to correct index
  if (!saved) {
    var saveArray = ["", "", "", "", "", "", "", "", ""];
    saveArray[$(this).attr("data-location")] = $(sibling[1]).text().trim();
    localStorage.setItem(theDay, JSON.stringify(saveArray));
    //if local storage returned true grabs localstorage array and saves text to correct index
  } else {
    var savedArray = JSON.parse(localStorage.getItem(theDay));
    savedArray[$(this).attr("data-location")] = $(sibling[1]).text().trim();
    localStorage.setItem(theDay, JSON.stringify(savedArray));
  }
});
