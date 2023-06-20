
var buttonColors = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(".btn").click(function(){
    var userChosenColor= $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

$(document).keypress(function(){
    if(!started){
    $("h1").html("Level" + level);
    nextSequence();
    started=true;
    }
});

function nextSequence(){

    userClickedPattern=[];
    
    level++;

    $("h1").html("Level " + level);

    var randomNumber= Math.floor(Math.random()*4);

    var randomChosenColor= buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" +randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(name){
    var sound=new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
  if(userClickedPattern.length==gamePattern.length){
      setTimeout(function(){
          nextSequence();
      },1000);
  }
}
  else{
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");  
      }, 200);
      $("h1").html("Game over, Press any key to  Restart");

      startOver();
  }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}