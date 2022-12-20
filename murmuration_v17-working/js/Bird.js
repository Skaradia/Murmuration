//bird picture
var birdPic = document.createElement("img");
birdPic.src = "images/black_bird.png";

const collisionDistance = 10;



class bird{
    
    constructor() {
        
        this.speed = STARTING_BIRD_SPEED;
        
        this.x = 0;
        this.y = 0;
    }// end of constructor

    reset() { 
        this.x = Math.floor(Math.random() * (canvas.width-EDGE_DISTANCE) + EDGE_DISTANCE);
        this.y = Math.floor(Math.random() *  (canvas.height-EDGE_DISTANCE) + EDGE_DISTANCE);
        this.ang = Math.random() * 2*Math.PI;

    }// end of reset

    move(){
        this.lastX = this.x;
        this.lastY = this.y;

        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;


        if(this.x < 0) { // left of screen
            console.log('noooooooo');
            this.x += canvas.width;
        }
        if(this.x > canvas.width){// right of screen
            this.x -= canvas.width;
            console.log('noooooooo');
        }	

        if(this.y < 0) {// top of screen
            this.y += canvas.height;
            console.log('noooooooo');
        }
        if(this.y > canvas.height){ // bottom of screen
            this.y -= canvas.height;
            console.log('noooooooo');
        }

    }// end of move

    birdCoordinates() {
        this.coordinates = [this.x,this.y];
        return(this.coordinates);
    }

    birdAngle() {
        return(this.ang);
    }

    changeAngleOfBird(changeAngle){
        this.ang += changeAngle;

    }
    getBirdSpeed(){
        return(this.speed);
    }
    changeBirdSpeed(speedChange){
        this.speed += speedChange
    }

    birdSpeedChange(speedChange){
        this.speed += speedChange;
    }
    
    getNextBirdPosition(){
        this.nextX = this.x + (Math.cos(this.ang) * this.speed);
        this.nextY = this.y + (Math.sin(this.ang) * this.speed);
        return([this.nextX,this.nextY]);
    }

    draw(){
        drawBitmapCentredWithRotation(birdPic, this.x,this.y, this.ang)//+Math.PI/2); //draw bird
    }
}//end of bird class