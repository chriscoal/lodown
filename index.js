'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: This method returns the first argument it receives.
 *
 * @param: {*}
 * @returns: {*} Data type, unchanged
 *
 * Edge Cases: n/a
 *
 * Examples:
 * var object = { 'a': 1 };
 * console.log(_.identity(object) === object); // => true
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Takes a value and defines the data type
 *
 * @param: {*} Accepts Array, Number, Boolean, String, Undefined, Null,
 * anything: any value.
 *
 * @returns: {String} Return the typeOf <value> as a string
 *  Types are one of:
 *      -'string'
 *      - 'array'
 *      - 'object'
 *      - 'undefined'
 *      - 'number'
 *      - 'null'
 *      - 'function'
 *
 * Edge Cases: n/a
 *
 * Examples:
 * _.typeOf(1023) -> 'number'
 * _.typeOf('Ada Lovelace') -> 'string'
 * _.typeOf(['cat', 'dog', 'fish']) -> 'object'
 */
 
function typeOf(value){
    if (Array.isArray(value)){
        return "array";
    } else if (value !== null && typeof value === "object"){
        return "object";
    } else if (value === null){
        return "null";
    } else
    return typeof value;
}
module.exports.typeOf = typeOf;

/**
 * first: Return the Nth first elements based on the argument given to the
 *  number. The first two actions vet the array and number parameters if they
 *  are arrays are numbers.  If the parameters are an array and a number, then
 *  the number will pull the array index and return the value at the index. If
 *  not an array, create an empty array.  If not a number, return the first
 *  element of the array. If new array does not exist, return the first index
 *  of array parameter.
 *
 * @param: {Array} An array.
 * @param: {Number} A number.
 *
 *  Edge Cases:
 *      1. return an empty array if the number is negative.
 *      2. If the number is greater than the array length, return array
 *
 *
 * @returns: {Nth of the elements in an array}
 *
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */
 
function first(array, number){
    if(!Array.isArray(array) || number <= -1){
        return [];
    } else if (number >= 0){
        return array.splice(0, number);
    } else
    return array[0];
}
module.exports.first = first;

/**
 * last: Returns last Nth elements of an array based on the number's argument.
 *  The first two actions vet the array and number parameters if they are arrays
 *  are numbers.  If the parameters are an array and a number, then the number
 *  will pull the array index and return the value at the index. If not an
 *  array, create an empty array.  If not a number, return the last element of
 *  the array. If new array does not exist, return the last index of array
 *  parameter.
 *
 * @param: {Array} An array.
 * @param: {Number} A number.
 *
 * @returns: {N number of elements in an array.}
 *
 * Edge Cases:
 *      1. Return an empty array if the number is negative.
 *      2. If the number is greater than the array length, return array
 *
 *
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */
 
function last(array, number){
    if (!Array.isArray(array) || number <= -1){
        return [];
    } else if (typeof number !== 'number'){
        return array[array.length - 1];
    } else if (number > array.length){
        return array;
    } else if (typeof number === 'number'){
        return array.splice(array.length - number, number);
    }
}
module.exports.last = last;

/**
 *indexOf: Returns index number where the value's argument first appears in
 *  the array.
 *
 * @param: {Array} An array
 * @param: {String} A value, which is a string data type.
 *
 * @returns: {Number} Returns a number either the index position or -1 if
 *  not present.
 *
 * Edge Cases:
 *      1. If array has multiple occurances of value, return numeric index
 *          position.
 *      2. If value isn't in array, return -1.
 *
 *
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */
 
function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Cycles through an array to see if it contains a value.
 * Return true of <array> contains <value>.  Return false if not.
 *
 * @param: {Array} An array of various data types
 *
 * @param: {*} A value of any data type
 *
 * @returns: {true, false}Boolean true/false if the value argument is in the
 *  array object with the updated information.
 *
 * Edge Cases:
 *      1. Use === strict equality to vet the array indexes to the values
 *      2. If no value is given, return false.
 *
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 *
 */
 
function contains(array, value){
    return (array.indexOf(value) >= 0 ? true : false);
}
module.exports.contains = contains;

/**
 * unique: Loop through the array and remove any duplicate values.
 *
 * @param: {Array} An array with duplicate values
 * @returns: {Array} An array without duplicate values
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
 
function unique(array){
    let newArray =[];
    each(array, (e) => {
        if (indexOf(newArray, e) === -1){
            newArray.push(e);
        }
    });
    return newArray;
}
module.exports.unique = unique;

/**
 * filter: Designed to filter values in a collection based on a test.
 * Takes a collection, an Array, and passes each value
 * in the collection through a test Function. The test Function returns
 * true if the value passes the test, false otherwise. Values that pass
 * the test are collected and returned in an output Array.
 *
 * @param {Array} collection: The collection to filter.
 * @param {Function} action:  The Function to be applied to each value in
 * the collection. The test Function must return a Boolean based on some
 * logic which tests the value given to it. The test function is called on
 * each element, the index, and the entire collection
 *
 * @returns {Array}: An Array containing the filtered collection values.
 * The Array will contain only the values that passed the test.
 * Usage:
 *
 * Edge Cases: If function returns something other than true or false, return
 *  newArray.
 *
 * Examples:
 *      const letters = ['a', 'b', 'b', 'c'];
 *      const onlyBs = filter(letters, function(letter) {
 *          return letter === 'b';
 *      });
 *      console.log(onlyBs); // -> ['b', 'b']
 */
 
