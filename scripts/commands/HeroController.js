var HeroController = HeroController || {};

var HeroController = function(hero) {
	this.hero = hero;
	this.moveStep = 5;
	
	$(document).on("keypress", function(e){
			if (String.fromCharCode(e.which) == "d"
			 && this.checkIfMoveOK(this.moveStep, "H") == true){
				this.setHeroPositionX(this.moveStep);
				this.hero.moveX();
			}
			
			if (String.fromCharCode(e.which) == "s"
			 && this.checkIfMoveOK(this.moveStep, "V") == true){
				this.setHeroPositionY(this.moveStep);
				this.hero.moveY();
			}
			
			if (String.fromCharCode(e.which) == "q"
			 && this.checkIfMoveOK(-this.moveStep, "H") == true){
				this.setHeroPositionX(-this.moveStep);
				this.hero.moveX();
			}
			
			if (String.fromCharCode(e.which) == "z"
			 && this.checkIfMoveOK(-this.moveStep, "V") == true){
				this.setHeroPositionY(-this.moveStep);
				this.hero.moveY();
			}
			
			console.debug(this.getHeroPosition());
	}.bind(this));
	
};


HeroController.prototype.getHeroPosition = function() {
	return this.hero.position;
};

HeroController.prototype.setHeroPositionX = function(x) {
	this.hero.position.posX = this.hero.position.posX + x;
};

HeroController.prototype.setHeroPositionY = function(y) {
	this.hero.position.posY = this.hero.position.posY + y;
};

HeroController.prototype.checkIfMoveOK = function(value, axe){
	if (axe == "H"){
		if (this.hero.position.posX + value < 0
		 || this.hero.position.posX + + $('.monHero').width() + value > $('#champ').width()){
			return false;
		}
	}
	
	if (axe == "V"){
		if (this.hero.position.posY + value < 0
		 || this.hero.position.posY + $('.monHero').height() + value > $('#champ').height()){
			 return false;
		}
	}
	
	return true;
};
