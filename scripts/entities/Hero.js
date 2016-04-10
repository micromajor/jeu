var Hero = Hero || {};

function Hero(name, x, y) {
	this.name = name;

	this.position = {
		posX : x,
		posY : y
	};
	this.heroController = new HeroController(this);
	this.create();
}

Hero.prototype.moveX = function(){
	$('#' + this.name).css({
		left : this.position.posX + "px",
	});
};

Hero.prototype.moveY = function(){
	$('#' + this.name).css({
		top : this.position.posY + "px"
	});
};

Hero.prototype.create = function() {
	$("#champ").append('<div class="monHero" id="' + this.name +'"></div>');

	$('#' + this.name).css({
		position : "absolute",
		left : this.position.posX + "px",
		top : this.position.posY + "px"
	});

};