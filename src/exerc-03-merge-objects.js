'use strict';

// NOTE: I've improved the result to accept not only 2 but any number of  arguments of the type {}

const mergeObjects = (...args) => args.reduce( (arr, elem) => ({ ...arr, ...elem }) );

// OUTPUT


console.log('Merged/test 1 ->', mergeObjects( { a: 1, b: 2}, {c: 3, d: 4 } ) );
console.log('Merged/test 2 ->', mergeObjects( { a: 1, b: 2} ) );
console.log('Merged/test 3 ->', mergeObjects( {} ) );

let  arrToMerge =[ { a: 1, b: 2}, {c: 3, d: 4 } ];
console.log('Merged/test 4 ->', mergeObjects(...arrToMerge) );

arrToMerge =[ { a: 1, b: 2}, {c: 3, d: 4 }, {e: 5, f: 6, g: 7, h: 8}, {} ];
console.log('Merged/test 5 ->', mergeObjects(...arrToMerge) );
