

//angle key
/*
0 = right
Math.PI/2 = down
Math.PI = left
3*(Math.PI/2) = up
*/

function betterCohesionTester(){
  var passedTests = [];
  var failedTests = [];
  if( (steerBirdToPoint([4,2], [3,3], 3*(Math.PI/2) )) == TURN_ANTI_CLOCKWISE ){    // test case 1
    passedTests.push(1)
  }else{failedTests.push(1)}
  
  if( (steerBirdToPoint([2,2], [3,3], 3*(Math.PI/2) )) == TURN_CLOCKWISE ){    // test case 1
    passedTests.push(2)
  }else{failedTests.push(2)}
  
  if( (steerBirdToPoint([4,2], [3,3], Math.PI/2 )) == TURN_CLOCKWISE ){    // test case 1
    passedTests.push(3)
  }else{failedTests.push(3)}

  if( (steerBirdToPoint([2,2], [3,3], Math.PI/2 )) == TURN_ANTI_CLOCKWISE ){    // test case 1
    passedTests.push(4)
  }else{failedTests.push(4)}
  
  if( (steerBirdToPoint([4,2], [3,3], 0 )) == TURN_CLOCKWISE){    // test case 1
    passedTests.push(5)
  }else{failedTests.push(5)}

  if( (steerBirdToPoint([4,2], [3,3], Math.PI )) == TURN_ANTI_CLOCKWISE){    // test case 1
    passedTests.push(6)
  }else{failedTests.push(6)}

  if( (steerBirdToPoint([3,3.1], [3,3], Math.PI/2)) == TURN_CLOCKWISE){    // test case 1
    passedTests.push(7)
  }else{failedTests.push(7)}

  if( (steerBirdToPoint([3.1,3.1], [3,3], Math.PI+Math.PI/4 )) == DONT_MOVE){    // test case 1
    passedTests.push(8);
  }else{failedTests.push(8)}
  

  /*
  if( (steerBirdToPoint([3,2], [0,0], Math.PI)) == TURN_CLOCKWISE ){    // test case 1
    passedTests.push(1)
  }else{failedTests.push(1)}
  if( (steerBirdToPoint([3,2], [0,0], 0)) == TURN_ANTI_CLOCKWISE ){    //test case 2
    passedTests.push(2)
  }else{failedTests.push(2)}
  
  if( (steerBirdToPoint([2,2], [4,4], 0)) == TURN_CLOCKWISE ){    //test case 3
    passedTests.push(3)
  }else{failedTests.push(3)}
  
  if( (steerBirdToPoint([2,2], [4,4], Math.PI)) == TURN_ANTI_CLOCKWISE ){    //test case 4
    passedTests.push(4)
  }else{failedTests.push(4)}
  
  if( (steerBirdToPoint([3,0.5], [0,0], Math.PI)) == TURN_CLOCKWISE ){    //test case 5
    passedTests.push(5)
  }else{failedTests.push(5)}
  
  if( (steerBirdToPoint([2.9,2.9], [3,3], Math.PI/4)) == DONT_MOVE ){    //test case 6
    passedTests.push(6)
  }else{failedTests.push(6)}
  
  if( (steerBirdToPoint([3.1,3.1], [3,3], (Math.PI/4)*5 )) == DONT_MOVE ){    //test case 7
    passedTests.push(7)
  }else{failedTests.push(7)}
  
  if( (steerBirdToPoint([4,2], [3,3], (Math.PI/4))) == TURN_ANTI_CLOCKWISE ){    //test case 8
    passedTests.push(8)
  }else{failedTests.push(8)}
  
  if( (steerBirdToPoint([4,2], [3,3], Math.PI)) == TURN_CLOCKWISE ){    //test case 9
    passedTests.push(9)
  }else{failedTests.push(9)}
  
  if( (steerBirdToPoint([2,4], [3,3], 0)) == TURN_CLOCKWISE ){    //test case 9
    passedTests.push(10)
  }else{failedTests.push(10)}

  if( (steerBirdToPoint([2,4], [3,3], Math.PI)) == TURN_ANTI_CLOCKWISE ){    //test case 9
    passedTests.push(11)
  }else{failedTests.push(11)}
  if( (steerBirdToPoint([3,8], [3,3], Math.PI)) == DONT_MOVE ){    //test case 9

    passedTests.push(12)
  }else{
    failedTests.push(12);
    console.log( 'test 12 result',steerBirdToPoint([3,8], [3,3], Math.PI));
  }
  if( (steerBirdToPoint([3,4], [3,3], 0)) == TURN_CLOCKWISE ){    //test case 9
    console.log(steerBirdToPoint([3,8], [3,3], 0))
    passedTests.push(13)
  }else{
    failedTests.push(13);
    console.log('test 13 result', steerBirdToPoint([3,4], [3,3], Math.PI));
  }*/
  
  
  for(i=0;i<passedTests.length;i++){
    console.log('test',passedTests[i],'passed')
  }
  for(i=0;i<failedTests.length;i++){
    console.log('test',failedTests[i],'failed')
  }
}

