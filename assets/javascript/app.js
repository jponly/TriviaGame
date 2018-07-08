$(document).ready(function () {
    

    // - set variables (nouns) questions, correct answers, incorrect answers, results
    var answerCorrect = true;
    var answerIncorrect = false;
 //   var number = 121;
    var number = 10; 
    var intervalI = 0;
    var interval;

    

    // start button on click. When button pressed, button dissappears and reveal timer
    $("#start_btn").click(function () {
        $(".forms").show();
        $("#start_btn").hide();
        interval = setInterval(function() { 
            $("#interval_time").text(number - intervalI);
            console.log('The time is: ' + (number - intervalI));
            intervalI++;
            if (intervalI > number) {
                alert('Times up!');
                clearInterval(interval);
                interval = null;
            }
        }, 1000)
        
    });

// "Done" button will stop timer and reveal correct/incorrect answers or reveal box model with results in percentage(if possible)

    $('#done_btn').click(function() {
//        document.forms['MyForm']
        //   $(".forms").show("a");
        // $('input[value=a]').hide();
        //  $( ).css( "color", "green" );
        $( 'input[value=a]' ).parent().css( "background-color", "1px solid green" );
           
    })


    

    

}); //document ready//