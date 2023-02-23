//https://codeburst.io/javascript-why-does-3-true-4-and-7-other-tricky-equations-9dd13cb2a92a

3 + true == 4
// when '+' is placed between number and boolean, boolean -> number, 3 + 1 == 4

true + false == 1
// when '+' is placed between two booleans, boolean -> number, 1 + 0 == 4

'4'+ 8 == '48'
// when '+' is placed between two operans, one is string, second is number/boolean, number/boolean -> string and concatenation happens, '4' + '8' == '48'

true+'4' == 'true4'
// JavaScript will convert the boolean into a string value and concatenate, 'true'+'4' == 'true4'

1 + 1 + '1' == '21'
//Order of operations is important
//1 + 1 + '1'
//  2   + '1'
//       '21'

'1' + 1 + 1 == '111'
//Order of operations and work from left to right
//'1' + 1 + 1
//   '11' + 1   //string + number => string
//       '111'  //string + number => string

-'69'+69 == 0
//As you should know by now, without the negation, our answer would be '6969'.However, the negation changes things.
//The minus sign before '69' is a unary minus operator that will actually convert the string to a number and make it negative.Thus, our equation becomes - 69 + 69 which equals 0.


-'giddyup' + 409 == NaN
//When JavaScript fails to produce a number, we are left with NaN (Not A Number).

//https://www.youtube.com/watch?v=abbdJ4Yfm54&t=63s
//Flatenning the array
let arr = [[1,2],[3,4],[5,6,[7,8],9],[10,11,12]];
function customFlat(arr, depth=1){
    let result = [];
    arr.forEach((ar) => {
        if(Array.isArray(ar) && depth > 0){
            result.push(...customFlat(ar,depth-1));
        }else{
            result.push(ar);
        }
    });
    return result;
}

//Explain Call,Apply,Bind method
var person = {
    name: "Roadside Coder",
    hello: function(thing){
        console.log(this.name+" says hello "+thing);
    }
}

var alterEgo = {
    name: 'Piyush Agarwal'
}

//Call Method
person.hello.call(person, 'world') //Output-> Roadside Coder says hello world (provided person as context or object referred by this)
person.hello.call(alterEgo) //Output -> Piyush Agarwal says hello world (provided alterEgo as context or object referred by this)

//Apply Method
person.hello.apply(alterEgo,['world']); //Just args has to be provided in the form of array in case of apply method

//Bind Method
const newHello = person.hello.bind(alterEgo); //Bind doesn't take second param,it just take a context(here,alterEgo) and return us a completely new function with this context

newHello('world') //Output-> Piyush Agarwal says hello world 

//Round 2
//Composition Polyfill
function addFive(a){
    return a+5;
}

function subtracTwo(a){
    return a-2;
}

function multilplyFour(a){
    return a*4;
}

const evaluate = compose(addFive,subtracTwo,multilplyFour); //compose evaluate functions from right to left while pipe evaluate functions from left to right
console.log(evaluate(5)); //23


const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args); //where arg is value returned from previous function and fn is current function to be executed and args are the original arguments
    }
}

//Implement Promise.all
function showText(text,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(text);
        },time)
    });
}

function myPromiseAll(promises) {
    let result=[];
    return new Promise((resolve,reject) => {
        promises.forEach((p,index) => {
            p.then((res) => {
                result.push(res);
                if (index == promises.length - 1) {
                    resolve(result);
                }
            }).catch((err) => reject(err));
        });
    }); 
}

//Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected. Hence, if any one of the promise fail,then the complete Promise.all is going to get failed
Promise.all([showText("hello", 1000),Promise.resolve("hi")]).then((val) => console.log(val))  //Output -> ['hi','hello']


//React lifecycle Methods in class components :-
//1.Component mount :- componentDidMount(){...}
//2.Component update :- componentDidUpdate(){...}
//3.Component unmounted :- componentWillUnmount(){...}



//React lifecycle Methods in function components :-
import React, { useEffect } from 'react';

function Counter({number}) {
    useEffect(() => {
        console.log('Component is mounted');
    }, []) //Because [] is passed as dependency, it will run only one time when page loads so working similar to componentDidMount(){...}

    return <h1>{number} times</h1>;
}

export default Counter;

useEffect(() => {
    console.log('Component is updated');
}, [number]) //Because [number] is passed as dependency, it will run every time value of prop(number) changes so working similar to componentDidUpdate(){...}

useEffect(() => {
    console.log('Component is updated');

    return () => {
        console.log('Component is umounted'); //As soon as component is unmounted this return function will run, hence working similar to componentWillUnmount(){...}
    }
}, [number]) 


//Ways to center a div
//Method 1 - using position
div { //div to center 
    background-color: aquamarine;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}
//Method 2 - using flex
body {//parent tag to div
    text-align: center;
    font-family: monospace;
    font-size: x-large;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

div {//div to center 
    background-color: aquamarine;
}

//Method 3 - using grid
body {//parent tag to div
    text-align: center;
    font-family: monospace;
    font-size: x-large;
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
}
div {//div to center 
    background - color: aquamarine;
}

//What is CSS Box Model
div { // width,border,padding,margin given to any element combines to form css box model for that element.Almost every html element has these properties
    background-color: aquamarine;
    width: 400px;
    border: 5px solid black;
    padding: 20px;
    margin: 20px;
}

//Debouncing in Reactjs
import "./styles.css"

export default function App(){
    const myDebounce = (cb,d) => {
        let timer;
        return function (...args) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb(...args)
            },d);
        };
    };
};


const handleChange = myDebounce((e) => {
    console.log(e.target.value);
},1000);

return (
    <div className="App">
        <input onChange={handleChange} />
    </div>
)

//First ContentFul Paint
//The time until the user sees an indication that the page is loading

//Todd explains how to improve the first contentful paint(FCP) metric and walks through how to simulate this improvement in the course website.Content Delivery Networks(CDNs) are an effective tool to improve FCP because they cache content on a server closer to the user's region which reduces the distance the data needs to travel.

//Todd explains how to improve the largest contentful paint (LCP) metric. One technique is to defer or lazy load resources like JavaScript files or images if they are not needed immediately. Moving script tags to the bottom of the body tag will also prioritize them after the rest of the HTML content.