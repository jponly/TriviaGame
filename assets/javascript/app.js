$(document).ready(function () {


    // - set variables (nouns) questions, correct answers, incorrect answers, results
    var answerCorrect = "a";
    var answerIncorrect = ["b", "c", "d"];
    var number = 20;
    var intervalI = 0;
    var interval;

    setTimeout(timeUp, 1000 * 22);



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
        $("#interval_time").hide();
        $(".forms").hide();
        

        $("#result_box").show();
       



    });

    function timeUp() {

        $(".forms").hide();
        $("#result_box").show();
        $("#result_box").append("<h2>Time's Up!</h2>");
        console.log("time is up");
        

    }

   


}); //document ready//


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






