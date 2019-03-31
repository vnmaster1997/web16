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

  var results = [];
  
  // testLengthArray.forEach(function(item) {

  // })

  // testLengthArray.filter(function(item) {
  //   return item > 5;
  // })

  // return testLengthArray.map(function(testLengthArratItem, index) {
  //   // tra ve array moi tu array cu
  // })

  for(let i = 0; i < testLengthArray.length; i++) {
    let newItem = {
      input: [],
      output: null,
      target: null
    }

    for(let j = 0; j < testLengthArray[i]; j++) {
      newItem.input.push(Math.floor(Math.random()*20000-10000));
    }

    newItem.input.sort((a,b) => {
      return a-b;
    });

    if(i == 0) {
      newItem.target = 10001;
      newItem.output = -1;
    } else if(i==1) {
      newItem.target = newItem.input[0];
      newItem.output = 0;
    } else if(i==2) {
      newItem.target = newItem.input[newItem.input.length - 1];
      newItem.output = newItem.input.length - 1;
    } else if(i==3) {
      newItem.target = newItem.input[2];
      newItem.output = 2;
    } else {
      newItem.target = Math.floor(Math.random()*20000-10000);
      newItem.output = newItem.input.indexOf(newItem.target);
    }

    results.push(newItem);
  }
  return results;
}

module.exports = generate
