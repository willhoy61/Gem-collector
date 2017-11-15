// generate random number for 4 crystals
var numToGet = 0;
var blueGem = 0;
var greenGem = 0;
var purpleGem = 0
var redGem = 0;
var win = 0;
var lose = 0;
var currScore =0;

numToGet = Math.floor((Math.random() * 100) + 1);
		console.log(numToGet);

		blueGem = Math.floor((Math.random() *10) + 1);

		greenGem = Math.floor((Math.random() *10) + 1);

		purpleGem = Math.floor((Math.random() *10) + 1);

		redGem = Math.floor((Math.random() *10) + 1);
	if(blueGem && greenGem && purpleGem && redGem === numToGet)
	{
	$("#winLossButton").html("you Win");
	win++;
	$("#wins").append(win++);
	}
	if(blueGem && greenGem && purpleGem && redGem > numToGet)
	{
		$("winLossButton").html("You lose");
		lose++;
		$("#losses").append(lose++);
	}
	reset();

function reset()
{
	
	$("#scoreCount, #blue, #greeen, #purple, #red").empty();	
}

$(document).ready(function()
{
	$("#scoreCount").on("click", function()
	{
		 
	 $("#scoreCount").html(numToGet);

	});
	
	
	$("#blue").on("click", function()
	{
	
	
	if (blueGem <= numToGet)
	{
		blueGem += blueGem;
	}
	$("#currScore").html(blueGem);
	reset();
	});
	$("#green").on("click", function()
	{
	
	if(greenGem <= numToGet)
	{
		greenGem += greenGem;
	}
	$("#currScore").val(greenGem);
	console.log(greenGem);
	return greenGem;
	});
	$("#purple").on("click", function(){
	
	if(purpleGem <= numToGet)
	{
		purpleGem += purpleGem;
	}
	$("#currScore").val(purpleGem);
	console.log(purpleGem);
	return purpleGem;
	});
	$("#currScore").on("click", function(){
	
	if(redGem <= numToGet)
	{
		redGem =+ redGem;
	}
	$("#green").val(redGem);
	console.log(redGem);
	return redGem;
	});

 	
});
// display users current score
// alert user if they win
// track wins and losses
