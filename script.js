$(document).ready(function () {

    function getCurrnetDay() {
        $("#currentDay").text(moment().format('LLLL'));
    };

    //This function adds a past, present, or future class to each html input. It determines the class by checking the current time against each time row on the schedule
    function textareaColor() {

        $("textarea").each(function () {

            var hour = moment().hours();
            // console.log(hour)
            var inputId = $(this).attr("id");
            // console.log(inputId);
            var inputId2 = parseInt(inputId);
            console.log(inputId2);

            if (inputId2 < hour) {
                $(this).addClass("past");
            } else if (inputId2 === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }

        });
    };


    // This will save the users input to local storage when save is clicked
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in localStorage
        localStorage.setItem(time, value);
    });

    // load any saved data from localStorage
    $("#6 .description").val(localStorage.getItem("6"));
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    getCurrnetDay();
    textareaColor();
});