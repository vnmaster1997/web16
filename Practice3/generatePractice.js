'use strict'
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm

  var a = []

  for(var i = 0; i < testLengthArray.length; i++) {
    var input = [];
    var target = 0;
    var output = -1;
    for(var j = 0; j < testLengthArray[i]; j++) {
      input[j] = (getRandomInt(-10, 10));
    }
    
    target = (getRandomInt(-10, 10));

    for(var j = 0; j < testLengthArray[i]; j++) {
      if(input[j] == target) {
        output = j;
        break;
      } else {
        output = -1;
      }

    }
    var x = {input, target, output};
    a.push(x);
  }
  return a;
}

module.exports = generate
