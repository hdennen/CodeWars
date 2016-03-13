//not a very elegant solution.
function hammingWeight(x){
  var binary = '';
  var oneBits = 0;
  while (x > 0){ //loop down as we divide.
    if(x>0 && x<1){ //just make sure we count 0-1 since we're using math.floor
      binary+=0;
      x=0; //effectively close the loop.
    }else if(Math.floor(x)%2===0){ //check if result is even.
      binary+=0;
    }else{ //and do this if it's odd.
      binary+=1;
    }
    x/=2; //the actual downward operation. same as x = x/2.
  }
  //binary.split('').reverse().join('');
  //binary is backward without this but it doesn't matter.
  binary.split(''); //make it an arry so we can use a for of loop.
  for(var value of binary){
    if(value == 1){ //count our 1 bits for hamming weight.
      oneBits++; //increment them.
    }
  }
  return oneBits;
}