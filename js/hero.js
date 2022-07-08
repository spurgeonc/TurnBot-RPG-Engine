

var invDuration = 50;	

var bulletsArray = [ ];
bulletsArray[0] = new createjs.Bitmap("images/bomb.png");
var numBullets = 0;
var bulletClock;
var bulletCooldown = 10;

function makeHero(){																		// $$$$$
	hero = new createjs.Bitmap("images/RobotRightStand.png");
	if(heroStartPositionX === undefined){ hero.x = stageWidth/2; } else { hero.x = heroStartPositionX; }
	if(heroStartPositionY === undefined){ hero.y = stageHeight/2; } else { hero.y = heroStartPositionY; }
	myStage.addChild(hero);
	hero.regX = 20;
	hero.regY = 70;
	hero.speedX = heroStartSpeedX;
	hero.speedY = heroStartSpeedY;
	hero.HP = 20;
    hero.ATK = 1;
	hero.facing = "right";
	hero.checkBuffer = hero.regY * 2;
	// *** Add collision detection to hero ***
	collisionGnome.addCollider(hero, 1); // (sprite, hitBoxRatio)							// $$$$$
	heroExists = true;
}		

function moveHero(){  // formerly known as 'handleKeyboardInput'
	if (!heroIsFrozen){
		if(keyMonkey["w"] || keyMonkey["up"]) 	{hero.y -= hero.speedY; hero.facing = "up";}
		else if(keyMonkey["s"] || keyMonkey["down"]) {hero.y += hero.speedY; hero.facing = "down";}
		else if(keyMonkey["d"] || keyMonkey["right"]) {hero.x += hero.speedX; hero.facing = "right";}
		else if(keyMonkey["a"] || keyMonkey["left"]) {hero.x -= hero.speedX; hero.facing = "left";}
	}
	if(keyMonkey["o"]) {makeBullet();}
}// end moveHero()

function checkBoundaryHero(){
	//Basically:
	// if (out of bounds) {
	//	  put back in bounds
	// }

	if(hero.x > stageWidth - hero.regX) {
		hero.x = stageWidth - hero.regX;
	}// end if
	if(hero.x < 0 + hero.regX) {
		hero.x = 0 + hero.regX;
	}// end if
	if(hero.y > stageHeight - hero.regY) {
		hero.y = stageHeight - hero.regY;
	}// end if
	if(hero.y < 0 + hero.regY) {
		hero.y = 0 + hero.regY;
	}// end if	

}// end heroBoundaryCheck()

function handleCollision(thingCollidedWith){														
	// ASSUMES THING IS SOLID - May chnange this later on
	
	// If thing is hazardous:
	/*
	if(gameClock > invDuration){
		heroHP--;
		createjs.Sound.play("explosion");
		gameClock = 0;
		console.log('You just took damage!');
	}
	*/

	// if (thing collided with is in X direction && hero is facing that direction) {move the opposite way}
	if(thingCollidedWith.y > hero.y && hero.facing == "down") 	{hero.y -= hero.speedY;}
	if(thingCollidedWith.y < hero.y && hero.facing == "up") 	{hero.y += hero.speedY;}
	if(thingCollidedWith.x > hero.x && hero.facing == "right") 	{hero.x -= hero.speedX;}
	if(thingCollidedWith.x < hero.x && hero.facing == "left") 	{hero.x += hero.speedX;}
} // end checkGameOver()

function makeBullet(){
	if (bulletClock > bulletCooldown){
		bulletsArray[numBullets] = new createjs.Bitmap("images/bomb.png");
		bulletsArray[numBullets].facing = hero.facing;
		bulletsArray[numBullets].speed = heroStartSpeedX * 2;
		bulletsArray[numBullets].regX = 22;
		bulletsArray[numBullets].regY = 22;
		bulletsArray[numBullets].x = hero.x;
		bulletsArray[numBullets].y = hero.y;

		if (hero.facing == "down"){bulletsArray[numBullets].y += hero.regY;}
		if (hero.facing == "up"){bulletsArray[numBullets].y -= hero.regY;}
		if (hero.facing == "right"){bulletsArray[numBullets].x += hero.regX;}
		if (hero.facing == "left"){bulletsArray[numBullets].x -= hero.regX;}

		collisionGnome.addCollider(bulletsArray[numBullets], 1);
		myStage.addChild(bulletsArray[numBullets]);
		createjs.Sound.play("fire");
		numBullets++;
		bulletClock = 0;
	}
}