$(document).ready(function () {


    // - set variables (nouns) questions, correct answers, incorrect answers, results
    var number = 45;
    var intervalI = 0;
    var interval;

    var correct = 0;
    var wrong = 0;
    var skipped = 0;

    var timeoutvar = setTimeout(timeUp, 1000 * 47);


    $("#result_box").hide();


    // start button on click. When button pressed, button dissappears and reveal timer
    $("#start_btn").click(function () {
        $(".forms").show();
        $("#result_box").hide();
        $("#start_btn").hide();
        interval = setInterval(function () {
            $("#interval_time").text(number - intervalI);
            console.log('The time is: ' + (number - intervalI));
            intervalI++;
            if (intervalI > number) {
                $("#interval_time").hide();
                // alert('Times up!');
                clearInterval(interval);
                interval = null;
            }
        }, 1000)

    });




    $('#done_btn').click(function () {

        clearInterval(interval);
        clearTimeout(timeoutvar);
        $("#interval_time").hide();
        $(".forms").hide();
        $("#result_box").show();

        if (interval < number) {
            $("#timeup").hide();
            clearInterval(interval);
            interval = null;

        }

        checkAnswers();

    });

    function timeUp() {

        $(".forms").hide();
        $("#result_box").show();
        $("#timeup").html("<h5>Time's Up!</h5>");
        console.log("time is up");

        checkAnswers();
        // if done button is pushed, do not show "Time's up"


    }

    function checkAnswers() {
        for (i = 1; i <= 10; i++) {
            var answerVal = $('input[name="question' + i + '"]:checked').val();
            if (answerVal == "a") correct++;
            else if (answerVal == undefined) wrong++;
            else skipped++;
        } // end of for loop

        console.log(correct);
        console.log(wrong);
        console.log(skipped);

        $('#correct_answer').text("Correct: " + " " + correct);
        $('#wrong_answer').text("Incorrect: " + " " + skipped);
        $('#unanswered').text("Unanswered: " + " " + wrong);



    }






}); //document ready//






// ===============================================//



// STILL NEED //



// fix formatting when start button disappears and jumbotron bumps down
// fix delay when start button disappears and timer starts






