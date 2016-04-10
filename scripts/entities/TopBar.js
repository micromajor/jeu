var TopBar = TopBar || {};

function TopBar(){
	this.time = 0;
	this.displayTimeOfGame(this.time);
	this.countTimeOfGame(this.displayTimeOfGame);
	
}


TopBar.prototype.countTimeOfGame = function(callback){
	setInterval(function(){
		this.time += 1;
		callback(this.time);
	}.bind(this),
	1000);
};

TopBar.prototype.displayTimeOfGame = function(time){
	$("#topbar #timeGame").html(time);
}.bind(this);