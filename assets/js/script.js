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
var hourText = $("#hour-text")

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

// new Event Text p element
var newEventText = document.createElement("p");

// create event function
var createEventHandler = function(){
    newEventText.textContent = "New Text Content";
    eventText.text(newEventText.textContent);
};

saveBtn.on("click", createEventHandler);

// on blur function

    // change to form (this needs to be done with event delegation)
    // get user input and replace text in p tag when user clicks off form
    // function to save to local storage when user clicks save button
    // figure out how to add local storage persistence for each new task
    
// add styling changes if current hour is before, after, or the same as hour in p tag for each block