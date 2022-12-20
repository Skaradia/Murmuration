var canvas, canvasContext;


const NUMBER_OF_BIRDS = 20;

const STARTING_BIRD_SPEED = 6;

const SEPERATION_DISTANCE = 40;
const BIRD_SIGHT_DISTANCE = 100;

const BACKGROUND_COLOUR = 'slateGray';
const EDGE_DISTANCE = 100;


const COHESION = 0;
const SEPERATION = 1;

var mouseX = 0;
var mouseY = 0;

var birdNames = [];

while (birdNames.length<NUMBER_OF_BIRDS) { //make bird names
	const birds = new bird();
	birdNames.push(birds);
}

window.onload = function(){	
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvas.addEventListener('mousemove', updateMousePos);

	//const centre = [canvas.width/2,canvas.height/2];

	for (let i=0;i<birdNames.length;i++) {// reset all birds
		birdNames[i].reset();
	}
	
	var framesPerSecond = 20;
	setInterval(updateAll, 1000/framesPerSecond);
}
function updateMousePos(evt) {
    
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    
    mouseX = evt.clientX - rect.left-root.scrollLeft;
    mouseY = evt.clientY - rect.left-root.scrollTop;
    
} // end of mouse controls
function updateAll(){
	drawEverything();
	birdBehaviour();

	for (let i=0;i<birdNames.length;i++) { // draw and move all birds
		birdNames[i].move();
		birdNames[i].draw();
	}


}

function drawEverything() {	
	colourRect(0,0,canvas.width,canvas.height,BACKGROUND_COLOUR);//Backgroundcanvas.height-EDGE_DISTANCE

}

function birdBehaviour() {
	for(i=0;i<birdNames.length;i++){	
		
		var validBirds = [i];
		if(steerBirdFromWall(i)==false){
			for (j=0;j<birdNames.length;j++) {
			
				const DISTANCE_BETWEEN_BIRDS = distBetweenObjects(i,j);
				var lineColour;
	
				if(i!=j) {
					if (DISTANCE_BETWEEN_BIRDS <= BIRD_SIGHT_DISTANCE) {
					
						if(DISTANCE_BETWEEN_BIRDS <= SEPERATION_DISTANCE){//bird is too close
							seperation(i,j);
							lineColour = 'yellow';
						}else if(DISTANCE_BETWEEN_BIRDS > SEPERATION_DISTANCE){
	
							allignment(i,j);
							validBirds.push(j);
							lineColour = 'red';
						}
						//drawLineBetweenObjects(i, j,lineColour);
					}
				}
			}
			if(validBirds.length>1){
				cohesion(validBirds);
			}
		}
		
		

		
	}
}


function steerBirdFromWall(birdNumber){
	
	let birdCoordinate = birdNames[birdNumber].birdCoordinates();

	if(birdCoordinate[0] <= 0+EDGE_DISTANCE) { // left of screen
		//console.log('bird is too left')
		steerBird([0+1, birdCoordinate[1]+1], birdNumber, SEPERATION);
	}
	else if(birdCoordinate[0] >= canvas.width-EDGE_DISTANCE){// right of screen
		//console.log('bird is too right')
		steerBird([canvas.width, birdCoordinate[1]], birdNumber, SEPERATION);
	}	

	else if(birdCoordinate[1] <= 0+EDGE_DISTANCE) {// top of screen
		//console.log('bird is too top');
		steerBird([birdCoordinate[0], 0], birdNumber, SEPERATION);

	}
	else if(birdCoordinate[1] >= canvas.height-EDGE_DISTANCE){ // bottom of screen
		//console.log('bird is too bottom');
		steerBird([birdCoordinate[0],canvas.height], birdNumber, SEPERATION);
	}
	else{
		return(false);
	}
}