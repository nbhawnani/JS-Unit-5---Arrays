let  myArray = ["bread", "dish soap", "detergent",12,34,true, false];
myArray=['a','b','c']



//push and pop : add and remove items at the end of the array
// push - returns new length of the array
// pop - returns which item was popped out from the array
let poppedout,newlen;
myArray.push('f')
newlen=myArray.push(2345,678)
//console.log('Length after push:',newlen)
poppedout=myArray.pop();

// reassigning individual item values using indexing 
// assign value to the last position using length property
let colors = ["red", "blue", "green"];
colors[2]='yellow';
colors[3]='green';
colors[colors.length]='rainbows';
colors.sort(); //alphabetical sort. not to be used with numbers. only strings.


//declaring arrays with const keyword
const numbers=[1,2,3,4];
numbers[1]='2nd element replaced with a string'
numbers[4]=5;



//console.log(myArray,colors);
document.getElementById("demo1").innerHTML=myArray+"<br>"+"this is myArray"+"<br>length:" + myArray.length + "<br>popped out:" + poppedout;

document.getElementById("demo2").innerHTML="<b>"+numbers+"</b>";

document.getElementById("demo3").innerHTML=colors[2]+colors[3];

// findng out length of an array via length property
document.getElementById("demo4").innerHTML=colors + "<br> length is:"+colors[-1];

/*
//shift
let array1 = [1,2,3,4,5,6]
console.log('original array:',array1);
array1.shift()
console.log('after shift:',array1);
//unshift
array1.unshift(10)
console.log('after unshift:',array1);
*/

/*
//splice 
let array2 = [1,2,3,4,5,6]
console.log('original array2:',array2);
array2.splice(2,2,10,11,12)
console.log('after splice:',array2);
array2.splice(0,3)
console.log('after 2nd splice:',array2);
*/

/*
//slice - extracts items from the array to create a new one 
let array3 = ['a','b','c','d','e','f']
console.log('original array3:',array3);
let array4=array3.slice(1,3)
console.log('after slice array3:',array3);
console.log('after slice array4:',array4);

*/


//map method
let array5 = [1,2,3,4,5,6]
// map is an array method which modify array items and
//return new array
console.log('original array5:',array5);
const newArray6 = array5.map(item => {
return item*5;
})
console.log('after map array6:',newArray6)


