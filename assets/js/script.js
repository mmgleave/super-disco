// header changes
// append current day to p w ID "currentDay"
var currentDate = moment().format('dddd MMMM Do YYYY');
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);

// add the ability to add a task

// whole container
var allBlocksContainer = $("#all-rows-container");

// row for nine
var rowNine = $("#nine");

function hourCheck(blockHour){

}

hourArray = [
    "09:00 AM", 
    "10:00 AM", 
    "11:00 AM", 
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
]

// time block color conditions (needs to be fixed for 9AM block)
for(i=0; i<hourArray.length; i++){
    var hourReplace = $("#hourtext-" + [i]);
    hourReplace.text(hourArray[i]);

    // get only hour in military time of [i]
    var hrMomentMil = moment(hourArray[i], "LT").format("H");
    console.log(hrMomentMil);

    // event block of currnt i
    var eventBlock = ($("#eventblock-" + [i]));

    // compare hr of i to now
    var now = moment().format("H");
    if (hrMomentMil === now){
        eventBlock.addClass("present");
    } else if(hrMomentMil < now){
        eventBlock.addClass("past");
    } else {
        eventBlock.addClass("future");
    }
}

// on click for an empty time block open new text area
// this needs to be updated to prevent little border on left
$(".event-block").on("click", function(){
    // add new event if p is empty
    if($(this).children("p").text() === ""){
        var newEvent = $("<textarea>");
        newEvent.addClass("col-12 newTextArea")
        $(this).children("p").replaceWith(newEvent);
        newEvent.trigger("focus");
        newEventSave();
        // on blur revert back to empty p (separate function)

        // on save update p with new text area input (separate function)
    } else {
    }
});

newEventSave = function(){
    // update p text on save for new event
    $(".saveBtn").on("click", function(){
        var thisDiv = $(this).parent(".row");
        var thisEventBlock = thisDiv.children(".event-block");
        var thisEventTextArea = thisEventBlock.children(".newTextArea");
        var thisEventTextValue = thisEventTextArea.val();
        var newEventP = document.createElement("p");
        newEventP.textContent = thisEventTextValue;
        newEventP.addClass = "description";
        thisEventTextArea.replaceWith(newEventP);
    });
}

updateEventSave = functio(){
    // update p text on save for existing event
    $(".saveBtn").on("click", function(){
        
    });
}





// // array for all created events
// var eventsArray = [];

// // save event function
// var createEventHandler = function(){
//     console.log($(this).parent());
//     $(this).parent("#eventDiv").append("Hello");
// };

// // function to open event editing if p in event Div is clicked
// eventDiv.on("click", "p", function() {
//     var text = $(this)
//       .text()
//       .trim();
    
//     // new Input element
//     var textInput = $("<textarea>")
//     .addClass("form-control col-10")
//     .val(text);

//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
// });

// // blur event listener

// // save button event listener
// saveBtn.on("click", createEventHandler);


//     // change to form (this needs to be done with event delegation)
//     // get user input and replace text in p tag when user clicks off form
//     // function to save to local storage when user clicks save button
//     // figure out how to add local storage persistence for each new task
    
// // add styling changes if current hour is before, after, or the same as hour in p tag for each block

// // turns hour p text into moment format
// var hourMoment = moment(hourText, "LT").format("H");

// // variable to get the current hour update every minute
// var currentHour = moment().format("H");

// // updates currentHour to new value every 1 minute
// currentHourUpdate = function(){
//     currentHour = moment().format("H");
// }
// setInterval(currentHourUpdate, 60000);
// console.log(hourMoment);
// console.log(currentHour);

// // changes background of time block depending on past current or future
// if(hourMoment === currentHour) {
// }