
function steerBird(averageCoordinates, birdNumber, directionOfBird){

    let birdAngles = findAngleOfBird(averageCoordinates, birdNumber);
    let birdCoordinates = getCoordinateOfObject(birdNumber);

    distBirdToPoint = distBetweenCoordinates(averageCoordinates,birdCoordinates)

    let angleForCurrentBird = birdAngles[0];
    let angleForNextBird = birdAngles[1];

    let nextBirdCoordinates = findNextPositionOfObject(birdNumber);
    

    if(angleForCurrentBird == angleForNextBird){
        console.log('bird angles same');
        birdAnglesSame(birdNumber, directionOfBird);
        //break;
    }
    
    if(directionOfBird == SEPERATION){
        var birdAngleChange = SEPERATION_ANGLE_CHANGE;
        //var birdAngleChange = (6/(distBirdToPoint+4))-0.1;
    }else if(directionOfBird == COHESION){
        var birdAngleChange = -COHESION_ANGLE_CHANGE;
    }else if(directionOfBird == COLLISION_ANGLE_CHANGE){
        var birdAngleChange =COLLISION_ANGLE_CHANGE;//SEPERATION_ANGLE_CHANGE;//(12/(distBirdToPoint+3))-0.1;
    }


    if(averageCoordinates[0]>nextBirdCoordinates[0]){// bird is left of average coordinates
        if(averageCoordinates[0]<birdCoordinates[0]){//bird is crossing average coordinate
             // dont move
            //return(DONT_MOVE);
        }
        else if(angleForCurrentBird>angleForNextBird){
            // turn anti Clockwise
            birdNames[birdNumber].changeAngleOfBird(birdAngleChange);
            //return(TURN_ANTI_CLOCKWISE);

        }else{
            // turn clockwise
            birdNames[birdNumber].changeAngleOfBird(-birdAngleChange);
            //return(TURN_CLOCKWISE);
        }
    }

    if(averageCoordinates[0]<nextBirdCoordinates[0]){// bird is right of average coordinates
        if(averageCoordinates[0]>birdCoordinates[0]){//bird is crossing average coordinate
            // dont move
            //return(DONT_MOVE)
        }else if(angleForCurrentBird>angleForNextBird){
            // turn clockwise
            birdNames[birdNumber].changeAngleOfBird(-birdAngleChange);
            //return(TURN_CLOCKWISE);
        }else{
            // turn antiClocwise
            birdNames[birdNumber].changeAngleOfBird(birdAngleChange);
            //return(TURN_ANTI_CLOCKWISE);
        }
    }

    function birdAnglesSame(birdNumber, directionOfBird){ // type of movement is seperation or cohesion

        let birdCoordinates = getCoordinateOfObject(birdNumber);
        let nextBirdCoordinates = findNextPositionOfObject(birdNumber);
    
        let distCoordToBird = distBetweenCoordinates(averageCoordinates, birdCoordinates);
        let distCoordToNextBird = distBetweenCoordinates(averageCoordinates, nextBirdCoordinates);
        
    
        if(distCoordToBird<distCoordToNextBird){// bird flying away
            if(directionOfBird == COHESION){
                birdNames[birdNumber].changeAngleOfBird(COHESION_ANGLE_CHANGE);
            }
        }else{// bird flying towards average point
            if(directionOfBird == SEPERATION){
                birdNames[birdNumber].changeAngleOfBird(SEPERATION_ANGLE_CHANGE);
            }
        }
    }
}



function findAngleOfBird(averageCoordinates, birdNumber){ // finds bird angle relative to the average coordinate

    const FIXED_DISTANCE = 1;// fixed distance in order to create triangle

    let birdCoordinates = getCoordinateOfObject(birdNumber);

    // sets a constant point above average point in order to create a triangle to do cosine rule to find angle
    let pointAboveAverageCoordinateX = averageCoordinates[0];
    let pointAboveAverageCoordinateY = (averageCoordinates[1])+FIXED_DISTANCE;

    let pointAboveAverageCoordinates = [pointAboveAverageCoordinateX, pointAboveAverageCoordinateY];
    let nextBirdCoordinates = findNextPositionOfObject(birdNumber);//[nextBirdPositionX, nextBirdPositionY];

    let distanceAverageCoordiateToAboveAverageCoordiate = FIXED_DISTANCE;//distBetweenCoordinates(averageCoordinates,pointAboveAverageCoordinates);//c for both

    //find lengths of triangle from bird to average coordinate to point above average coordinate
    let distanceAboveAverageCoordiateToBird = distBetweenCoordinates(pointAboveAverageCoordinates,birdCoordinates);//a for current bird pos
    let distanceBirdToAverageCoordiate = distBetweenCoordinates(birdCoordinates,averageCoordinates);//b for current bird pos
    
    
    //find angle between bird and vertical
    let angleForCurrentBird = cosineRuleAngle(distanceAboveAverageCoordiateToBird, distanceBirdToAverageCoordiate, distanceAverageCoordiateToAboveAverageCoordiate);

    //find lengths of triangle from next bird to average coordinate to point above average coordinate
    let distanceAboveAverageCoordiateToNextBird = distBetweenCoordinates(pointAboveAverageCoordinates,nextBirdCoordinates);//a for next bird pos
    let distanceNextBirdToAverageCoordiate = distBetweenCoordinates(nextBirdCoordinates,averageCoordinates);//b for next bird pos

    //find angle between next bird and vertical
    let angleForNextBird = cosineRuleAngle(distanceAboveAverageCoordiateToNextBird, distanceNextBirdToAverageCoordiate, distanceAverageCoordiateToAboveAverageCoordiate);

    let birdAngles = [angleForCurrentBird, angleForNextBird];

    return(birdAngles);
}
