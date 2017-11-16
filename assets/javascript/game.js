// variables to hold values of gems, wins and losses
var numToGet = 0;
var win = 0;
var lose = 0;
var currScore =0;
var blueGem ;
var greenGem;
var purpleGem;
var redGem;

//generate random numbers for score needed to reach
	numToGet = Math.floor((Math.random() * 102) + 19);
		console.log(numToGet);
	// generate random numbers for values of gems
	blueGem = Math.floor((Math.random() *10) + 1);

	greenGem = Math.floor((Math.random() *10) + 1);

	purpleGem = Math.floor((Math.random() *10) + 1);

	redGem = Math.floor((Math.random() *10) + 1);

	// if values of gems match number needed to get you win
	


var blueBase = blueGem;
var greenBase = greenGem;
var purpleBase = purpleGem;
var redBase = redGem;
$(document).ready(function()
{
	$("#scoreCount").on("click", function()
	{
		 $("#scoreCount").html(numToGet);

	});
	
	
	$("#blue").on("click", function(){
		currScore = blueGem + currScore;
		$("#currScore").html(currScore);
		checkScore();
	});
	$("#green").on("click", function(){
		currScore = greenGem + currScore;
		$("#currScore").html(currScore);
		checkScore();
	});

	$("#purple").on("click", function(){
		currScore = purpleGem + currScore;
		$("#currScore").html(currScore);
		checkScore();
	});

	$("#red").on("click", function(){
		currScore = purpleGem + currScore;
		$("#currScore").html(currScore);
		checkScore();
	});
});
// validates win or lose 
function checkScore(){
	if(blueGem && greenGem && purpleGem && redGem === numToGet)
	{
		win++;
	$("#winLossButton").html("you Win");
	$("#wins").append(win);
	reset();
	numToGet = Math.floor((Math.random() * 102) + 19);
	}
	// if value of gems goes over value needed you lose
	if(blueGem && greenGem && purpleGem && redGem > numToGet)
	{
		lose++;
		$("winLossButton").html("You lose");
		$("#losses").append(lose);
		reset();
		numToGet = Math.floor((Math.random() * 102) + 19);
	}

//function clears all numbers when game is won or lost
}
function reset()
{
	
	$("#scoreCount, #blue, #greeen, #purple, #red, #currScore").empty();
	scoreCount = 0;
	blueGem = 0;
	greenGem = 0;
	purpleGem = 0;
	redGem = 0;
	currScore = 0;
}
// display users current score
// alert user if they win
// track wins and losses
