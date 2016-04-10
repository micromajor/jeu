var Tree = Tree || {};

function Tree(min, max) {
	
	this.width = "32";
	this.height = "32";
	
	this.id = Math.floor(Math.random()*(max-min+1)+min)
	this.position = {
		posX : '',
		posY : ''
	};
}