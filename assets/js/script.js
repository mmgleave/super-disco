// header changes
// append current day to p w ID "currentDay"
var currentDate = moment().format('dddd MMMM Do YYYY');
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);

// add the ability to add a task

// variable for whole container
var allBlocksContainer = $("#all-rows-container");

// variable for whole row
var wholeRow = $("#whole-row");

// variable for hour div
var hourDiv = $("#hour-div");

// variable for hour text
var hourText = $("#hour-text").text();

// variable for event div
var eventDiv = $("#event-text-div");

// variable for event text
var eventText = $("#event-text");

// variable for save button div
var saveBtnDiv = $("#save-btn-div");

// variable for save button
var saveBtn = $("#save-btn")

// array for all created events
var eventsArray = [];

// save event function
var createEventHandler = function(){
    console.log($(this).parent());
    $(this).parent("#eventDiv").append("Hello");
};

// function to open event editing if p in event Div is clicked
eventDiv.on("click", "p", function() {
    var text = $(this)
      .text()
      .trim();
    
    // new Input element
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// blur event listener

// save button event listener
saveBtn.on("click", createEventHandler);


    // change to form (this needs to be done with event delegation)
    // get user input and replace text in p tag when user clicks off form
    // function to save to local storage when user clicks save button
    // figure out how to add local storage persistence for each new task
    
// add styling changes if current hour is before, after, or the same as hour in p tag for each block

// turns hour p text into moment format
var hourMoment = moment(hourText, "HH:mm").format("HH:mm");
console.log(hourMoment);
console.log(moment().format("HH:mm"));
if(hourMoment < moment().format("HH:00")){
    console.log(hourMoment + " is in the past");
} else {
    console.log(hourMoment + " is in the future");
}