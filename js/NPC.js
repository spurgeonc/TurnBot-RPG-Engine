var itemPickedUp;
var ballDefeated;
function makeTargets(roomNumber){

    switch(roomNumber){
        case 0:
            ballDefeated = parseInt(sessionStorage.ballDefeated);
            if (ballDefeated != 1){
		        targetsArray[0] = new createjs.Bitmap("images/BallDown1.png");

                targetsArray[0].regX = 32;
                targetsArray[0].regY = 32;

                targetsArray[0].x = stageWidth/3;
                targetsArray[0].y = stageWidth/2;
                targetsArray[0].id = 0;
    		    collisionGnome.addCollider(targetsArray[0], 1); // (sprite, hitBoxRatio)			// $$$$$	
      		        
                myStage.addChild(targetsArray[0]);
            } 
            break; 
        case 1:
            itemPickedUp = parseInt(sessionStorage.itemPickedUp);
            if (itemPickedUp != 1){
                targetsArray[0] = new createjs.Bitmap("images/bomb.png");

                targetsArray[0].regX = 22;
                targetsArray[0].regY = 22;

                targetsArray[0].x = stageWidth - (stageWidth/4);
                targetsArray[0].y = stageWidth - (stageWidth/4);
                targetsArray[0].id = 1;
            }
     	// *** Add collision code to each target ***
    		collisionGnome.addCollider(targetsArray[0], 1); // (sprite, hitBoxRatio)			// $$$$$	
      		        
            myStage.addChild(targetsArray[0]); 
            break; 
        
        default:
            makeTargets(0);
	}	
}// end makeTargets()

function handleDialog(NPC){
    switch(NPC.id){
        case 0:
	    if (dialogOnScreen == false){
    		heroIsFrozen = true;
	    	createjs.Sound.play("explosion");
		    console.log("hello from handleDialog");
    		dialogOnScreen = true;

	    	dialog = new createjs.Text("I am an enemy. Prepare to fight, loser!", "20px Arial", "#ff7700");
		    battleInitiated = true;
	    	dialog.x = 50;
		    dialog.y = 800;
    		myStage.addChild(dialog);
	    }else{
		        removeDialog();
		        if (battleInitiated){
		    	    battleScreen(NPC);
		        }
	    }
        break;
        case 1:
            console.log("hello from handleDialog(1)");
            if (dialogOnScreen == false){
                createDialog("You got the ITEM! \nYour ATK increased!");
                sessionStorage.heroATK = 6;
                sessionStorage.itemPickedUp = 1;
            }else{
                removeDialog();
                NPC.x = 0;
                NPC.y = stageWidth;
                myStage.removeChild(NPC);
                
            }
            break;
        default:
            if (dialogOnScreen == false){
                heroIsFrozen = true;
                createjs.Sound.play("explosion");
                console.log("hello from handleDialog");
                dialogOnScreen = true;
    
                dialog = new createjs.Text("No problem here", "20px Arial", "#ff7700");
                dialog.x = 50;
                dialog.y = 800;
                myStage.addChild(dialog);
            }else{
                    removeDialog();
            }
            break;
    }
}

function removeDialog(){
	dialog.x = 0;
	dialog.y = 0;
	myStage.removeChild(dialog);
	dialogOnScreen = false;
	heroIsFrozen = false;
}

function battleScreen(thingBattled){
	console.log("hello from battleScreen()");
	window.location.assign("battlescreen.html");
}
function createDialog(text){
        heroIsFrozen = true;
        //createjs.Sound.play("explosion");
        //console.log("hello from createDialog");
        dialogOnScreen = true;

        dialog = new createjs.Text(text, "20px Arial", "#ff7700");
        battleInitiated = true;
        dialog.x = 50;
        dialog.y = 800;
        myStage.addChild(dialog);
}