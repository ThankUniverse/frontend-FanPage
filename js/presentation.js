 $("#killingJokeTxt").ready(function(){
 	$(".killingJokeTxt").fadeOut();
 	$(".suicideSquadTxt").fadeOut();
});
//  Right pic move on mouseenter on the left
$("#killingJoke").mouseenter(function(){
    $("#suicideSquad").animate({"top": "-660px"});
    $(".killingJokeTxt").fadeIn(2000);
 	$(".suicideSquadTxt").fadeOut();

});
// reset as default
$("#killingJoke").mouseleave(function(){
	$("#suicideSquad").animate({"top": "0px"});
 	$(".killingJokeTxt").fadeOut();

});

//  left pic move on mouseenter on the right  
$("#suicideSquad").mouseenter(function(){
    $("#killingJoke").animate({"bottom": "-680px"});
    $(".suicideSquadTxt").fadeIn(2000);
 	$(".killingJokeTxt").fadeOut();


});

// reset as default state
$("#suicideSquad").mouseleave(function(){
	$("#killingJoke").animate({"bottom": "10px"});
 	$(".suicideSquadTxt").fadeOut();
});


//*ThankUniverse :)
