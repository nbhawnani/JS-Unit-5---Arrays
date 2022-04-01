let myArray = ["bread", "dish soap", "detergent",12,34,true, false];
myArray=['a','b','c']

//push and pop : add and remove items at the end of the array
// push - returns new length of the array
// pop - returns which item was popped out from the array
let poppedout,newlen;
myArray.push('f')
newlen=myArray.push(2345,678)
console.log('Length after push:',newlen)
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



console.log(myArray,colors);
document.getElementById("demo1").innerHTML=myArray+"<br>"+"this is myArray"+"<br>length:" + myArray.length + "<br>popped out:" + poppedout;

document.getElementById("demo2").innerHTML="<b>"+numbers+"</b>";

document.getElementById("demo3").innerHTML=colors[2]+colors[3];

// findng out length of an array via length property
document.getElementById("demo4").innerHTML=colors + "<br> length is:"+colors.length;