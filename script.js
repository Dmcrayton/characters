// BUTTON CLICKER//
$("img").hide();
$(".reset").hide();

$("button").click(function(){
var answer1=$(".color").val();
var answer2=$(".star").val();
$("img").hide();
$(".main").hide();

$(".reset").click(function(){
$(".main").show();
});

    // COMPOUNDS STARTS HERE

if(answer1==="blue" && answer2 >50){
  $(".message").text("Your master is Qui Gon Jinn. You will learn how to solve issues using both peaceful and passive agressive methods.");
  $(".port1").show("qui.jpg");
}

else if(answer1==="red" && answer2 >50){
  $(".message").html("Your is Anakin Skywalker. You will learn how to use your emotions to create a powerful impact in society, whether people like that or not.");
  $(".port2").show("ana.jpg");
}

else if(answer1==="blue" && answer2 < 50){
  $(".message").html("Your master is Obi Wan Kenobi. You will learn how to use compassion and mercy with your friends, but you will never show mercy towards your enemies.")
  $(".port3").show("obi.jpg");
}

else if(answer1==="red"&& answer2< 50){
 $(".message").html("You master is Luke Skywalker. You will learn how to use strange and unusual thinking from the norm to solve problems that most people think is dificult.")
$(".port4").show("luk.jpg");
}

else{
$(".message").html("You must make a decision young padawan")
}

});