
const CHANGE_VALUE = 0.1;


function cosineRuleAngle(a,b,c) {
    a2 = Math.pow(a,2)
    b2 = Math.pow(b,2)
    c2 = Math.pow(c,2)

    numerator = a2-b2-c2;
    denominator = -2*b*c;

    angleA = Math.acos(numerator/denominator);

    return(angleA)
}

function distanceBetweenCoordinates(coordinate1, coordinate2){
	distBetweenPoints(coordinate1[0],coordinate1[1], coordinate2[0],coordinate2[1])
}

function distBetweenPoints(x1,y1, x2,y2) {// use pythagoras to find distance
	deltaX = x1-x2;
	deltaY = y1-y2;

	distance = Math.sqrt( Math.pow(deltaX, 2)+Math.pow(deltaY, 2) );// pythagoras

	return(Math.abs(distance));
}


const SPEED = 1;
const cohesionAngleChange = 1;


function steerBirdToPoint(birdCoordinates, averageCoordinates, birdAngle){

    // sets a constant point above average point in order to create a triangle to do cosine rule to find angle
    pointAboveAverageCoordinateX = averageCoordinates[0];
    pointAboveAverageCoordinateY = (averageCoordinates[1])+1;
    

    
    nextBirdPositionX =  birdCoordinates[0] + (Math.cos(birdAngle) * SPEED); 
    nextBirdPositionY = birdCoordinates[1] + (Math.sin(birdAngle) * SPEED);    

    //find lengths of triangle from bird to average coordinate to point above average coordinate
    distanceAboveAverageCoordiateToBird = distBetweenPoints(pointAboveAverageCoordinateX,pointAboveAverageCoordinateY, birdCoordinates[0],birdCoordinates[1]);//a for current bird pos
    distanceBirdToAverageCoordiate = distBetweenPoints(birdCoordinates[0],birdCoordinates[1], averageCoordinates[0],averageCoordinates[1]);//b for current bird pos
    
    distanceAverageCoordiateToAboveAverageCoordiate = distBetweenPoints(averageCoordinates[0],averageCoordinates[1], pointAboveAverageCoordinateX,pointAboveAverageCoordinateY);//c for both

    
    //find angle between bird and vertical
    angleForCurrentBird = cosineRuleAngle(distanceAboveAverageCoordiateToBird, distanceBirdToAverageCoordiate, distanceAverageCoordiateToAboveAverageCoordiate);

    //find lengths of triangle from next bird to average coordinate to point above average coordinate
    distanceAboveAverageCoordiateToNextBird = distBetweenPoints(pointAboveAverageCoordinateX,pointAboveAverageCoordinateY, nextBirdPositionX, nextBirdPositionY);//a for next bird pos
    distanceNextBirdToAverageCoordiate = distBetweenPoints(nextBirdPositionX,nextBirdPositionY, averageCoordinates[0], averageCoordinates[1]);//b for next bird pos

    //find angle between next bird and vertical
    angleForNextBird = cosineRuleAngle(distanceAboveAverageCoordiateToNextBird, distanceNextBirdToAverageCoordiate, distanceAverageCoordiateToAboveAverageCoordiate);



    console.log('angle for Bird',angleForCurrentBird);
    console.log('angle for Next Bird',angleForNextBird);

    
    if(angleForCurrentBird==angleForNextBird){
        return(birdAnglesSame(distanceBirdToAverageCoordiate, distanceNextBirdToAverageCoordiate));
    }

    if(averageCoordinates[0]>birdCoordinates[0]){// bird is left of average coordinates
        console.log(' bird is right of average point ')
        if(averageCoordinates[0]<nextBirdPositionX){//bird is crossing average coordinate
             
            return(DONT_MOVE);
        }
        else if(angleForCurrentBird>angleForNextBird){
            return(TURN_ANTI_CLOCKWISE);

        }else{
            return(TURN_CLOCKWISE);
        }
    }

    if(averageCoordinates[0]<birdCoordinates[0]){// bird is right of average coordinates
        if(averageCoordinates[0]>nextBirdPositionX){//bird is crossing average coordinate
            return(DONT_MOVE)
        }else if(angleForCurrentBird>angleForNextBird){
            return(TURN_CLOCKWISE);
        }else{
            return(TURN_ANTI_CLOCKWISE);
        }
    }

}


function birdAnglesSame(distanceAverageCoordinateToBird, distanceAverageCoordinateToNextBird){
    if(distanceAverageCoordinateToBird<distanceAverageCoordinateToNextBird){// bird flying away
        return(TURN_CLOCKWISE)
    }else if(distanceAverageCoordinateToBird>distanceAverageCoordinateToNextBird){// bird flying towards average point
        return(DONT_MOVE)
    }
}

function isBirdCrossingPoint(birdCoordinates, nextBirdCoordinates, averageCoordinates) {
    
}