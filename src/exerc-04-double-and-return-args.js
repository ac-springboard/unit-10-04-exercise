'use strict';

const doubleAndReturnArgs = (arr, ...others ) => [ ...arr, ...(others.map( elem => elem * 2)) ];

// OUTPUT
console.log( 'doubleAndReturnArgs( [1, 2, 3], 4, 4 )                             ->',
             doubleAndReturnArgs( [1, 2, 3], 4, 4 ) );
console.log( 'doubleAndReturnArgs( [2], 10, 4 )                                  ->',
             doubleAndReturnArgs( [2], 10, 4 ) );
console.log( 'doubleAndReturnArgs( ["Namaste,", "Master!"], Math.PI, SQRT1_2 )   ->',
             doubleAndReturnArgs( ["Namaste,", "Master!"], Math.PI, Math.SQRT1_2 ) );
