// generate random number for 4 crystals
var numToGet = 0;
var blueGem = 0;
var greenGem = 0;
var purpleGem = 0
var redGem = 0;
var win = 0;
var lose = 0;
var currScore =0;

function reset()
{
	
	$("scoreCount, #blue, #greeen, #purple, #red").empty();	
}

$(document).ready(function()
{
	$("#scoreCount").on("click", function()
	{
		 numToGet = Math.floor((Math.random() * 100) + 1);
		console.log(numToGet);
	 $("#scoreCount").html(numToGet);

	});
	
	
$("#blue").on("click", function()
	{
	blueGem = Math.floor((Math.random() *10) + 1);
	
	if (blueGem <= numToGet)
	{
		blueGem += blueGem;
	}
	$("#blue").val(blueGem);
	console.log(blueGem);
	reset();
	});
$("#green").on("click", function()
{
	greenGem = Math.floor((Math.random() *10) + 1);
	if(greenGem <= numToGet)
	{
		greenGem += greenGem;
	}
	$("#green").val(greenGem);
	console.log(greenGem);
	return greenGem;
});
$("#purple").on("click", function(){
	purpleGem = Math.floor((Math.random() *10) + 1);
	if(purpleGem <= numToGet)
	{
		purpleGem += purpleGem;
	}
	$("#purple").val(purpleGem);
	console.log(purpleGem);
	return purpleGem;
});
$("#red").on("click", function(){
	redGem = Math.floor((Math.random() *10) + 1);
	if(redGem <= numToGet)
	{
		redGem =+ redGem;
	}
	$("#green").val(redGem);
	console.log(redGem);
	return redGem;
});
if(blueGem && greenGem && purpleGem && redGem === numToGet)
	{
		$("#winLossButton").html("you Win");
		win++;
		$("#wins").html(win++);
	}
		if(blueGem && greenGem && purpleGem && redGem > numToGet)
		{
			$("winLossButton").html("You lose");
			lose++;
			$("#losses").html(lose++);
		}
reset();
 	


	



});
// display users current score
// alert user if they win
// track wins and losses
