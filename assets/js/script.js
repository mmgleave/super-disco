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

// time block color conditions (needs to be fixed for 9AM block)
for(i=0; i<hourArray.length; i++){
    var now = moment().format("HH");

    // replace "time" in display with next hour for each block
    var hourReplace = $("#hourtext-" + [i]);
    hourReplace.text(hourArray[i]);

    // get only hour in military time of [i]
    var hrMomentMil = moment(hourArray[i], "LT").format("HH");
    console.log(hrMomentMil < now);

    // event block of current i
    var eventBlock = ($("#eventblock-" + [i]));

    if(hrMomentMil < now){
        eventBlock.addClass("past")
    } else if(hrMomentMil === now){
        eventBlock.addClass("present")
    } else if(hrMomentMil > now){
        eventBlock.addClass("future")
    } else {

    }
};

// on click for an empty time block open new text area
// this needs to be updated to prevent little border on left
$(".event-block").on("click", function(){
    // variable for new text area element
    var newEvent = $("<textarea>");
    newEvent.addClass("col-12 newTextArea");
    var existingDescription = $(this).children("p").text();
    newEvent.text(existingDescription);
    $(this).children("p").replaceWith(newEvent);
    newEvent.trigger("focus");
    newEventSave();
});

newEventSave = function(){
    // update p text on save for new event or edit
    $(".saveBtn").on("click", function(){
        var newEventP = document.createElement("p");
        newEventP.addClass = "description event-text";
        var thisDiv = $(this).parent(".row");
        var thisEventBlock = thisDiv.children(".event-block");
        var thisEventTextArea = thisEventBlock.children(".newTextArea");
        var thisEventTextValue = thisEventTextArea.val();
        newEventP.textContent = thisEventTextValue;
        thisEventTextArea.replaceWith(newEventP);
        localStorage.setItem(thisEventBlock.attr("id"), thisEventBlock.children("p").text().trim());
    });
};

// replace p tag content with corresponding local storage item
$("#eventblock-0").children("p").text(localStorage.getItem("eventblock-0"));
$("#eventblock-1").children("p").text(localStorage.getItem("eventblock-1"));
$("#eventblock-2").children("p").text(localStorage.getItem("eventblock-2"));
$("#eventblock-3").children("p").text(localStorage.getItem("eventblock-3"));
$("#eventblock-4").children("p").text(localStorage.getItem("eventblock-4"));
$("#eventblock-5").children("p").text(localStorage.getItem("eventblock-5"));
$("#eventblock-6").children("p").text(localStorage.getItem("eventblock-6"));
$("#eventblock-7").children("p").text(localStorage.getItem("eventblock-7"));
$("#eventblock-8").children("p").text(localStorage.getItem("eventblock-8"));