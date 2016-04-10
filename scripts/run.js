$(document).ready(function() {
	var mapControler = new MapController();
	mapControler.generateForest(10);
	
	var topbar = new TopBar();
	var hero1  = new Hero("Arthur", 700, 550);
	console.debug(hero1);
	
});
