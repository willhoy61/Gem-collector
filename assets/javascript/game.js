// generate random number for 4 crystals
let numToGet;
var blueGem;
var greenGem;
var purpleGem;
var redGem;



$(document).ready(function()
{
	$("#scoreCount").on("click", function()
	{
		let numToGet = Math.floor((Math.random() * 100) + 1);
		console.log(numToGet);
	 $("#scoreCount").html(numToGet);
	});
	
	
$("#blue").on("click", function()
	{
	blueGem = Math.floor((Math.random() *10) + 1);
	console.log(blueGem);
	$("#blue").html(blueGem);
	});
$("#green").on("click", function(){
	greenGem = Math.floor((Math.random() *10) + 1);
	console.log(greenGem);
	$("#green").html(greenGem);
});
$("#purple").on("click", function(){
	purpleGem = Math.floor((Math.random() *10) + 1);
	console.log(purpleGem);
	$("#purple").html(purpleGem);
});
$("#red").on("click", function(){
	redGem = Math.floor((Math.random() *10) + 1);
	console.log(redGem);
	$("#green").html(redGem);
});
 	


	



});
// display users current score
// alert user if they win
// track wins and losses
