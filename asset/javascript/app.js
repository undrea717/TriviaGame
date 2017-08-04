$(document).ready(function(){

// Global variables
var points = 0;
var total = 8;
var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
var answers = ["b", "c", "a", "b", "c", "a", "c","b" ];
var timer = 90
var timeCount;




$(function() {
    $("#questions").hide();
})

// start button press to begin the questions appear of the screen
$("#start").click(function(){
	$("#questions").show();
	$(".container").hide();
	run();

})

// timer begins, you have 90 seconds to complete the questions
	function run(){
	timeCount = setInterval(decrement, 1000);
	}


//timer runs out o finish button is pressed 
	function decrement(){
		timer -- ;
	$("#time-left").html("<h2> Time Remaining: " + timer + " Seconds</h2>");
	if (timer === 0){
		$("#questions").hide();
    	$(".container").hide();
    	$("#results").html("Time's Up");
    	results();
	}
	}

			
	
// score is taken and results are given
function results(){
	var a = []
	var selector = $("input[name='q1']:checked")
	if(selector.val() == answers[0]){
		points++
	}
	var selector = $("input[name='q2']:checked")
	if(selector.val() == answers[1]){
		points++
	}
	var selector = $("input[name='q3']:checked")
	if(selector.val() == answers[2]){
		points++
	}
	var selector = $("input[name='q4']:checked")
	if(selector.val() == answers[3]){
		points++
	}
	var selector = $("input[name='q5']:checked")
	if(selector.val() == answers[4]){
		points++
	}		
	var selector = $("input[name='q6']:checked")
	if(selector.val() == answers[5]){
		points++
	}
	var selector = $("input[name='q7']:checked")
	if(selector.val() == answers[6]){
		points++
	}
	var selector = $("input[name='q8']:checked")
	if(selector.val() == answers[7]){
		points++
	}

	$("#results").html("Correct Answers " + points);
}
	

$("#finish").click(function(){
	$("#questions").hide();
    $(".container").hide();
    results();
    console.log()
})

})