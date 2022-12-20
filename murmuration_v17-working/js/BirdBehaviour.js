//BIRD BEHAVIOUR

const ALLIGNMENT_ANGLE_CHANGE = 0.05;
const SEPERATION_ANGLE_CHANGE = 0.3;
const COHESION_ANGLE_CHANGE = 0.01;

const COLLISION_ANGLE_CHANGE = 0.2;

//ALLIGNMENT FUNCTION

function allignment(object1Num, object2Num){

    object1Angle = birdNames[object1Num].birdAngle();
    object2Angle = birdNames[object2Num].birdAngle();
    
    objectAngleMidpoint = (object1Angle + object2Angle)/2;

    //BIRD 1 ALIGNMENT
    if ((object1Angle - objectAngleMidpoint) < 0) {
        object1AngleChange = ALLIGNMENT_ANGLE_CHANGE;
    }else{
        object1AngleChange = -ALLIGNMENT_ANGLE_CHANGE;
    }

    //BIRD 1 ALIGNMENT
    if ((object2Angle - objectAngleMidpoint) < 0) {
        object2AngleChange = ALLIGNMENT_ANGLE_CHANGE;
    }else{
        object2AngleChange = -ALLIGNMENT_ANGLE_CHANGE;
    }

    if (object1Angle != object2Angle) { //change ObjectAngle
        birdNames[object1Num].changeAngleOfBird(object1AngleChange)
        birdNames[object2Num].changeAngleOfBird(object2AngleChange)
    }
}

//SEPERATION FUNCTION

function seperation(bird1Num, bird2Num){

    let bird1Coordinates = getCoordinateOfObject(bird1Num);
    let bird2Coordinates = getCoordinateOfObject(bird2Num);

    steerBird(bird2Coordinates, bird1Num, SEPERATION);
    steerBird(bird1Coordinates, bird2Num, SEPERATION);

}

//COHESION FUNCTION

function cohesion(validBirdsList){

    averageCoordinates = getAverageCoordinatesFromObjectList(validBirdsList);

    for(z=0;z<validBirdsList.length;z++){
        birdNumber = validBirdsList[z];
        birdCoordinates = getCoordinateOfObject(birdNumber);
        birdAngle = birdNames[birdNumber].birdAngle();
        
        steerBird(averageCoordinates, birdNumber, COHESION);

    }
}