// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY, h:mm:ss a'));


const currentTime = dayjs(new Date());
var sixAm = document.getElementById("hour-six");

var sevenAm = document.getElementById("hour-7a")
var eightAm = document.getElementById("hour-8a")
var nineAm = document.getElementById("hour-9a")
var temAm = document.getElementById("hour-10a")

if (today <= "24:00:00") {
  sixAm.style.backgroundColor = 'blue';
}

// function backgroundColor(){
//   backgroundColor("blue");

//   if (today.isBetween('5:00:00', dayjs('24:00:00'))) {
//       sixAm.style.backgroundColor = 'blue';
//   } else {
//       sixAm.style.backgroundColor = 'black';
//   }

//   return sixAm;
// }


$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
  var todosList = localStorage.getItem("todosList");
      JSON.parse(localStorage.getItem("todosList"))
      {};

  function loadTodos() {
    for (var todo in todosList) {
      $("." + todo)[0].value = todosList(todo)
    }
  }

  $(".saveBtn").on("click", function (event){
    var todoKey;

    if (event.target.tagName === "I") {
      todoKey = event.target.parentNode.id;
    } else if  (event.target.tagName === "BUTTON") {
      todoKey = event.target.id;
    }

    var text = $("." + todoKey)[0].value;

    todosList[todoKey] = text;

    localStorage.setItem("todosList", JSON.stringify(todosList));
  });

  loadTodos();
  });
  