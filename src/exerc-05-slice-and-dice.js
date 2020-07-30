'use strict';

// NOTE: For this final exercise I've created a set of Jasmine tests in
// exerc-05-slice-and-dice-test.js Please, run the exerc-05-slice-and-dice-test.html
// to execute the tests.

/** remove a random element in the items array
 and return a new array without that item. */

function removeRandom(items) {
  const rand = Math.floor(Math.random() * Math.floor(items.length));
  return  items.filter( (value, index ) => index !== rand );
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [ ...array1, ...array2 ];
}

/** Return a new object with all the keys and values
 from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const newObj = { ...obj };
  newObj[ key ] = val;
  return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const newObj = {...obj};
  delete newObj[key];
  return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
