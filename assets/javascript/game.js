console.log ("Ready to go!")
//Declaring global variables
var randomNumber;
var losses = 0;
var wins = 0;
var previous = 0;

var startNReset = function (){
    $(".crystals").empty();

    var images = [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aquarius-amethyst-1493935741.jpg?crop=1xw:0.7501875468867217xh;center,top&resize=768:*",
        "http://axl6732pmj11yssb62rgy2mh-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/Blue-Crystals.jpg" ,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jsWIzwDq2kUpN9DnNdRydRH0sgwiiyYCN-qWxifje1xn_GMK" ,
        "http://www.seriouswheels.com/pics-2009/bc/2009-Citroen-Revolte-Concept-Deep-Red-Crystals-1920x1440.jpg" ];


    randomNumber= Math.floor(Math.random() * 101) + 19;

    console.log (randomNumber);
    $("#result").html("Target Number: " + randomNumber);
    
    for (var i=0; i<4; i++){
        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random)

        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random
            
            });
            crystal.css({
                "background-image":"url('" + images [i] + "')", 
                "background-size" : "cover",
            });

            crystal.html(random);

        $(".crystals").append(crystal);

    
    }
}
startNReset ();

$(document).on('click', ".crystal", function() {
   var num = parseInt($(this).attr("data-random"));
   previous += num;
   $("#totalScore").html("Total Score: " +previous);

    if (previous > randomNumber) {
        alert ("You lost!!");
        losses++;
        $("#loss").html("Total Losses: " + losses);
        startNReset ();
        previous = 0;

    }
    else if (previous === randomNumber) {
        alert ("Congrates, you won!!");
        wins ++;
        $("#win").html("Total Wins: " + wins);
        startNReset ();
        previous = 0;
    }

});

//Speudo script:
    //game with 4 crystal and a random result between 19-120

    //every crystal has a random number between 1-12

    //number should be generated every single time we win or lose

    //everytime won new number should be generated to crystal

    //when we click any crystal it should be adding the previous result until it hits the total score

    // if it is greater than randomNumber we start over --- we lost and increment a loss counter

    //if equal to randomNumber we increment a win counter 


