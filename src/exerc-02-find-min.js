'use strict';

const findMin = (...args) => args.reduce( (min, elem) => elem < min ? elem : min );

const elems = [ - 2, -1, 0, 1, -2, -10 ];

// OUTPUT
console.log( 'The min val of',...elems, 'is ->', findMin(...elems));