function filter(array, func){
    let newArray = [];
    each(array, (e, i, a) => {
        if (func(e, i, a)){
            newArray.push(e);
        }
    });
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: It iterates through an array and logical function test is acted on
 * arguments. If the test returns false, the elements are pushed into an array.
 *
 * @param: {Array}
 *
 * @param: {Function} action: The test (action) function is called on each
 * element, the index, and the entire collection
 *
 * @returns: {Array} An array of false arguments
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */
 
function reject(array, func){
    let newArray = [];
    each(array, (e, i, a) => {
        if (!func(e, i, a)){
            newArray.push(e);
        }
    });
    return newArray;
}
module.exports.reject = reject;

/**
 * partition: Iterates through an array with a function acting on each element
 * in the array.
 *
 * @param: {Array}
 * @param: {Function} action:
 *
 * @returns: {truthy, falsy} Returns the truthy and falsy values into two
 * subarrays in a larger array. The test (action) function is called on
 * each element, the index, and the entire collection
 *
 * Edge Cases: Return an array of arrays.
 *
 *Examples:
 *   _.partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 *  }
 */
 
function partition(array, func){
    let partitionArray = [filter(array, func), reject(array, func)];
    return partitionArray;
}
module.exports.partition = partition;

/**
 * map: A function is called upon each element in a collection and return
 * value of each function call will be in a new array
 *
 * @param: {Array or Object} A collection
 * @param: {Function} action: A function
 *
 * @returns: {Array} An array with the function elements
 *
 * Edge Cases: n/a
 *
 * * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
 
function map(collection, func){
    let newArray = [];
    each(collection, (e, i, a) => {
        newArray.push(func(e, i, a));
    });
    return newArray;
}
module.exports.map = map;

/**
 * pluck: Cycles through an object to see if a given property is in the objects,
 * in the array. If the key exists, values are pushed into an array.
 *
 * @param: {An array of objects}
 *
 * @param: {String} String with a property key.
 *
 * @returns: {Array} An array containing values of the identical keys.
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
 
function pluck(array, prop){
    let pluckArray = [];
    map(array, (e, i, a) => {
        if (a[i].hasOwnProperty(prop)){
            pluckArray.push(a[i][prop]);
        }
    });
    return pluckArray;
}
module.exports.pluck = pluck;

/**
 * every: A function will call upon each element in the collection and if all of
 *  the returning values are true, true will be returned.  If one of the
 *  elements are false, false will be returned. Empty arrays will return true
 *  after a function call. If no function callback exists, return false.
 *
 * @param: {Collection} A collection.
 *
 * @param: {Function} action: A function.
 *
 * @returns: {true, false} Boolean true or false.
 *
 * Edge Cases:
 *      1. If the function doesn't return a boolean, return false flag.
 *      2. If the function is not given, return false flag.
 *
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
 
function every(collection, func = 0){
    if (func === 0){
        for (let i = 0; i < collection.length; i++){
            if (!collection[i]){
                return false;
            }
        }
        return true;
    } 
    if (reject(collection, func).length > 0){
        return false;
    }
    return true;
}
module.exports.every = every;

/**
 * some: A function will call upon each element in the collection.  If all of
 *  the returing values are true, true will be returned.  If one of the elements
 *  returns true, true will be returned. Empty arrays will return false after a
 *  function call. If no function callback exists, return true.
 *
 * @param: {Array or Object} A collection.
 *
 * @param: {Function} action: A function.
 *
 * @returns: {true, false} Boolean value, true or false
 *
 * Edge Cases:
 *      1. If the function doesn't return a boolean, return false flag.
 *      2. If the function is not given, return false flag.
 *
 *
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */
 
function some(collection, func){
    let result = false;
    if (typeOf(func) !== "function"){
        each(collection, (e) => {
            if (e){
                result = true;
            }
        });
        return result;
    }
    each(collection, function(e, i, a){
        if (func(e, i, a)){
            result = true;
        }
    });
    return result;
}
module.exports.some = some;

/**
 * reduce: Calls a function for every element passing the arguments:
 *  previousResults, element; index.  And uses the return value of the function
 *  as the 'previous result'for the next iteration and seed as the first
 *  'previous value' will be the first index value of the array.  After the
 *  last iteration, the return value of the final function call will be
 *  returned.  If seed is undefined, assign the seed the value of the result.
 *
 * @param: {Array} An array.
 *
 * @param: {Function} action: A function.
 *
 * @param: {*} A seed.  The seed could be an empty space, empty array literal,
 * empty object literal, string, number, etc.
 *
 * @returns: {Number, Array} A number or an array representing the final
 *  function call of the array.
 *
 *
 * Edge Cases:
 *   1) If seed is undefined, then assign seed the value of result
 *
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex)
 *  { return previousSum + currentValue }, 0) -> 6
 *
 */
 
function reduce(array, func, seed){
    if (seed === undefined){
        let seed = array[0];
        each(array, (e,i,a) => {
            if (i > 0){
                seed = func(seed, e, i);
        }});
        return seed;
    }
    each(array, (e,i,a) => {
        seed = func(seed,e,i);
    });
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Updates the first object's key/value pairs with key/value pairs not
 * discovered.
 *
 * @param: {object1}
 *
 * @param: {object2, possibly more objects}
 *
 * @returns: {object1 with unique values from object2, or multiple objects.}
 *
 *
 * Edge Cases:
 *      1. Unique key/values from comparison objects are imported without
 *          changes.
 *      2. Object1's values could be overwritten by object2's keyvalue pairs
 *          if the keys in both objects match.
 *
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
 
function extend(){
    let result = arguments[0];
    each(arguments, (e,i,a) => {
        for (let key in arguments[i]){
            result[key] = arguments[i][key];
        }
    });
    return result;
}
module.exports.extend;