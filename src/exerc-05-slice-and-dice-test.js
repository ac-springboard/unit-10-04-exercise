'use strict';

describe('Slice And Dice Tests', () => {

  it('should remove a random element in the items array and return a new array without that item',() => {
    expect( ['1,2','1,3', '2,3'].includes( removeRandom([1, 2, 3]).join(','))).toBe(true);
  });

  it('should return a new array with every item in array1 and array2', () => {
    expect( extend( [1, 2], ['a', 'b'] ).join(',')).toEqual('1,2,a,b');
  });

  it('should return a new object with all the keys and values from obj and a new key/value pair', () => {
    expect( addKeyVal( { a: 10, b: 20}, 'c', 30 ) ).toEqual( { a: 10, b: 20, c: 30 });
  });

  it('should return a new object with a key removed', () => {
    expect( removeKey({ a: 1, b: 2, c: 3 }, 'b')).toEqual( { a: 1, c: 3});
  });

  it('should Combine two objects and return a new object', () => {
    expect(combine({a: 4, b: 3}, { c: 2, d: 1})).toEqual({a: 4, b: 3, c: 2, d: 1 });
  });

  it('should return a new object with a modified key and value', () => {
    expect( update( {a: 1, b: 2, c: 3}, 'b', -2 )).toEqual( {a: 1, b: -2, c: 3});
  });

});
