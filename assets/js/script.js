// append current day to p w ID "currentDay"
var currentDate = moment().format('dddd MMMM Do YYYY');
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);

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
];

eventsArray = [

];

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
};

// on click for an empty time block open new text area
// this needs to be updated to prevent little border on left
$(".event-block").on("click", function(){
    var newEvent = $("<textarea>");
    newEvent.addClass("col-12 newTextArea")
    // add new event if p is empty
    if($(this).children("p").text() === ""){
        $(this).children("p").replaceWith(newEvent);
        newEvent.trigger("focus");
        newEventSave();
        // on blur revert back to empty p (separate function)

        // on save update p with new text area input (separate function)
    } else {
        var existingDescription = $(this).children("p").text();
        newEvent.text(existingDescription);
        $(this).children("p").replaceWith(newEvent);
        newEvent.trigger("focus");
    }
});

newEventSave = function(){
    // update p text on save for new event
    $(".saveBtn").on("click", function(){
        var newEventP = document.createElement("p");
        newEventP.addClass = "description event-text";
        var thisDiv = $(this).parent(".row");
        var thisEventBlock = thisDiv.children(".event-block");
        var thisEventTextArea = thisEventBlock.children(".newTextArea");
        var thisEventTextValue = thisEventTextArea.val();
        newEventP.textContent = thisEventTextValue;
        thisEventTextArea.replaceWith(newEventP);
        // add the text to an array and store in local storage
    });
};


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
    