let  myArray = ["bread", "dish soap", "detergent",12,34,true, false];
myArray=['a','b','c']

const  myArray2 = [1,34,4.4,5,5];

console.log(myArray2,myArray)

console.log(typeof(myArray)) //array is of data type object

// const will not let an array be reassigned - will give an error
/*
const myArr = [1,2,3,4,5]
myArr = [3,4,5,6]
*/

//array length
const colors = ["red", "blue", "green","pink","cyan","maroon"];
console.log(colors,colors.length)

//Array is 0 index based. Items can be accessed via their index location

console.log(colors[1])
colors[1]="yellow"
console.log(colors[colors.length-1])

/*

In this exercise, you will create 3 arrays using “let” and print out the value in the
console.
1. Declare an array myColors with 4 of your favorite colors
2. Declare an array myFamily with 3 names of family members
3. Declare an array myContacts with 3 phone numbers
4. Declare an array myChoices with 2 boolean values
Now, print the arrays to the console individually. What do you get?
Now print all array at the same time. See below:
console.log( myColors, myFamily, myContacts, myChoices );

*/

/*

Now let print specific values in an array. Follow this instructions
1. Declare an array nycBoroughs and add all 5 boroughs as strings
2. Declare an array zipCodes and add 3 zipcodes. One of them should be yours.
3. Declare an array myPhrases and add the following sentences:
- “I live in the borough of ”
- “and my zip code is “
4. Finally, create a new variable called myHome and add the values of the arrays
to create a sentence.
5. Print the value in the console.


*/

myArray = ['Tina','Lin','Harry','John','Smith']
//push and pop : add and remove items at the end of the array
// push - returns new length of the array
// pop - returns which item was popped out from the array
let poppedout,newlen;

myArray.push('Johnny')
newlen=myArray.push('Larry')
console.log(newlen)

poppedout=myArray.pop();
console.log(poppedout,myArray)

myArray.sort();
myArray.reverse();
console.log(myArray," is the array after sort")


/*
The shift() method removes the first item of an array.
The shift() method changes the original array.

The shift() method returns the shifted element.
The unshift() method adds new elements to the beginning of an array.

The unshift() method overwrites the original array. adds 1 or more elements to the beginning of the array.
*/


//shift
let array1 = [1,2,3,4,5,6]
poppedout=array1.shift()
//console.log('after shift:',array1,poppedout);

newlen=array1.unshift(10)
console.log(newlen,array1);




//splice : 
//parameter 1: index position from which to operate
//parameter 2: number of elements to remove
//parameter 3: elements to add

let array2 = [1,2,3,4,5,6]
//console.log('original array2:',array2);
array2.splice(1,3,100,200,300)
console.log('revised array2:',array2);

/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

*/

/*
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.
*/
//slice - extracts/copies items from the array to create a new one 


let array3 = ['a','b','c','d','e','f']

let array4=array3.slice(1,3)
console.log('after slice array3:',array3);
console.log('after slice array4:',array4);


//map method
let array5 = [1,2,3,4,5,6]
// map is an array method which modify array items and
//return new array
console.log('original array5:',array5);
const newArray6 = array5.map(item => {
return item*5;
})
console.log('after map array6:',newArray6)

/*

Create a function that accepts an integer and carries out array operations based on the value. Use prompt() to accept items to be added/removed from the user. Display appropriate messages in your program.

1 - Push an item to the array
2 - Pop an item from the array
3 - shift on an array
4 - unshift an item onto an array
5 - slice and array into 2
6 - splice on an array 
7 - map on an array

*/