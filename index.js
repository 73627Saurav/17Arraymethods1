// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b) // 1,2,3,34,4 string

let c = num.join(" and ")
console.log(c, typeof c) // 1 and 2 and 3 and 34 and 4 string
// joins all array elements using seperator

let r1 = num.pop() // Removes the last element from an array and returns that element
console.log(num, r1) // [ 1, 2, 3, 34 ] 4

let r2 = num.push(46) // Adds one or more elements to the end of an array and returns the new length of the array
console.log(num, r2) // [ 1, 2, 3, 34, 56 ] 5

let r3 = num.shift() // Removes the first element from an array and returns that element
console.log(num, r3) // [ 2, 3, 34, 56 ] 1

let r4 = num.unshift(78) // Adds one or more elements to the beginning of an array and returns the new length of the array
console.log(num, r4) // [ 78, 2, 3, 34, 56 ] 5

/* 
concat(arr1, arr2, ..., arrN): Joins two or more arrays together.

copyWithin(target, start, end): Copies a sequence of array elements within the array.

entries(): Returns an iterator object that contains the key/value pairs for each element in the array.

every(callback, thisArg): Tests whether all elements in the array pass the test implemented by the provided function.

fill(value, start, end): Fills all the elements of an array from a start index to an end index with a static value.

filter(callback, thisArg): Creates a new array with all elements that pass the test implemented by the provided function.

find(callback, thisArg): Returns the value of the first element in the array that satisfies the provided testing function.

findIndex(callback, thisArg): Returns the index of the first element in the array that satisfies the provided testing function.

forEach(callback, thisArg): Executes a provided function once for each array element.

includes(value, fromIndex): Determines whether an array includes a certain value among its elements.

indexOf(value, fromIndex): Returns the first index at which a given element can be found in the array.

join(separator): Joins all elements of an array into a string.

keys(): Returns an iterator object that contains the keys for each element in the array.

lastIndexOf(value, fromIndex): Returns the last index at which a given element can be found in the array.

map(callback, thisArg): Creates a new array with the results of calling a provided function on every element in the array.

pop(): Removes the last element from an array and returns that element.

push(element1, element2, ..., elementN): Adds one or more elements to the end of an array and returns the new length of the array.

reduce(callback, initialValue): Applies a function against an accumulator and each element in the array to reduce it to a single value.

reduceRight(callback, initialValue): Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

reverse(): Reverses the order of the elements in an array.

shift(): Removes the first element from an array and returns that element.

slice(start, end): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

some(callback, thisArg): Tests whether at least one element in the array passes the test implemented by the provided function.

sort(compareFunction): Sorts the elements of an array in place.

splice(start, deleteCount, item1, item2, ..., itemN): Adds and/or removes elements from an array.

toString(): Returns a string representation of an array.

unshift(element1, element2, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length of the array.

values(): Returns an iterator object that contains the values for each element in the array. */