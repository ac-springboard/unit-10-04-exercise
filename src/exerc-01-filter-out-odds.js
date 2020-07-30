'use strict';

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

const filterOutOddsES6 = (...args) => args.filter( num => num % 2 === 0 );

// OUTPUT

console.log( '...filterOutOdds ->', filterOutOdds(1,2,3,4,5) );
console.log( 'filterOutOddsES6 ->', filterOutOddsES6(1,2,3,4,5) );
