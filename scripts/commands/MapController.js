var MapController = MapController || {};

function MapController(){}

MapController.prototype.generateForest = function(interval){
	setInterval(function(){
		var tree = new Tree(0, 100000000);
		tree.position.posX = randomNumberFromRange(0, $("#champ").width() - tree.width);
		tree.position.posY = randomNumberFromRange(0, $("#champ").height() - tree.height);
		$("#champ").append('<div class="tree" id="' + tree.id + '"></div>');

		$('#' + tree.id).css({
			position : "absolute",
			left : tree.position.posX + "px",
			top : tree.position.posY + "px"
		});
	}.bind(this),
	interval * 1000);
	
};






function randomNumberFromRange(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}