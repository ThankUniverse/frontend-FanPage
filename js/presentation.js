
//  Right pic move on mouseenter on the left
$("#killingJoke").mouseenter(function(){
    $("#suicideSquad").animate({"top": "-660px"});
});
// reset as default
$("#killingJoke").mouseleave(function(){
	$("#suicideSquad").animate({"top": "0px"});
});

//  left pic move on mouseenter on the right  
$("#suicideSquad").mouseenter(function(){
    $("#killingJoke").animate({"bottom": "-680px"});
});

// reset as default state
$("#suicideSquad").mouseleave(function(){
	$("#killingJoke").animate({"bottom": "10px"});
});

//*ThankUniverse :)
