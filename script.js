$(document).ready(function () {

    function getCurrnetDay() {
        $("#currentDay").text(moment().format('LLLL'));
    };

    var hour = moment().hours();

    //This function adds a past, present, or future class to each html input. It determines the class by checking the current time against each time row on the schedule
    function inputColor() {

        $("input").each(function () {
            // console.log(hour)
            var inputId = $(this).attr("id");
            // console.log(inputId);
            var inputId2 = parseInt(inputId);
            // console.log(inputId2);

            if (inputId2 < hour) {
                $(this).addClass("past");
            } else if (inputId2 === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }

        });
    };


    // This will save the users input to local storage when they click the save button (when I get it working)
    //try
    $(".saveBtn").click(function(){

        var text = $(this).siblings().val();
        var time = $(this).attr("id");
        var time2 = parseInt(time);

        console.log(time2);
        console.log(text);
        
        localStorage.setItem(time2, text);

    });      

    // // This will get the saved inputs from the local storage if the user closes out of the schedule and pulls it back up (when I get it working)
    function getSavedInputs() {
    
        $(".event").each(function() {

        var savedInputs = $(this).attr("id");
        $(this).val(localStorage.getItem(savedInputs));

    });
    
    };
   
    getCurrnetDay();
    inputColor();
    getSavedInputs();
});