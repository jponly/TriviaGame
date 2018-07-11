$(document).ready(function () {


    // - set variables (nouns) questions, correct answers, incorrect answers, results
    var number = 10;
    var intervalI = 0;
    var interval;

    var correct = 0;
    var wrong = 0;
    var skipped = 0;

    var timeoutvar = setTimeout(timeUp, 1000 * 12);


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

    function checkAnswers () {
        for(i=1; i<=10; i++) {
            var answerVal = $('input[name="question' + i + '"]:checked').val();
            if(answerVal == "a") correct++;
            else if(answerVal == undefined) wrong++;
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



// STILL NEED
// add value to radio buttons for score
// calculate score and print to html p tags
// if timer is up display "Time's up" in h5 tag, if press done, do not show h5 tag
// fix formatting when start button disappears and jumbotron bumps down
// fix delay when start button disappears and timer starts




// -----------used code that may work later------------------//

// function handleClick() {
//     var amountCorrect = 0;
//     for (var i = 1; i <= 45; i++) {
//         var radios = document.getElementsByName('question' + i);
//         for (var j = 0; j < radios.length; j++) {
//             var radio = radios[j];
//             if (radio === "a" && radio.checked) {
//                 amountCorrect++;
//             }
//         }
//     }

//     alert("Correct Responses: " + amountCorrect);

// }




 //  document.forms['MyForm']
        //  $(".forms").show("a");
        //  $(".forms").hide();
        //  $('input[value=a]').hide();

        //  $( ).css( "color", "green" );
        //  $( 'input[value=a]' ).parent().css( "background-color", "1px solid green" );



         //   var number = 121;

        //  $('.form-group').on("#done_btn", function (event) {
        //     event.preventDefault();
        //     var $answer = $(".answer_box");
        //     var answer = $answer.val("a");
        //     console.log(answer);
        //     if(answer === "a") {
        //         $("#correct_answer"). text("Yes");
        //     } else {
        //         $("#incorrect_answer").text("try again");
        //     }

        // });


         /*
        var methods = document.getElementsByName(name);
        for(var i = 0; i< methods.length; i++){
            if(methods[i].check === answerCorrect) {
                score+1
                console.log('score');
            }
        }
        */






